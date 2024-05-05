import { Request, Response } from 'express';
import { Project } from "../models/project";

class ProjectController {

    public async findProject(req: Request, res: Response) {
        try{
            const results = await Project.find({});
            res.status(200).json(results);
        } catch(error){
            console.error('Erro ao buscar Projetos:', error);
            res.status(500).json({ error: 'Erro interno do servidor'});
        }
    }
    
}

export default new ProjectController();