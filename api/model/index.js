import dotenv from "dotenv";
import User from "./User.js";
import Inventory from "./Inventory.js";
import Loan from "./Loan.js";
import NewEntry from "./NewEntry.js";

dotenv.config();


const db = {};

db.user = User
db.inventory = Inventory
db.loan = Loan
db.newEntry = NewEntry

export default db;