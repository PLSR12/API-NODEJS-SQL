import express from "express";
import AlunosController from "../controllers/Alunos/index.js";

const router = express.Router();

router.get("/alunos", AlunosController.selectAllAlunos);

export default router;
