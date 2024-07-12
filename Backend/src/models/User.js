

const mongoose=require('mongoose');
const userSchema= new mongoose.Schema({
    title:
    {
        type: String,
    
    },
       
    amount:{
        type:Number,
    
    } , 
    date:{
       type:Date,
    }

}) 

//??? model name

const User=new mongoose.model('User',userSchema)
module.exports=User;










