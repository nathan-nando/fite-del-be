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
}

export {connectDB}
