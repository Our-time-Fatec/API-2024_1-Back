import { Router } from "express";
import UserRepository from "../repositories/UserRepository";

const routes = Router();

routes.post("/register", async (req,res) => {
    const mongoUserRepository = new UserRepository();
    mongoUserRepository.createUser(req,res);
    res.send();
})

routes.delete("/:id", async (req,res) => {
    const mongoUserRepository = new UserRepository();
    mongoUserRepository.deleteUser(req,res)
    res.send();
})

export default routes;