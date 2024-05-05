import { Router } from "express";
import UserRepository from "../controllers/UserController";
import { Request, Response} from "express";
import userRoutes from "./UserRoutes"
import estatisticaRoutes from "./EstatisticaRoutes"


const router = Router();

router.use("/user", userRoutes);
router.use("/estatistica", estatisticaRoutes);




export default router;