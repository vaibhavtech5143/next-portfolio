import mongoose from "mongoose";

async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connect successfully!!!");

        
    } catch (error) {
        console.log(error);
    }
}
export default connectToDB