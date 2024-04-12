import { ObjectId } from "mongodb";
import {Request, Response} from 'express';
import MongoRespository from "./MongoRepository";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export default class UserRepository extends MongoRespository{

    public async deleteUser(req: Request, res:Response): Promise<void>{
        const db = await this.connect('api');
        const user = db.collection('User');
        const id = req.params.id
        await user.deleteOne( {_id: new ObjectId(id)});

        res.status(201).json({message: 'Usuário deletado com sucesso'});

    }

    public async createUser(req: Request, res:Response){
        try{
            const db = await this.connect('api');
            const user = db.collection('User');
            const{username,password} = req.body;

            if(!username || !password){
                return res.status(400).json({ error: 'Preencha todos os campos obrigatórios.'});
            }

            const hashedPassword = await bcrypt.hash(password, 10);
    
            await user.insertOne({
                username: username,
                password: hashedPassword,
            });


            res.status(201).json({message: 'Usuario cadastrado com sucesso.'});
        }catch (error) {
            console.error('Erro ao registrar usuário:', error);
            res.status(500).json({error: 'Erro interno do servidor.'});
        }
    };

    public async LoginUser(req: Request, res:Response){
        const db = await this.connect('api');
        const userCollection = db.collection('User');
        const { username, password } = req.body;
        const id = req.params.id


        const foundUser = await userCollection.findOne({username});

        if (!foundUser){
            return res.status(401).json({ message: 'Usuario não encontrado'});
        }

        const isPasswordValid = await bcrypt.compare(password, foundUser.password);

        if (!isPasswordValid){
            return res.status(401).json({message: 'Senha incorreta'});
        }

        const token = jwt.sign({ userId: foundUser.id}, 'chave_secreta', {expiresIn: '1h'});
        res.status(200).json({message: 'Logado com sucesso'})

    }
    public async findAllUser(){
        const db = await this.connect('api');
        const findUser = db.collection('User');
        const results = await findUser.find({}).toArray();
        await this.disconnect;

        return results;
    }
    public async findUserbyName(req: Request, res:Response){
        try{
            const db = await this.connect('api');
            const userCollection = db.collection('User');
            const { username } = req.params;

            if(!username){
                return res.status(400).json({message: 'Você precisa fornecer um nome de usuário'});
            }

            const regex = new RegExp(username, 'i');
            const foundUser = await userCollection.find({ username: {$regex: regex} }).toArray();

            if (foundUser.length === 0){
                return res.status(404).json({message: 'Nenhum usuário encontrado com este nome'})
            };

            res.status(200).json({ users: foundUser});
        }catch (error){
            console.error('Erro ao encontrar usuário', error);
            res.status(500).json({ error: 'Erro interno do servidor'});
        }
    }
}