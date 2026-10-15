import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const messageSchema = new Schema({
    senderId:{type:mongoose.Schema.Types.ObjectId, ref:'User', required:true},
    receiverId:{type:mongoose.Schema.Types.ObjectId, ref:'User', required:true},
    text:{type:String, required:true},
    image:{type:String},
    video:{type:String},
    date:{type:Date, default:Date.now}
},{timestamps:true});

export default mongoose.model('Message',messageSchema);