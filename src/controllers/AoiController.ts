import { Request, Response } from 'express';
import { Aoi } from "../models/aoi";

class AoiController {

    public async findAoi(req: Request, res: Response) {
        try{
            const results = await Aoi.find({});
            res.status(200).json(results);
        } catch(error){
            console.error('Erro ao buscar Aois:', error);
            res.status(500).json({ error: 'Erro interno do servidor'});
        }
    }
    
}

export default new AoiController();