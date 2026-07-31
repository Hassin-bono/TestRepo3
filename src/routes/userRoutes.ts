import { Router } from "express";
import { handleGetUser, handleSearch, handleLogin } from "../controllers/userController";

const router = Router();

router.get("/users/:id", handleGetUser);
router.get("/search", handleSearch);
router.post("/login", handleLogin);

export default router;
