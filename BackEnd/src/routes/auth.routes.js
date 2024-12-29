import express from "express";
import { check, login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import { protectRouter } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post('/signUp', signup);
router.post('/logIn', login);
router.post('/logOut', logout);
router.put('/update-profile', protectRouter, updateProfile);
router.get('check', protectRouter, check);

export default router;