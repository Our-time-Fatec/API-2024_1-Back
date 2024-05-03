import { Request, Response } from 'express';
import { Projeto } from "../models/project";

class ProjetoController {

    public async createProject(req: Request, res: Response) {
        try {
            const { nomeProjeto, aoiProjeto, user } = req.body;

            if (!nomeProjeto || !aoiProjeto || !user) {
                return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
            }

            const aoiData = await Projeto.loadAoiData(aoiProjeto)

            const project = new Projeto({ nomeProjeto, aoiProjeto, user})
            const response = await project.save();
            res.status(201).json({ message: 'Projeto criado com sucesso.' });
        } catch (error) {
            console.error('Erro ao criar projeto', error);
            res.status(500).json({ error: 'Erro interno do servidor.' });
        }
    }
    
}

export default new ProjetoController();