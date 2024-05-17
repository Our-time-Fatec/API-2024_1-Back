import { Request, Response } from 'express';
import { Alteracoe } from "../models/alteracoes";

class AlteracaoController {

    public async findSoloExposto(req: Request, res:Response){
        try{
            const municipio = req.params.municipio;
            const columnName = `alteracao_${municipio}`;

            const results = await Alteracoe.aggregate([
                { $match: { name: columnName } },
                { $unwind: "$features" },
                { $match: { "features.properties.class": "Solo Exposto" } },
                { $count: "total" }
              ])
            res.status(200).json(results);
        } catch(error){
            console.error('Erro ao buscar:', error);
            res.status(500).json({ error: 'Erro interno do servidor'});
        }
    }
    public async findNovaEdificacao(req: Request, res:Response){
        try{
            const municipio = req.params.municipio;
            const columnName = `alteracao_${municipio}`;

            const results = await Alteracoe.aggregate([
                { $match: { name: columnName } },
                { $unwind: "$features" },
                { $match: { "features.properties.class": "Nova Edificação" } },
                { $count: "total" }
              ])
            res.status(200).json(results);
        } catch(error){
            console.error('Erro ao buscar:', error);
            res.status(500).json({ error: 'Erro interno do servidor'});
        }
    }
    public async findSupressao(req: Request, res:Response){
        try{
            const municipio = req.params.municipio;
            const columnName = `alteracao_${municipio}`;
            
            const results = await Alteracoe.aggregate([
                { $match: { name: columnName } },
                { $unwind: "$features" },
                { $match: { "features.properties.class": "Supressão de Vergetação" } },
                { $count: "total" }
              ])
            res.status(200).json(results);
        } catch(error){
            console.error('Erro ao buscar:', error);
            res.status(500).json({ error: 'Erro interno do servidor'});
        }
    }
}

export default new AlteracaoController();