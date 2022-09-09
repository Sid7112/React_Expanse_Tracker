
const dbModel = require("../models/user");



exports.addExpanse = async(req,res) =>{
    try{
        const udata = await new dbModel(req.body).save();
        res.json(udata);
    }
    catch(err){
        console.log(err);
    }
}


exports.getAllExpanse = async(req,res) =>{

    try
    {
        const rawdata = await dbModel.find();
        res.json((rawdata));
    }
    catch(err)
    {
        console.log(err);
    }

}


exports.getExpanse = async(req,res) =>{

    try{
        const edata = await dbModel.find({_id:req.params.expID});
        res.json(edata);
    }
    catch(err){
        console.log(err);
    }
}


exports.updateExpanse = async(req,res) =>{

    try{
        const udata = await dbModel.findOneAndUpdate({_id:req.params.expID},req.body,{new:true});
        res.json(udata);
    }
    catch(err){
        console.log(err);
    }

}

exports.deleteExpanse = async(req,res) =>{

    try{
        const udata = await dbModel.findOneAndDelete({_id:req.params.expID});
        res.json(udata);        
    }
    catch(err){
        console.log(err);
    }

}


