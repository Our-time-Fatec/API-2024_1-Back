import { Router } from "express";
import UserRepository from "../controllers/UserController";
import controller from "../controllers/UserController";
import { validadeAcess, checkAdm } from "../middlewares/Auth";

const routes = Router();
// Registra um usuário no sistema
routes.post("/register", controller.createUser);
//Loga o usuário no sistema
routes.post("/login", controller.login);
//Deleta o usuário pelo id
routes.delete("/delete/:id", validadeAcess, checkAdm, controller.deleteUser);
//Encontra o usuário pelo nome dele
routes.get("/find/:name", validadeAcess, controller.findUserbyName);
//Puxa todos os usuários do banco
routes.get("/all", validadeAcess, controller.findAllUser);
//Registro frontend
routes.post("/admin/register", validadeAcess, checkAdm, controller.createUser);

export default routes;