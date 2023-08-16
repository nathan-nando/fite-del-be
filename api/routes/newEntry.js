import {Router} from "express";
import {createOne, deleteOne, getAll, getByID, updateOne} from "../controller/newEntry.js";

const router = Router()

router.get("/", getAll);
router.get("/:id", getByID);
router.post("/", createOne);
router.patch("/:id", updateOne)
router.delete("/:id", deleteOne)
export default router;