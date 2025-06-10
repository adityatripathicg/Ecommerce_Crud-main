import mongoose from "mongoose";
// import dotenv from 'dotenv';
// dotenv.config();

//const dbUrl = ;
const DbCon=async()=>{
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log('Mongodb is connected')
        
    } catch (error) {
        console.log("Error in mongodb connection",error.message)
    }
}
export default DbCon