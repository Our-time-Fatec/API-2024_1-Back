import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes";
dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}...`));

app.use(routes);
