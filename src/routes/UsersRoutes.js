import express from "express";
import userController from "../controllers/usersController.js";

const router = express.Router();

router.get("/user", userController.listarUser);
router.get("/user/:id", userController.listarUsersPorId);

router.post('/user', userController.criarUsers);
router.put("/user/:id", userController.atualizarUser);

router.delete("/user/:id", userController.excluirUser);

export default router
