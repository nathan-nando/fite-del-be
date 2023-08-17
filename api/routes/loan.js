import {Router} from "express";
import {createOne, deleteOne, getAll, getByID, updateOne} from "../controller/loan.js";
import jwtMiddleware from "../middlewares/jwtMiddleware.js";

const router = Router();

router.get("/", getAll);
router.get("/:id", getByID);
router.post("/", createOne);
router.patch("/:id", jwtMiddleware,updateOne)
router.delete("/:id", jwtMiddleware, deleteOne)
export default router;