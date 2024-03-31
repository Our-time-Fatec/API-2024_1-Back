import { Router } from "express";
import { list } from "../controllers/apontamento";

const router = Router();

router.post("/", list);

export default router;