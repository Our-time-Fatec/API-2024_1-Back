import { Router } from "express";
import UserRepository from "../controllers/UserController";
import controller from "../controllers/UserController";

const routes = Router();
// Registra um usuário no sistema
routes.post("/register", controller.createUser);
//Loga o usuário no sistema
routes.post("/login", controller.login);
//Deleta o usuário pelo id
routes.delete("/delete/:id", controller.deleteUser);
//Encontra o usuário pelo nome dele
routes.get("/find/:name", controller.findUserbyName);
//Puxa todos os usuários do banco
routes.get("/all", controller.findAllUser);

export default routes;