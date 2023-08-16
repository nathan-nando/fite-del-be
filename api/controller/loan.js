// import db from "../model/index.js";
//
// const Loan = db.loan
//
// export const getAll = async (req, res) => {
//     try {
//         const result = await Loan.findAll();
//         res.status(200).json({
//             data: result
//         })
//     } catch (e) {
//         res.json({
//             "error": e.toLocaleString(),
//         })
//     }
// }