import express from "express";
import { updateUser, deleteUser, viewRegisteredUser, viewRegisteredUsers } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router= express.Router();

router.get("/checkAuthentication", verifyToken, (req, res)=>{
    res.send("Hello user, you are logged in.");
});

router.get("/checkUser/:id", verifyUser, (req, res, next)=>{
    res.send("Hello user, you are logged in and authorized to delete this account");
});

router.get("/checkAdmin/:id", verifyAdmin, (req, res, next)=>{
    res.send("Hello user, you are logged in as admin and authorized to delete any account.");
});

router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser,  deleteUser);
router.get("/:id", verifyUser, viewRegisteredUser);
router.get("/", verifyAdmin, viewRegisteredUsers);


export default router;