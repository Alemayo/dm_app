import mongoose from "mongoose";

const CustomerSchema=new mongoose.Schema (
    {

    CustomerName: {
        type: String,
        required: true
    },
    Telephone: {
        type: String
    },	
    POBOX: {
        type: String,
        
    },	
    Woreda: {
        type: String,
        
    },		
    Subcity: {
        type: String,
        
    },		
    City: {
        type: String,
        
    },		
    Region: {
        type: String,
        
    },		
    Country: {
        type: String,
        
    },		
    Email: {
        type: String,
        
    },		
    Website: {
        type: String,
        
    },		
    ContactPerson: {
        type: String,
        
    },		
    CPTelephone: {
        type: String,
        
    },		
    Status: {
        type: String,
        
    },		
    SalePersonName: {
        type: String,
        
    },		
    CustomerVATNo: {
        type: String,
        
    },		
    CustomerTIN: {
        type: String,
        
    },		
    CustomerAccountNo: {
        type: String,
        
    },		
    GManagerName: {
        type: String,
        
    },	
    lifts : {
        type:[String]
    }
    
    },
    {
        timestamps:true
     }
);

export default mongoose.model("Customer", CustomerSchema);