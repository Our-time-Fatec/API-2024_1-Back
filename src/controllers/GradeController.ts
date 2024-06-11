import { Request, Response } from 'express';
import { Grade } from "../models/grade";

class GradeController {

    public async PorcentagemGrade(req: Request, res:Response){
        try{
            const municipio = req.params.municipio;
            const columnName = `grade_atuacao_${municipio}`;

            const results = await Grade.aggregate([
                { $match: { name: columnName } },
                { $unwind: "$features" },
                { $group: { _id: null, total: { $sum: 1 }, finalized: { $sum: { $cond: [{ $eq: ["$features.properties.status", "finalizado"] }, 1, 0] } } } },
                { $project: { _id: 0, total: 1, finalized: 1, percentage: { $multiply: [{ $divide: ["$finalized", "$total"] }, 100] } } },
                { $project: { total: 1, finalized: 1, percentage: { $round: ["$percentage", 2] } } }
              ])

            res.status(200).json(results);
        } catch(error){
            console.error('Erro ao buscar:', error);
            res.status(500).json({ error: 'Erro interno do servidor'});
        }
    }

    public async GraficoGrade(req: Request, res:Response){
        try{
            const municipio = req.params.municipio;
            const columnName = `grade_atuacao_${municipio}`;

            const results = await Grade.aggregate([
                { $match: { name: columnName } },
                { $unwind: "$features" },
                { $group: {
                    _id: null,
                    total: { $sum: 1 },
                    finalized: { $sum: { $cond: [{ $eq: ["$features.properties.status", "finalizado"] }, 1, 0] } },
                    inProgress: { $sum: { $cond: [{ $eq: ["$features.properties.status", "andamento"] }, 1, 0] } },
                    empty: { $sum: { $cond: [{ $eq: ["$features.properties.status", null] }, 1, 0] } }
                }},
                { $project: { _id: 0, total: 1, finalized: 1, inProgress: 1, empty: 1 } },
              ])

            res.status(200).json(results);
        } catch(error){
            console.error('Erro ao buscar:', error);
            res.status(500).json({ error: 'Erro interno do servidor'});
        }
    }
    
}

export default new GradeController();