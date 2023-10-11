import express from "express";
import Hotel from "../models/Hotel.js"
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import { verifayAdmin } from "../utils/verifyToken.js";
 const router = express.Router()
 
// create
router.post("/",verifayAdmin,createHotel)
//UPDATE
router.put("/:id",verifayAdmin,updateHotel)
//DELETE
router.delete("/:id",verifayAdmin,deleteHotel)
//GET
router.get("/:id",getHotel)
//GET ALL
router.get("/",getHotels)

export default router