import { Router } from "express";
import { list } from "../controllers/aoi";

const router = Router();

router.post("/", list);

export default router;