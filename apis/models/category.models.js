import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const categorySchema = mongoose.Schema({
    _id:Number,
    catnm:{
        type:String,
        required:[true,"catnm is required"],
        trim:true,
        unique:true,
        lowercase:true,
    },
    caticonnm:{
        type:String,
        required:[true,"caticonnm is required"],
        unique:true,
        trim:true,
        lowercase:true,
    },
    role:{
        type:String
    },
    info:{type:Date},
    status:{type:Number},

})
// apply uniquevalidator
categorySchema.plugin(uniqueValidator);

// compile schema to model
const categorySchemaModel=mongoose.model("categoryData",categorySchema);
export default categorySchemaModel;