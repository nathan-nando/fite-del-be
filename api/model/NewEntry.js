
// const createNewEntry = (sequelize) => sequelize.define('new_entry', {
//     name:{type:DataTypes.STRING, unique:false, allowNull: true},
//     total:{type:DataTypes.INTEGER, unique:false, allowNull: true},
//     entryDate:{type:DataTypes.DATE, unique:false, allowNull: true},
// })

// export default createNewEntry

import mongoose from "mongoose";

const NewEntry = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    total: {
        required: true,
        type: Number
    },
    entryDate:{
        required: true,
        type: Date,
    },
})

export default mongoose.model('NewEntry', NewEntry)