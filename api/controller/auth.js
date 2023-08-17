import db from "../model/index.js";
import {comparePassword, createJwtToken, decryptPassword} from "../../utils/auth.js";
import User from "../model/User.js";
import mongoose from "mongoose";

const Services = db.user

export const login = async (req, res) => {
    try {
        let user = await User.findOne({username: req.body.username});
        let compare = await comparePassword(req.body.password, user.password);

        if (compare) {
            return res.status(200).json({
                data: user,
                token: createJwtToken({
                    _id: user._id,
                    username: user.username
                }, process.env.EXPIRED_JWT, process.env.JWT_SECRET_KEY),
                refresh_token: createJwtToken({
                    _id: user._id,
                    username: user.username
                }, process.env.EXPIRED_REFRESH_JWT, process.env.JWT_REFRESH_SECRET_KEY)
            })
        } else {
            return res.status(403).json({
                error: {message: "password not match"}
            })
        }
    } catch (e) {
        return res.status(404).json({
            error: {message: "user not found"}
        })
    }
}
export const register = async (req, res) => {
    let password = ""
    let body = req.body;

    try {
        password = await decryptPassword(body.password)
    } catch (e) {
        return res.status(500).json({
            error: {
                message: e.message,
            }
        })
    }

    try {
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            ...body,
            isAdmin: false,
            password: password
        });

        const save = await user.save()
        return res.status(201).json({
            data: save,
            token: createJwtToken({
                _id: save._id, username: save.username
            }, process.env.EXPIRED_JWT, process.env.JWT_SECRET_KEY),
            refresh_token: createJwtToken({
                _id: save._id, username: save.username
            }, process.env.EXPIRED_REFRESH_JWT, process.env.JWT_REFRESH_SECRET_KEY)
        })
    } catch (e) {
        return res.status(400).json({error: {message: e.message}})
    }
}

export const refreshToken = async (req, res) => {
    const logged = req.logged;
    try {
        return res.status(200).json({
            token: createJwtToken({
                _id: logged._id,
                username: logged.username
            }, process.env.EXPIRED_JWT, process.env.JWT_SECRET_KEY),
            refresh_token: createJwtToken({
                _id: logged._id,
                username: logged.username
            }, process.env.EXPIRED_REFRESH_JWT, process.env.JWT_REFRESH_SECRET_KEY)
        })

    } catch (e) {
        return res.status(500).json({
            error: {message: "failed"}
        })
    }
}