import express from "express";
import database from "./database/connection.js";
import router from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => console.log("Server rodando na porta 3000"));

const client = await database();
if (client) {
	console.log("Criou pool de conexões no PostgreSQL!");
}

export default app;
