import { Router } from "express";
import UserRepository from "../repositories/UserRepository";

const routes = Router();

routes.post("/register", async (req,res) => {
    const mongoUserRepository = new UserRepository();
    mongoUserRepository.createUser(req,res);

})
routes.post("/login", async (req,res) =>{
    const mongoUserRepository = new UserRepository();
    mongoUserRepository.LoginUser(req,res);

})

routes.delete("/delete/:id", async (req,res) => {
    const mongoUserRepository = new UserRepository();
    mongoUserRepository.deleteUser(req,res)
})

routes.get("/find/:username", async (req,res) =>{
    const mongoUserRepository = new UserRepository();
    mongoUserRepository.findUserbyName(req,res);
})

routes.get("/all", async (req,res) =>{
    const mongoUserRepository = new UserRepository();
    const results = await mongoUserRepository.findAllUser();
    res.send(results);
})

export default routes;