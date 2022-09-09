

const express = require("express");

const con = require("./db");

const app = express();

const cors = require("cors");


con.connection.on("connected",(err)=>{

    if(err)
    {
        console.log("Connection Failed");
    }
    else
    {
        console.log("Connection is Successful!");
    }


})

app.use(cors());
app.use(express.json());
app.use("/exp",require("./routes/user"));




app.listen(5500,(err)=>{
    if(err)
    {
        console.log("Server couldn't Start!");
    }
    else
    {
        console.log("Server is Started")
    }
})