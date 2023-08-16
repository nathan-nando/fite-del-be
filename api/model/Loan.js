import mongoose from "mongoose";

const Loan = new mongoose.Schema({
    personName: {
        required: true,
        type: String
    },
    personID: {
        required: true,
        type: String
    },
    borrowedFrom: {
        required: true,
        type: String
    },
    dateLoan: {
        required: true,
        type: Date
    },
    dateReturn: {
        required: true,
        type: Date
    },
    status: {
        required: true,
        type: String
    },
})

export default mongoose.model('Loan', Loan)