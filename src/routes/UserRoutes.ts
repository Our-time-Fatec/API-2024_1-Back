import { Router } from "express";
import UserRepository from "../repositories/UserRepository";

const routes = Router();
// Registra um usuário no sistema
routes.post("/register", async (req,res) => {
    const mongoUserRepository = new UserRepository();
    mongoUserRepository.createUser(req,res);
})
//Loga o usuário no sistema
routes.post("/login", async (req,res) =>{
    const mongoUserRepository = new UserRepository();
    mongoUserRepository.LoginUser(req,res);
})
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

export default routes;