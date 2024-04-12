import { ObjectId } from "mongodb";
import {Request, Response} from 'express';
import MongoRespository from "./MongoRepository";

export default class UserRepository extends MongoRespository{
    public async createUser(): Promise<void> {
        const db = await this.connect('api');
        const user = db.collection('User');
        const nome =

        await user.insertOne({
            Nome: 'Aliceu',
            Sobrenome: 'Donizete'
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

    public async listUsers(){
        const db = await this.connect('api');
        const user = db.collection('User');
        const results = await user.find({}).toArray();
        
        console.log(results)
        await this.disconnect;

        return results;
    }
}