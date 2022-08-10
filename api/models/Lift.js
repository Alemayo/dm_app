import mongoose from "mongoose";

const LiftSchema=new mongoose.Schema (
    {
    liftId: {
        type: String,
        required: true,
        unique: true
    },
    customerName: {
        type: String,
    },	
    buildingName: {
        type: String,
    },	
    address: {
        type: String,
    },		
    woreda: {
        type: String,
        
    },		
    subCity: {
        type: String,
        
    },		
    city: {
        type: String,
        
    },		
    region: {
        type: String,
        
    },		
    country: {
        type: String,
        
    },		
    projectType: {
        type: String,
    },		
    projectManager: {
        type: String,
    },		
    CurrentStatus: {
        type: String, 
    },		
    accountNo: {
        type: String,
    }
},
    {
        timestamps:true
     }
);

export default mongoose.model("Lift", LiftSchema);