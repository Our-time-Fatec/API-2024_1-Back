import { Router } from "express";
import controllerProj from "../controllers/ProjetoController";
import controllerGrade from "../controllers/GradeController";
import controllerAponta from "../controllers/ApontamentoController";
import controllerAoi from "../controllers/AoiController";
import controllerAlt from "../controllers/AlteracaoController";

const routes = Router();
// Routes para Alteração
routes.get("/soloexpostoatibaia", controllerAlt.findSoloExpostoAtibaia);
routes.get("/soloexpostocruzeiro", controllerAlt.findSoloExpostoCruzeiro);
routes.get("/soloexpostotaubate", controllerAlt.findSoloExpostoTaubate);
routes.get("/novaedificacaoatibaia", controllerAlt.findNovaEdificacaoAtibaia);
routes.get("/novaedificacaocruzeiro", controllerAlt.findNovaEdificacaoCruzeiro);
routes.get("/novaedificacaotaubate", controllerAlt.findNovaEdificacaoTaubate);
routes.get("/supressaoatibaia", controllerAlt.findSupressaoAtibaia);
routes.get("/supressaocruzeiro", controllerAlt.findSupressaoCruzeiro);
routes.get("/supressaotaubate", controllerAlt.findSupressaoTaubate);
// Routes para Apontamentos
routes.get("/excluiratibaia", controllerAponta.findExcluirAtibaia);
export default routes;