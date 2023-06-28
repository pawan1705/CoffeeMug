import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const userSchema = mongoose.Schema({
    _id:Number,
    name:{
        type:String,
        required:[true,"name is required"],
        trim:true,
        lowercase:true,
    },
    username:{
        type:String,
        required:[true,"username is required"],
        unique:true,
        trim:true,
        lowercase:true,
    },
    email:{
        type:String,
        required:[true,"email is required"],
        trim:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:[true,"email is required"],
        trim:true,
        lowercase:true,
    },
    phone:{
        type:String,
        required:[true,"phone is required"],
        trim:true,
        lowercase:true,
    },
    address:{
        type:String,
        required:[true,"address is required"],
        trim:true,
        lowercase:true,
    },
    city:{
        type:String,
        required:[true,"city is required"],
        trim:true,
        lowercase:true,
    },
    gender:{
        type:String,
        required:[true,"gender is required"],
        trim:true,
        lowercase:true,
    },
    role:{
        type:String
    },
    createdAt:{type:Date},
    updatedAt:{type:Date},
    deletedAt:{type:Date},
    status:{type:Number},

})
// apply uniquevalidator
userSchema.plugin(uniqueValidator);

// compile schema to model
const userSchemaModel=mongoose.model("userData",userSchema);
export default userSchemaModel;