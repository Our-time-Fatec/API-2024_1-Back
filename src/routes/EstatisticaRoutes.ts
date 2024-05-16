import { Router } from "express";
import controllerProj from "../controllers/ProjetoController";
import controllerGrade from "../controllers/GradeController";
import controllerAponta from "../controllers/ApontamentoController";
import controllerAoi from "../controllers/AoiController";
import controllerAlt from "../controllers/AlteracaoController";

const routes = Router();
routes.get("/soloexpostoatibaia", controllerAlt.findSoloExpostoAtibaia);
routes.get("/soloexpostocruzeiro", controllerAlt.findSoloExpostoCruzeiro);
routes.get("/soloexpostotaubate", controllerAlt.findSoloExpostoTaubate);
routes.get("/novaedificacaoatibaia", controllerAlt.findNovaEdificacaoAtibaia);
routes.get("/novaedificacaocruzeiro", controllerAlt.findNovaEdificacaoCruzeiro);
routes.get("/novaedificacaotaubate", controllerAlt.findNovaEdificacaoTaubate);

export default routes;