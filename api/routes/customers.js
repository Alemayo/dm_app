import express from "express";
import { addCustomer, updateCustomer, deleteCustomer, viewCustomer, viewAllCustomers } from "../controllers/customer.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router= express.Router();


//Endpoints
//Add new customer
router.post("/", verifyAdmin, addCustomer);


//Update customer
router.put("/:id", verifyAdmin, updateCustomer);

//Delete
router.delete("/:id", verifyAdmin, deleteCustomer);

//View customer
router.get("/:id", viewCustomer);

//View all customers
router.get("/", verifyAdmin, viewAllCustomers);


export default router;