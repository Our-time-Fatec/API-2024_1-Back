import { Request, Response } from 'express';
import { Apontamento } from "../models/apontamento";

class ApontamentoController {

    public async findApontamento(req: Request, res: Response) {
        try{
            const results = await Apontamento.find({});
            res.status(200).json(results);
        } catch(error){
            console.error('Erro ao buscar Apontamentos:', error);
            res.status(500).json({ error: 'Erro interno do servidor'});
        }
    }
    public async findExcluirAtibaia(req: Request, res:Response){
        try{
            const results = await Apontamento.aggregate([
                { $match: { name: "apontamento_alteracao_atibaia" } },
                { $unwind: "$features" },
                { $match: { "features.properties.correcao": "excluir" } },
                { $count: "total" }
              ])
            res.status(200).json(results);
        } catch(error){
            console.error('Erro ao buscar:', error);
            res.status(500).json({ error: 'Erro interno do servidor'});
        }
    }
}

export default new ApontamentoController();