const { getAllDetailsFromProductsTable, getAllDetailsFromTestimonials, getProductDetails } = require("../Repository/homeRepository");



const productService = async (request,response)=>{
    const responseBody={}
    try{
       
        const productID = request.productID;
        if(!productID || productID.length===0){
            throw ({errorMessage:"error caught in service level", message:"productID required for search"})
        }
        responseBody.productDetails = await  getProductDetails(productID);


      
    }
    catch(error){
      
        throw ({errorMessage:"error caught in service level", message:error.message});

        
    }

    return responseBody;

}





module.exports={
    productService
}