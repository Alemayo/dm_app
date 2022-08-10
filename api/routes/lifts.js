import express from "express";
import { addLift, deleteLift, updateLift, viewAllLifts, viewLift } from "../controllers/lift.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router= express.Router();


//Endpoints

//Route to Add new lift
router.post("/:customerId", verifyAdmin, addLift);


//Route to Update lift detail
router.put("/:id", verifyAdmin, updateLift);

//Route to Delete a lift
router.delete("/:id/:customerId", verifyAdmin, deleteLift);

//Route to view a lift's detail
router.get("/:id", viewLift);

//Route to view all lifts
router.get("/", verifyAdmin, viewAllLifts);


export default router;