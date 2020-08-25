let express=require("express")
let app=express();
app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.get("/login",(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    if(username&&password)
    res.send({username:username,password:password,message:"seccessFully"})
})

app.get("/registary",(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    res.send({username:username,password:password,message:"seccessFully"})
})

app.listen("3800",()=>{
    console.log("Connect To Server.....")
})
