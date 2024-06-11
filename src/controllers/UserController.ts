import { ObjectId } from "mongodb";
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { tokenize } from "../middlewares/Auth";
import { User } from "../models/user";

class UserController {

    public async createUser(req: Request, res: Response) {
        try {
            const { name, mail, username, password, status } = req.body;

            if (!name || !mail || !username || !password) {
                return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({ name, mail, username, password: hashedPassword, status });
            const response = await user.save();
            res.status(201).json({ message: 'Usuario cadastrado com sucesso.' });
        } catch (error) {
            console.error('Erro ao registrar usuário:', error);
            res.status(500).json({ error: 'Erro interno do servidor.' });
        }
    }

    public async login(req: Request, res: Response) {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: 'Forneça o nome de usuário e senha.' });
        }

        const user = await User.findOne({
            username
        });

        if (!user) {
            return res.status(401).json({ message: 'Usuario não encontrado.' });
        }
        console.log("User", user);
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Senha incorreta.' });
        }
        if (user) {
            res.json({ ...user.toObject(), token: tokenize(user.toObject()) });
          }
        res.status(200).json({ message: 'Logado com sucesso.', user })
    }

    public async deleteUser(req: Request, res: Response): Promise<void> {
        const id = req.params.id
        try{
            await User.deleteOne({ _id: new ObjectId(id) });
            res.status(201).json({ message: 'Usuário deletado com sucesso.'});
        } catch (error){
            console.error('Erro ao deletar usuário:', error);
            res.status(500).json({error: 'Erro interno do servidor.'});
        }
        

    }

    public async findAllUser(req: Request, res: Response) {
        try{
            const results = await User.find({});
            res.status(200).json(results);
        } catch(error){
            console.error('Erro ao buscar usuários:', error);
            res.status(500).json({ error: 'Erro interno do servidor'});
        }
    }

    public async findUserbyName(req: Request, res: Response) {
        try {
            const { name } = req.params;

            if (!name) {
                return res.status(400).json({ message: 'Você precisa fornecer um nome de usuário.' });
            }

            const regex = new RegExp(`^${name}`, 'i');
            const foundUser = await User.find({ name: { $regex: regex } });

            if (foundUser.length === 0) {
                return res.status(404).json({ message: 'Nenhum usuário encontrado com este nome' })
            };

            res.status(200).json({ users: foundUser });
        } catch (error) {
            console.error('Erro ao encontrar usuário', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
}

export default new UserController();