import Customer from "../models/Customer.js";

export const  addCustomer= async(req, res) => {
    const newCustomer= new Customer(req.body);

    try {
        const savedCustomer= await newCustomer.save();
        res.status(200).json(savedCustomer);
    } catch (error) {
        res.status(500).json(error);
    }


}
// Updates customer profile
export const  updateCustomer= async (req, res)=>{
    
    try {
        const updatedCustomer= await Customer.findByIdAndUpdate(req.params.id, {$set:req.body}, {new : true});
        res.status(200).json(updatedCustomer);
    } catch (error) {
        res.status(500).json(error);
    }

};

// Deletes customer profile
export const  deleteCustomer= async (req, res)=>{
    
    try {
        await Customer.findByIdAndDelete(req.params.id);
        res.status(200).json("Customer Deleted");
    } catch (error) {
        res.status(500).json(error);
    }

};

// View customer profile
export const  viewCustomer= async (req, res)=>{
    
    try {
        const foundCustomer=await Customer.findById(req.params.id);
        res.status(200).json(foundCustomer);
    } catch (error) {
        res.status(500).json(error);
    }

};

// Lists all customers
export const  viewAllCustomers= async (req, res,next)=>{
    
    try {
        const allCustomers=await Customer.find();
        res.status(200).json(allCustomers);
    } catch (error) {
      
       next(error);
    }

};