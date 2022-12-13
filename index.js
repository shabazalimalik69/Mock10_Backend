const express = require("express");
const cors = require("cors");
const connectDB = require("./Config/db");
const userRouter = require("./Routers/router")
const app = express();

app.use(cors())
app.use(express.json())

app.use('/', userRouter);

app.get("/",(req,res)=>{
    res.send("HomePage")
})

app.listen(7600,async()=>{
    await connectDB()
    console.log("Server Running on http://localhost:7600")
})