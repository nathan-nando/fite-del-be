import {Router} from "express";
import {login, refreshToken, register} from "../controller/auth.js";
import jwtRefreshMiddleware from "../middlewares/jwtRefreshMiddleware.js";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.post("/refresh", jwtRefreshMiddleware, refreshToken)
export default router;