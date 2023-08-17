import mongoose from "mongoose";

const User = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    username: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    lab: {
        required: false,
        type: [String]
    },
    isAdmin: {
        required: true,
        type : Boolean,
    }
})

export default mongoose.model('User', User)