import express from "express";
import { verifayAdmin } from "../utils/verifyToken.js";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room.js";
const router = express.Router()


///create
router.post("/:hotelid",verifayAdmin,createRoom)
///UPDATE
router.put("/:id",verifayAdmin,updateRoom)
////DELETE
router.delete("/:id/:hotelid",verifayAdmin,deleteRoom)
////GET
router.get("/:id",getRoom)
////GET ALL
router.get("/",getRooms)

export default router