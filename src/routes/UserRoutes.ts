import { Router } from "express";
import UserRepository from "../controllers/UserController";
import controller from "../controllers/UserController";

const routes = Router();
// Registra um usuário no sistema
routes.post("/register", controller.createUser);
//Loga o usuário no sistema
routes.post("/login", controller.login);
/*

//Deleta o usuário pelo id
routes.delete("/delete/:id", async (req,res) => {
    const mongoUserRepository = new UserRepository();
    mongoUserRepository.deleteUser(req,res)
})
//Encontra o usuário pelo nome dele
routes.get("/find/:username", async (req,res) =>{
    const mongoUserRepository = new UserRepository();
    mongoUserRepository.findUserbyName(req,res);
})
//Puxa todos os usuários do banco
routes.get("/all", async (req,res) =>{
    const mongoUserRepository = new UserRepository();
    const results = await mongoUserRepository.findAllUser();
    res.send(results);
})
*/
export default routes;