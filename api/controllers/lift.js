
import Lift from "../models/lift.js";
import Customer from "../models/Customer.js";
// Adds new lift

export const  addLift= async(req, res) => {
    const customerId= req.params.customerId;
    const newlift= new Lift(req.body);

    try {
        const savedLift= await newlift.save();
        try {
            await Customer.findByIdAndUpdate(customerId, {$push : {lifts: savedLift._id}});
        } catch (error) {
            next(error)
        }
      
        res.status(200).json(savedLift);
    } catch (error) {
        res.status(500).json(error);
    }
}
// Updates Lift profile
export const  updateLift= async (req, res)=>{
    
    try {
        const updatedLift= await Lift.findByIdAndUpdate(req.params.id, {$set:req.body}, {new : true});
        res.status(200).json(updatedLift);
    } catch (error) {
        res.status(500).json(error);
    }

};

// Deletes lift profile
export const  deleteLift= async (req, res)=>{
    const customerId= req.params.customerId;
    try {
        await Lift.findByIdAndDelete(req.params.id);
        try {
            await Customer.findByIdAndUpdate(customerId, {$pull : {lifts: req.params.id}});
        } catch (error) {
            next(error)
        }
        res.status(200).json("Lift Deleted");
    } catch (error) {
        res.status(500).json(error);
    }

};

// View lift profile
export const  viewLift= async (req, res)=>{
    
    try {
        const getLift=await Lift.findById(req.params.id);
        res.status(200).json(getLift);
    } catch (error) {
        res.status(500).json(error);
    }

};

// Lists all lifts
export const  viewAllLifts= async (req, res,next)=>{
    
    try {
        const getLifts=await Lift.find();
        res.status(200).json(getLifts);
    } catch (error) {
      
       next(error);
    }

};