import { Request, Response } from 'express';
import { Grade } from "../models/grade";

class GradeController {

    public async findGrade(req: Request, res: Response) {
        try{
            const results = await Grade.find({});
            res.status(200).json(results);
        } catch(error){
            console.error('Erro ao buscar Grades:', error);
            res.status(500).json({ error: 'Erro interno do servidor'});
        }
    }
    
}

export default new GradeController();