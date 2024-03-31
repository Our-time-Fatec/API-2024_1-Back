import { Request,Response } from "express";
import pool from "./db";

export async function list(req:Request, res:Response){
    const {tablename} = req.body;
    const response = await pool.query(`select id,cd_mun,nm_mun,sigla_uf,area_km2 from ${tablename}`);
    res.json(response.rows);
}
