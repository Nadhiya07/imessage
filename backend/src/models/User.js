import mongoose from 'mongoose';

const Schema =  mongoose.Schema;
const userSchema = new Schema({
    clerkId:{type:String, required:true, unique:true},
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    date:{type:Date, default:Date.now}
},{timestamps:true});
// const User = mongoose.model('User',userSchema);
// export default User;

export default mongoose.model('User',userSchema);