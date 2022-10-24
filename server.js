const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req,res){
  var num1=req.body.num1;
  var num2=req.body.num2;
  if(num1=='')
    num1=0;
  if(num2=='')
    num2=0;
  num1=Number(num1);
  num2=Number(num2);
  var ans=num1+num2;
  res.send("Sum is:  " + ans);
});
app.listen(3000,function(){
  console.log("Server Started");
});
