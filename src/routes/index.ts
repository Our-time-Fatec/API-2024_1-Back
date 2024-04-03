import { Router } from "express";
import UserController from "../controllers/User/UserController";
import MongoRepository from "../repositories/MongoRepository";
import UserRepository from "../repositories/UserRepository";
import { Request, Response} from "express";
import CruzeiroRepository from "../repositories/CruzeiroRepository";
import { mongo } from "mongoose";


const router = Router();

router.get("/users", async (req,res) => {
    const mongoUserRepository = new UserRepository();
    mongoUserRepository.createUser();
    res.send();
})

router.delete("/users/:id", async (req,res) => {
    const mongoUserRepository = new UserRepository();
    mongoUserRepository.deleteUser(req,res)
    res.send();
})

router.get("/cruzeiro", async (req,res) =>{
    const mongoCruzeiroRepository = new CruzeiroRepository();
    mongoCruzeiroRepository.findAll()
    res.send();
})



export default router;