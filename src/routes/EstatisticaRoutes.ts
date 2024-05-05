import { Router } from "express";
import controllerProj from "../controllers/ProjetoController";
import controllerGrade from "../controllers/GradeController";
import controllerAponta from "../controllers/ApontamentoController";
import controllerAoi from "../controllers/AoiController";
import controllerAlt from "../controllers/AlteracaoController";

const routes = Router();
routes.get("/project", controllerProj.findProject);
routes.get("/grade", controllerGrade.findGrade);
routes.get("/apontamento", controllerAponta.findApontamento);
routes.get("/aoi", controllerAoi.findAoi);
routes.get("/alteracoes", controllerAlt.findAlteracao);

export default routes;