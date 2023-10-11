import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verfayUser, verifayAdmin, verifyToken } from "../utils/verifyToken.js";
const router = express.Router()

///  TEST
// router.get("/checkauthenetion",verifyToken,(req,res,next)=>{
//     res.send("hello user, you are logden")
// })

// router.get("/chackuser/:id",verfayUser,(req,res,next)=>{
//     res.send("hello user, you are logden you can delete your acount")
// })
// router.get("/chackadmin/:id",verifayAdmin,(req,res,next)=>{
//     res.send("hello user, you are logden you can delete all acount")
// })

//UPDATE
router.put("/:id",verfayUser,updateUser)
//DELETE
router.delete("/:id",verfayUser,deleteUser)
//GET
router.get("/:id",verfayUser,getUser)
//GET ALL
router.get("/",verifayAdmin,getUsers)

export default router