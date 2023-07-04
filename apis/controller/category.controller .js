import categorySchemaModel from '../models/category.models.js'
import '../models/connection.js'
import url from 'url';

export var save=async(req,res,next)=>{
    var cDetails=req.body;
    var cList=await categorySchemaModel.find();
    var l=cList.length;
    var _id=l==0?1:cList[l-1]._id+1;
    cDetails={...cDetails,"_id":_id}
    var category=await categorySchemaModel.create(cDetails);
    if(category)
    return res.status(201).json({"response":"category added successfully"})
    else
    return res.status(500).json({"error":"server error"})
}

export var fetch=async(req,res,next)=>{
    var condition_object=url.parse(req.url,true).query;
    var cList=await categorySchemaModel.find(condition_object);
    var l=cList.length;
    if(l!=0)
    return res.status(201).json({cList});
    else
    return res.status(500).json({"error":"server error"});
}

export var deleteCategory=async(req,res,next)=>{
    var id=req.params.id;
    var category=await categorySchemaModel.find({_id:id});
    if(category.length !=0)
    {
        let result=await categorySchemaModel.deleteMany({_id:id})
            if(result)
            return res.status(201).json({"message":"success"})
            else
            return res.status(500).json({"error":"server error"}) 
    }
    else
    return res.status(404).json({"error":"resource not fouond"})
}

export var updateCategory=async(req,res,next)=>{
    let cDetails=await categorySchemaModel.findOne({_id:req.body._id});
    if(cDetails){
        let id=req.body._id;
        delete req.body._id;
        let category=await categorySchemaModel.updateOne({_id:id},{$set:req.body});
        if(category)
        return res.status(201).json({"message":"category updated successfully"})
        else
        return res.status(500).json({error:"server error"});
    }
    else
    return res.status(404).json({error:"request resource not available"})
}