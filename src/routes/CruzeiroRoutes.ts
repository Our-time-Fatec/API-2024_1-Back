import { Router } from "express";

import CruzeiroRepository from "../repositories/CruzeiroQuadroRepository";

const routes = Router();

routes.get("/alteracao", async (req,res) =>{
    const mongoCruzeiroRepository = new CruzeiroRepository();
    const results = await mongoCruzeiroRepository.findAllAlteracao();
    res.send(results);

})

routes.get("/aoi", async (req,res) =>{
    const mongoCruzeiroRepository = new CruzeiroRepository();
    const results = await mongoCruzeiroRepository.findAllAoi();
    res.send(results);
})

routes.get("/apontamento", async (req,res) =>{
    const mongoCruzeiroRepository = new CruzeiroRepository();
    const results = await mongoCruzeiroRepository.findAllApontamento();
    res.send(results);
})

routes.get("/grade", async (req,res) =>{
    const mongoCruzeiroRepository = new CruzeiroRepository();
    const results = await mongoCruzeiroRepository.findAllGrade();
    res.send(results);
})

export default routes;