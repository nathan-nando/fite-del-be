import db from "../model/index.js";
import Inventory from "../model/Inventory.js";

const Services = db.loan

export const createOne = async (req, res) => {
    const payload = new Services({
        personName: req.body.personName,
        personID: req.body.personID,
        borrowedFrom: req.body.borrowedFrom,
        description: req.body.description,
        total: Number(req.body.total),
        dateLoan: Date.parse(req.body.dateLoan),
        dateReturn: Date.parse(req.body.dateReturn),
        status: req.body.status,
        inventory: req.body.inventory
    });
    try {
        const result = await payload.save();
        res.status(200).json({data: result})
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}
export const getAll = async (req, res) => {
    try {
        const result = await Services.find().populate('inventory').exec();
        // const result = await Services.find();
        res.status(200).json({data: result})
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}

export const getByID = async (req, res) => {
    try {
        const result = await Services.findById(req.params.id)
        res.status(200).json({data: result})
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}

export const updateOne = async (req, res) => {
    const id = req.params.id;
    const updatedData = {
        personName: req.body.personName,
        personID: req.body.personID,
        borrowedFrom: req.body.borrowedFrom,
        description: req.body.description,
        total: Number(req.body.total),
        dateLoan: Date.parse(req.body.dateLoan),
        dateReturn: Date.parse(req.body.dateReturn),
        status: req.body.status,
        inventory: req.body.inventory
    };

    try {
        const result = await Services.findByIdAndUpdate(id, updatedData);
        if (req.body.status === "disetujui") {
            const inventory = await Inventory.findById(result.inventory)
            const updatedInventory = await Inventory.findByIdAndUpdate(result.inventory, {
                total: inventory.total - result.total,
                frequency: inventory.frequency + 1
            })
        }
        res.status(200).json({data: updatedData});

    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

export const deleteOne = async (req, res) => {
    const id = req.params.id;

    try {
        const result = await Services.findByIdAndDelete(id)
        res.status(200).json({data: result})
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}