import mongoose from "mongoose";

const connectDB = async (URI) => {
    try {
        console.log("connecting DB...")
        await mongoose.connect(URI)
        console.log("connected")
    } catch (e) {
        console.log(e)
    } finally {
    }
    // const db = mongoose.connection;
    //
    // db.on("error", (err) => {
    //     console.log(err)
    // })
    // db.on("open", () => {
    //     console.log("DB connected")
    // })
}

export {connectDB}
