const ProductsPictures = require("../database/models/productPics");
const Products = require("../database/models/products");
const Query = require("../database/models/query");
const Testimonial = require("../database/models/testimonials");



const getAllDetailsFromProductsTable = async ()=>{
    try{
        return await Products.findAll({attributes:['productID','productName','price','features','imageURL']});
    }
    catch(error){
         throw ({errorMessage:"error caught in repo level", message:error.message});
    }
    
}



const getProductDetails = async (productID)=>{
    try{
        return await Products.findOne({attributes:['productID','productName','price','features'],include:{model:ProductsPictures, as:'productPictureDeatils', attributes:['productImageURL']},where:{productID}});
    }
    catch(error){
         throw ({errorMessage:"error caught in repo level", message:error.message});
    }
    
}

const getAllDetailsFromTestimonials = async ()=>{
    try{ return await Testimonial.findAll({attributes:['testimonialID','testimonial','testimonialAuthor','stars','imageURL']});}
   catch(error){
        throw ({errorMessage:"error caught in repo level", message:error.message});
   }
}

const createQuery= async (body) =>{
    try{ 
        return await Query.create(body)}

    catch(error){
         throw ({errorMessage:"error caught in repo level", message:error.message});
    }
}



module.exports={getAllDetailsFromProductsTable,
    getAllDetailsFromTestimonials,
    getProductDetails, createQuery}