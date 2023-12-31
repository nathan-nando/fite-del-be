import {Router} from "express";
import {createOne, deleteOne, getAll, getByID, updateOne} from "../controller/inventory.js";
import jwtMiddleware from "../middlewares/jwtMiddleware.js";


const router = Router();

router.get("/", getAll);
router.get("/:id", getByID);
router.post("/", jwtMiddleware, createOne);
router.patch("/:id",jwtMiddleware,  updateOne)
router.delete("/:id",jwtMiddleware, deleteOne)
export default router;