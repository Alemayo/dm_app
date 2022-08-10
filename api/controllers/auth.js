import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

//Registers new user
export const  register= async(req, res, next) => {
    var salt = bcrypt.genSaltSync(10);
    
    var hashedPassword = bcrypt.hashSync(req.body.password, salt);
    const newUser= new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
    });
    try {
        
        const savedUser= await newUser.save();
        res.status(200).json(savedUser);
    } catch (error) {
        next(error);
    }
}
//Manages User Login 
export const  login= async(req, res, next) => {

    try {
        
        const loggingUser= await User.findOne({username: req.body.username});
        if (!loggingUser)
            return next(createError(404, "User not found!"));
        const isPasswordOk= await bcrypt.compareSync(req.body.password, loggingUser.password); 
        if (!isPasswordOk)
        return next(createError(400, "Wrong Passaword or User Name!"));
        const {password, isAdmin, ...otherDetails}=loggingUser._doc;
        const token= jwt.sign({id: loggingUser._id, isAdmin: loggingUser.isAdmin}, process.env.JWT);
        res.cookie("access_token", token, {httpOnly:true}).status(200).json({...otherDetails});
    } catch (error) {
        next(error);
    }
}
