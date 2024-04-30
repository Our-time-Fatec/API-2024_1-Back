import {Request, Response} from 'express';
import MongoConnection from "../models/MongoConnection";

export default class CruzeiroRepository extends MongoConnection{
   
    public async findAllAlteracao(){
        const db = await this.connect('api');
        const cruzeiro = db.collection('alteracao_cruzeiro');
        const results = await cruzeiro.find({}).toArray();
        await this.disconnect;

        return results;
    }

    public async findAllAoi(){
        const db = await this.connect('api');
        const cruzeiro = db.collection('aoi_cruzeiro');
        const results = await cruzeiro.find({}).toArray();
        await this.disconnect;

        return results;
    }
    
    public async findAllApontamento(){
        const db = await this.connect('api');
        const cruzeiro = db.collection('apontamento_alteracao_cruzeiro');
        const results = await cruzeiro.find({}).toArray();
        await this.disconnect;

        return results;
    }

    public async findAllGrade(){
        const db = await this.connect('api');
        const cruzeiro = db.collection('grade_atuacao_cruzeiro');
        const results = await cruzeiro.find({}).toArray();
        await this.disconnect;

        return results;
    }
}