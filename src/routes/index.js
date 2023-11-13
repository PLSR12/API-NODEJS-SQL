import express from "express";
import AlunosController from "../controllers/Alunos/index.js";

const router = express.Router();

router.get("/alunos", AlunosController.getAll);
router.post("/alunos", AlunosController.create);
router.get("/alunos/:id", AlunosController.getOneById);
router.put("/alunos/:id", AlunosController.update);
router.delete("/alunos/:id", AlunosController.delete);

export default router;
