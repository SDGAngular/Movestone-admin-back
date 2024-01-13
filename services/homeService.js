const { getAllDetailsFromProductsTable, getAllDetailsFromTestimonials } = require("../Repository/homeRepository");
const ProductsPictures = require("../database/models/productPics");
const Products = require("../database/models/products");
const Query = require("../database/models/query");


const homeService = async (request,response)=>{
    const responseBody={}

  
    try{
        await Query.sync({alter:true})
        responseBody.products = await getAllDetailsFromProductsTable();
        responseBody.testimonials = await getAllDetailsFromTestimonials();
        
    
      
    }
    catch(error){
      
        throw ({errorMessage:"error caught in service level", message:error.message});

        
    }

    return responseBody;

}





module.exports={
    homeService
}