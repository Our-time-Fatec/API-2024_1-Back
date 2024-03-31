import { Router } from "express";
import { list } from "../controllers/grade";

const router = Router();

router.post("/", list);

export default router;