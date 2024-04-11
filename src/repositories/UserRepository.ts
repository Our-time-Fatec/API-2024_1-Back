import { ObjectId } from "mongodb";
import {Request, Response} from 'express';
import MongoRespository from "./MongoRepository";
import bcrypt from 'bcrypt';


export default class UserRepository extends MongoRespository{
    public async createUserDb(req: Request): Promise<void> {
        const db = await this.connect('api');
        const user = db.collection('User');
        const username = req.params.fullname;
        const password = req.params.password;

        await user.insertOne({
            username: username,
            password: password
        })
        await this.disconnect;
    }

    public async deleteUser(req: Request, res:Response): Promise<void>{
        const db = await this.connect('api');
        const user = db.collection('User');
        const id = req.params.id
        await user.deleteOne( {_id: new ObjectId(id)});

        await this.disconnect;
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
                password: hashedPassword
            })
            await this.disconnect;

            res.status(201).json({message: 'Usuario cadastrado com sucesso.'});
        }catch (error) {
            console.error('Erro ao registrar usuário:', error);
            res.status(500).json({error: 'Erro interno do servidor.'});
        }
    }

}