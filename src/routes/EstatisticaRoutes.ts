import { Router } from "express";
import controllerProj from "../controllers/ProjetoController";
import controllerGrade from "../controllers/GradeController";
import controllerAponta from "../controllers/ApontamentoController";
import controllerAoi from "../controllers/AoiController";
import controllerAlt from "../controllers/AlteracaoController";

const routes = Router();
// Routes para Alteração
routes.get("/soloexposto/:municipio", controllerAlt.findSoloExposto);
routes.get("/edificacao/:municipio", controllerAlt.findNovaEdificacao);
routes.get("/supressao/:municipio", controllerAlt.findSupressao);
// Routes para Apontamentos
routes.get("/correcaoexcluir/:municipio", controllerAponta.findCorrecaoExcluir);
routes.get("/correcaoalerta/:municipio", controllerAponta.findCorrecaoFazerAlerta);
routes.get("/correcaoalteracao/:municipio", controllerAponta.findCorrecaoFazerAlteracao);
routes.get("/correcaoatributo/:municipio", controllerAponta.findCorrecaoCorrigirAtributo);
routes.get("/correcaoimagem/:municipio", controllerAponta.findCorrecaoCorrigirAtributoImagem);


export default routes;