const { getAllDetailsFromProductsTable, getAllDetailsFromTestimonials, getConfigProperties } = require("../Repository/homeRepository");
const ProductsPictures = require("../database/models/productPics");
const Products = require("../database/models/products");
const Query = require("../database/models/query");


const homeService = async (request,response)=>{
    const responseBody={}

  
    try{
        responseBody.products = await getAllDetailsFromProductsTable();
        responseBody.testimonials = await getAllDetailsFromTestimonials();
        const homeBannerImages = await getConfigProperties('home','banner');
        responseBody.homeBannerImages = homeBannerImages.map((eachHomeBanner)=>{
            return eachHomeBanner.attribute1
        })
        
        
    
      
    }
    catch(error){
      
        console.log(error)
        throw ({errorMessage:"error caught in service level", message:error.message});

        
    }

    return responseBody;

}

const configService = async (request)=>{
    const responseBody={}

  
    try{
        const homeBannerImages = await getConfigProperties(request.pageName,request.sectionName);

        return homeBannerImages;
    
        
        
    
      
    }
    catch(error){
      
        throw ({errorMessage:"error caught in service level", message:error.message});

        
    }



}





module.exports={
    homeService,configService
}