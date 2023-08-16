import mongoose from "mongoose";

const Inventory = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    total: {
        required: true,
        type: Number
    },
    dateIn: {
        required: true,
        type: Date
    },
    frequency: {
        required: true,
        type: Number
    },
    number: {
        required: true,
        type: Number,
    }
})

export default mongoose.model('Inventory', Inventory)