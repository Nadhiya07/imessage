import mongoose from 'mongoose';

async function connectDB() {
    try{
        const mongoURI = process.env.MONGO_URI;
        if(!mongoURI){
            throw new error("MONGO_URI is not defined in .env file");
        }
        const connection = await mongoose.connect(mongoURI);
        console.log("MongoDB connected", connection.connection.host);
    }
    catch(err){
        console.error("Error connecting to MongoDB", err);
        process.exit(1); // 1 means failed 0 means success
    }
}    

export default connectDB;