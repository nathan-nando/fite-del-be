import db from "../model/index.js";

const Services = db.inventory

export const createOne = async (req, res) => {
    // const date =  req.body.dateIn
    // date.map((v)=>{
    //     v = Date.parse(v)
    // })
    const payload = new Services({
        name: req.body.name,
        total: Number(req.body.total),
        dateIn: Date.parse(req.body.dateIn),
        frequency: Number(req.body.frequency),
        code: req.body.code,
        lab: req.body.lab,
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
        const result = await Services.find();
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
        name: req.body.name,
        total: Number(req.body.total),
        dateIn: Date.parse(req.body.dateIn),
        frequency: Number(req.body.frequency),
        code: req.body.code,
        lab: req.body.lab,
    };

    try {
        const result = await Services.findByIdAndUpdate(id, updatedData);
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