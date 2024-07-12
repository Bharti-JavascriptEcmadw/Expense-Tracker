const express=require('express');
require('./src/db/conn')
const app=express();
const User=require('./src/models/User')
app.use(express.json());
const cors=require('cors');
app.use(cors())




//?? Now create Route



app.get('/', (req,res)=>{
    res.send('app is working ')
})



app.post("/", async(req,res)=>{
    // res.send("apii")
    let user=new User(req.body)
    let result =await user.save();
        res.send(result);
    console.log(result)
})


app.get ("/post", async(req,res)=>{
    // res.send("apii")
    let user= await User.find(req.body)
    if (user)
        {
            res.send(user);

        }
        else{
            res.send("no user")
        }
    // console.log(result)
})



            

app.listen(5000);
  






