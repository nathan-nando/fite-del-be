import mongoose from "mongoose";
import Inventory from "./Inventory.js";

const Loan = new mongoose.Schema({
    personName: {
        required: false,
        type: String
    },
    personID: {
        required: false,
        type: String
    },
    borrowedFrom: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String,
    },
    dateLoan: {
        required: true,
        type: Date
    },
    dateReturn: {
        required: true,
        type: Date
    },
    total: {
        required: true,
        type: Number
    },
    status: {
        required: true,
        type: String
    },

    inventory: {type: mongoose.Types.ObjectId, ref: "Inventory", required: true}
})

export default mongoose.model('Loan', Loan)