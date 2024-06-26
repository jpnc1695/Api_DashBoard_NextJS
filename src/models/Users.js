import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        id:{type:mongoose.SchemaTypes.ObjectId, required: false},
        email:{type:String, require:true},
        senha:{type:String, required:true}
    }
)

const users = mongoose.model('users', userSchema)

export default users