import exress from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"


import authRoot from "./roots/auth.js"
import usersRoot from "./roots/users.js"
import hotelsRoot from "./roots/hotels.js"
import roomsRoot from "./roots/rooms.js"

dotenv.config()
const app  = exress()

const connect = async  ()=>{
try{
    await mongoose.connect(process.env.MONGO);
    console.log("conected to mongo DB");
}catch(error) {
   throw error
}
};

// middelwares
app.use(cookieParser())


app.use(exress.json())

app.use("/api/auth",authRoot)
app.use("/api/users",usersRoot)
app.use("/api/hotels",hotelsRoot)
app.use("/api/rooms",roomsRoot)


mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB dis conected");
})

app.use((err,req,res,next)=>{
  const errorStatus = err.status || 500;
  const errorMesage = err.message || "samting went wrong";
    return  res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMesage,
        stack:err.stack,
    })
      })

app.listen(8800,()=>{
    connect()
    console.log("Conected to backent.");
})