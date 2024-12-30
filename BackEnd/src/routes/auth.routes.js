import express from "express";
import { check, login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post('/signUp', signup);
router.post('/logIn', login);
router.post('/logOut', logout);
router.put('/update-profile', protectRoute, updateProfile);
router.get('/check', protectRoute, check);

export default router;

//677016f79cce186c409f2e3e
//677235157334c68f7a1a5e20