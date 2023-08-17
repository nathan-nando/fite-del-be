import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const decryptPassword = async (password) => {
    return await bcrypt.hash(
        password, Number(process.env.SALT_ROUND) || 10
    );
}

export const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
}

export const createJwtToken = (data, expired, secret) => {
    return jwt.sign({data: data}, secret, {
        expiresIn: expired,
    })
}

