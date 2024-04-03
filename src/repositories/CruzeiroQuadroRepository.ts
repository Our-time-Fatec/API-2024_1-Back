import { ObjectId } from "mongodb";
import {Request, Response} from 'express';
import MongoRespository from "./MongoRepository";

export default class CruzeiroRepository extends MongoRespository{
    public async findAll(){
        const db = await this.connect('api');
        const cruzeiro = db.collection('alteracao_cruzeiro');
        const results = await cruzeiro.find({}).toArray();
        await this.disconnect;

        return results;
    }
}