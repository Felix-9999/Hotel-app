import exress from "express"
import { register,login } from "../controllers/auth.js"

const router = exress.Router()
 

 router.post("/register",register)
 router.post("/login",login)

 export default  router