import { Router } from "express";
import UserRepository from "../repositories/UserRepository";
import { Request, Response} from "express";
import cruzeiroRoutes from "./CruzeiroRoutes"
import userRoutes from "./UserRoutes"


const router = Router();

router.use("/user", userRoutes);
router.use("/cruzeiro", cruzeiroRoutes);



export default router;