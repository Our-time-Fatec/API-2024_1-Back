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
    
    public async findSoloExpostoAtibaia(req: Request, res:Response){
        try{
            const results = await Alteracoe.aggregate([
                { $match: { name: "alteracao_atibaia" } },
                { $unwind: "$features" },
                { $match: { "features.properties.class": "Solo Exposto" } },
                { $count: "total_solo_exposto" }
              ])
            res.status(200).json(results);
        } catch(error){
            console.error('Erro ao buscar:', error);
            res.status(500).json({ error: 'Erro interno do servidor'});
        }
    }
    public async findNovaEdificacaoAtibaia(req: Request, res:Response){
        try{
            const results = await Alteracoe.aggregate([
                { $match: { name: "alteracao_atibaia" } },
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
    public async findSupressaoAtibaia(req: Request, res:Response){
        try{
            const results = await Alteracoe.aggregate([
                { $match: { name: "alteracao_atibaia" } },
                { $unwind: "$features" },
                { $match: { "features.properties.class": "Supressão de Vergetação" } },
                { $count: "total_supressao" }
              ])
            res.status(200).json(results);
        } catch(error){
            console.error('Erro ao buscar:', error);
            res.status(500).json({ error: 'Erro interno do servidor'});
        }
    }
    public async findSoloExpostoCruzeiro(req: Request, res:Response){
        try{
            const results = await Alteracoe.aggregate([
                { $match: { name: "alteracao_cruzeiro" } },
                { $unwind: "$features" },
                { $match: { "features.properties.class": "Solo Exposto" } },
                { $count: "total_solo_exposto" }
              ])
            res.status(200).json(results);
        } catch(error){
            console.error('Erro ao buscar:', error);
            res.status(500).json({ error: 'Erro interno do servidor'});
        }
    }
    public async findNovaEdificacaoCruzeiro(req: Request, res:Response){
        try{
            const results = await Alteracoe.aggregate([
                { $match: { name: "alteracao_cruzeiro" } },
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
    public async findSupressaoCruzeiro(req: Request, res:Response){
        try{
            const results = await Alteracoe.aggregate([
                { $match: { name: "alteracao_cruzeiro" } },
                { $unwind: "$features" },
                { $match: { "features.properties.class": "Supressão de Vergetação" } },
                { $count: "total_supressao" }
              ])
            res.status(200).json(results);
        } catch(error){
            console.error('Erro ao buscar:', error);
            res.status(500).json({ error: 'Erro interno do servidor'});
        }
    }
    public async findSoloExpostoTaubate(req: Request, res:Response){
        try{
            const results = await Alteracoe.aggregate([
                { $match: { name: "alteracao_taubate" } },
                { $unwind: "$features" },
                { $match: { "features.properties.class": "Solo Exposto" } },
                { $count: "total_solo_exposto" }
              ])
            res.status(200).json(results);
        } catch(error){
            console.error('Erro ao buscar:', error);
            res.status(500).json({ error: 'Erro interno do servidor'});
        }
    }
    public async findNovaEdificacaoTaubate(req: Request, res:Response){
        try{
            const results = await Alteracoe.aggregate([
                { $match: { name: "alteracao_taubate" } },
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
    public async findSupressaoTaubate(req: Request, res:Response){
        try{
            const results = await Alteracoe.aggregate([
                { $match: { name: "alteracao_taubate" } },
                { $unwind: "$features" },
                { $match: { "features.properties.class": "Supressão de Vergetação" } },
                { $count: "total_supressao" }
              ])
            res.status(200).json(results);
        } catch(error){
            console.error('Erro ao buscar:', error);
            res.status(500).json({ error: 'Erro interno do servidor'});
        }
    }
}

export default new AlteracaoController();