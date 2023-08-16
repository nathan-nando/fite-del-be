import db from "../model/index.js";
//
// const Inventory = db.invertories;
//
// export const getAll = async (req, res) => {
//     try {
//         const result = await Inventory.findAll();
//         res.status(200).json(
//             {data: result,}
//         );
//     } catch (e) {
//         res.json({
//             "error": e.toLocaleString(),
//         })
//     }
// }
//
// export const createOne = async (req, res) => {
//     try {
//         const inventory = {
//             names: req.body.names,
//             date_request: req.body.date_request,
//         }
//         const i = await Inventory.create(inventory);
//         res.status(200).json({
//             message: "ok",
//             data: i
//         })
//     } catch (e) {
//         res.status(e.status).json({
//             "error": e.toLocaleString(),
//         })
//     }
// }