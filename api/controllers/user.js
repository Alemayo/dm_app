import User from "../models/User.js";
import { createError } from "../utils/error.js";



//Update user
export const  updateUser= async(req, res, next) => {
    
    try {
       
        const updatedUser= await User.findByIdAndUpdate(req.params.id, {$set:req.body}, {new: true});
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
}

//Delete user
export const  deleteUser= async(req, res, next) => {
    
    try {
        
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User deleted successfully");
    } catch (error) {
        next(error);
    }
}

//View user
export const  viewRegisteredUser= async(req, res, next) => {
    
    try {
        
        const registeredUser= await User.findById(req.params.id);
        res.status(200).json(registeredUser);
    } catch (error) {
        next(error);
    }
}

//View all users
export const  viewRegisteredUsers= async(req, res, next) => {
    
    try {
        
        const registeredUsers= await User.find();
        res.status(200).json(registeredUsers);
    } catch (error) {
        next(error);
    }
}