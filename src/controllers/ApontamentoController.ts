import { Request, Response } from 'express';
import { Apontamento } from "../models/apontamento";

class ApontamentoController {

    public async findCorrecaoExcluir(req: Request, res:Response){
        try{
            const municipio = req.params.municipio;
            const columnName = `apontamento_alteracao_${municipio}`;

            const results = await Apontamento.aggregate([
                { $match: { name: columnName } },
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

    public async findCorrecaoFazerAlerta(req: Request, res:Response){
        try{
            const municipio = req.params.municipio;
            const columnName = `apontamento_alteracao_${municipio}`;

            const results = await Apontamento.aggregate([
                { $match: { name: columnName } },
                { $unwind: "$features" },
                { $match: { "features.properties.correcao": "fazer alerta" } },
                { $count: "total" }
              ])
            res.status(200).json(results);
        } catch(error){
            console.error('Erro ao buscar:', error);
            res.status(500).json({ error: 'Erro interno do servidor'});
        }
    }

    public async findCorrecaoFazerAlteracao(req: Request, res:Response){
        try{
            const municipio = req.params.municipio;
            const columnName = `apontamento_alteracao_${municipio}`;

            const results = await Apontamento.aggregate([
                { $match: { name: columnName } },
                { $unwind: "$features" },
                { $match: { "features.properties.correcao": "fazer alteracao" } },
                { $count: "total" }
              ])
            res.status(200).json(results);
        } catch(error){
            console.error('Erro ao buscar:', error);
            res.status(500).json({ error: 'Erro interno do servidor'});
        }
    }

    public async findCorrecaoCorrigirAtributo(req: Request, res:Response){
        try{
            const municipio = req.params.municipio;
            const columnName = `apontamento_alteracao_${municipio}`;

            const results = await Apontamento.aggregate([
                { $match: { name: columnName } },
                { $unwind: "$features" },
                { $match: { "features.properties.correcao": "corrigir atributo" } },
                { $count: "total" }
              ])
            res.status(200).json(results);
        } catch(error){
            console.error('Erro ao buscar:', error);
            res.status(500).json({ error: 'Erro interno do servidor'});
        }
    }

    public async findCorrecaoCorrigirAtributoImagem(req: Request, res:Response){
        try{
            const municipio = req.params.municipio;
            const columnName = `apontamento_alteracao_${municipio}`;

            const results = await Apontamento.aggregate([
                { $match: { name: columnName } },
                { $unwind: "$features" },
                { $match: { "features.properties.correcao": "corrigir atributo de imagem" } },
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