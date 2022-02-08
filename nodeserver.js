var express = require("express");
var app = express();
var client = require("mongodb").MongoClient;
app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
    next();
  });
const port  = 3100;
var url = "mongodb://localhost:27017/"
var dbo;
client.connect(url, function(err, res) {
    if (err) throw err;
    console.log("connected");
     dbo = res.db("QuizGame");
    dbo.collection("result");
    // res.close();
  });

app.get("/getting-data", (req,res)=>{
   const data =dbo.collection("result").find({}).toArray(function(err, result){
       if(err) throw err;
       console.log(result);
       res.send(result);
   });

})

app.post("/",(req,res)=>{
   let body = req.body;
   console.log(body);
   dbo.collection("result").insertOne(body,(err,result)=>{
       if(err) throw err;
       console.log("Successfully inserted");
       console.log(result);
       
       res.send("");
   });
})

app.listen(port, ()=>console.log(`Server is Live at ${port}`))

  
