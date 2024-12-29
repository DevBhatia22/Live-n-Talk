import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post('/signUp', signup);
router.post('/logIn', login);
router.post('/logOut', logout);
router.put('/update-profile', logout);

export default router;