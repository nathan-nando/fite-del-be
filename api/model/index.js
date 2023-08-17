import dotenv from "dotenv";
import User from "./User.js";
import Inventory from "./Inventory.js";
import Loan from "./Loan.js";

dotenv.config();


const db = {};

db.user = User
db.inventory = Inventory
db.loan = Loan

export default db;