import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

connect();

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}...`));

app.use(routes);
