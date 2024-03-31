import { Router } from "express";
import { list } from "../controllers/alteracao";

const router = Router();

router.post("/", list);

export default router;