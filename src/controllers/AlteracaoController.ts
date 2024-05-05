import { Request, Response } from 'express';
import { Alteracoe } from "../models/alteracoes";

class AlteracaoController {

    public async findAlteracao(req: Request, res: Response) {
        try{
            const results = await Alteracoe.find({});
            res.status(200).json(results);
        } catch(error){
            console.error('Erro ao buscar Alterações:', error);
            res.status(500).json({ error: 'Erro interno do servidor'});
        }
    }
    
}

export default new AlteracaoController();