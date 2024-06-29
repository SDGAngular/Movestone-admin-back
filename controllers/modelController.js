
const Config = require("../database/models/config");
const Emails = require("../database/models/email");
const ProductsPictures = require("../database/models/productPics");
const Products = require("../database/models/products");
const Query = require("../database/models/query");
const Testimonial = require("../database/models/testimonials");
const User = require('../database/models/user');
const { getSuccessPayload, getErrorPayload } = require("../utilities/getSuccessAndErrorPayload");



const modelController = async (request, response, next) => {

  try {
    
    const successPayload = getSuccessPayload();
    await Config.sync({force:true})
    await Config.bulkCreate(
      [
        {
            pageName:'home',
            sectionName:'banner',
            attribute1:'https://res.cloudinary.com/dyizlmke8/image/upload/v1719644023/Movestone/Home%20page/Slider_1_ngblpg.jpg'
        },
    
        {
            pageName:'home',
            sectionName:'banner',
            attribute1:'https://res.cloudinary.com/dyizlmke8/image/upload/v1719644024/Movestone/Home%20page/Slider_2_atdkwv.jpg'
        },
    
        {
            pageName:'home',
            sectionName:'banner',
            attribute1:'https://res.cloudinary.com/dyizlmke8/image/upload/v1719644024/Movestone/Home%20page/Slider_3_oydwm1.jpg'
        },
    
        {
            pageName:'home',
            sectionName:'banner',
            attribute1:'https://res.cloudinary.com/dyizlmke8/image/upload/v1719644026/Movestone/Home%20page/Slider_4_nguptf.jpg'
        },
    
        {
            pageName:'home',
            sectionName:'banner',
            attribute1:'https://res.cloudinary.com/dyizlmke8/image/upload/v1719644027/Movestone/Home%20page/Slider_5_adural.jpg'
        },
    
    
    
    
    ]
    )
  



    response.send(successPayload);
  }
  catch (error) {
    const errorPayload = getErrorPayload();
    errorPayload.message = "error caught in model controller"
    errorPayload.extendedMessage = error.message
    response.send(errorPayload)
  }



}



module.exports = {
    modelController
}