import jwt from "jsonwebtoken";
import {token} from "morgan";

export default async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET_KEY);
        req.logged = decoded.data;
        next();
    } catch (e) {
        return res.status(403).json({
            message: "forbidden",
            error: e,
        })
    }
}