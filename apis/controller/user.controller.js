import '../models/connection.js'
import url from 'url';
import UserSchemaModel from '../models/user.models.js';
import rs from 'randomstring';
import jwt from 'jsonwebtoken';
import userSchemaModel from '../models/user.models.js';

export var save=async(req,res,next)=>{
    var userDetail=req.body;
    var userList=await UserSchemaModel.find();
    var l=userList.length;
    var _id=l==0?1:userList[l-1]. _id+1;
    userDetail={...userDetail,"_id":_id,"status":0,"role":"user","createdAt":Date(),"updatedAt":Date(),"deletedAt":Date()};
    var user=await UserSchemaModel.create(userDetail);
    if(user)
    return res.status(201).json({"response":"success"});
    else
    return res.status(500).json({"error":"server error"});
}

// fetch
export var fetch=async(req,res,next)=>{
    var urlObj=url.parse(req.url,true).query;
    var userList=await UserSchemaModel.find(urlObj);
    var l=userList.length;
    if(l!=0)
    return res.status(201).json(userList);
    else
    return res.status(500).json({"error":"server error"});
}



// delete
export var deleteUser=async(req,res,next)=>{
    let id=req.params.id;
    console.log("id ="+id);
    var user=await UserSchemaModel.find({_id:id});
    if(user.length !=0)
    {
        let result=await UserSchemaModel.deleteMany({_id:id});
        if(result)
        return res.status(201).json({"response":"success"});
        else
        return res.status(500).json({"error":"server error"});
    }
    else
    return res.status(404).json({"error":"resource not found"});
}

// update
export var updateUser=async(req,res,next)=>{
    let userDetails=await userSchemaModel.findOne(req.body.condition)
    if(userDetails){
        let user = await UserSchemaModel.updateOne(req.body.condition,req.body.set);
        if(user)
        return res.status(201).json({"message":"success"});
        else
        return res.status(500).json({error:"server error"})
    }
    else
    return res.status(404).json({error:"request resource not found"})
};

// login
export var login=async (req,res,next)=>{
    var userDetails=req.body;
    console.log(userDetails);
    userDetails={...userDetails,"status":1};
    var userList = await UserSchemaModel.find(userDetails);
    var l=userList.length;
    if(l!=0)
    {
      let payload={"subject":userList[0].email};
      let key=rs.generate();
      let token=jwt.sign(payload,key);
      return res.status(201).json({"token":token,"userDetails":userList[0]});
    }
    else
      return res.status(500).json({"token": "error"});
  }
  