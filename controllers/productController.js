const { productService, getImageByColorService } = require("../services/productService");
const { getSuccessPayload, getErrorPayload } = require("../utilities/getSuccessAndErrorPayload");


const productController = async (request,response, next)=>{
    try {
        const getAllDetails = await productService(request.body);
        const successPayload = getSuccessPayload();
    
        successPayload.responsePayload = getAllDetails
    
    
        response.send(successPayload);
      }
      catch (error) {
        const errorPayload = getErrorPayload();
        errorPayload.message = error.errorMessage
        errorPayload.extendedMessage = error.message
        response.send(errorPayload)
      }
}

const searchImageByColor = async (request,response,next)=>{

  try {
    const getAllDetails = await getImageByColorService(request.body);
    const successPayload = getSuccessPayload();

    successPayload.responsePayload = getAllDetails;


    response.send(successPayload);
  }
  catch (error) {
    const errorPayload = getErrorPayload();
    errorPayload.message = error.errorMessage
    errorPayload.extendedMessage = error.message
    response.send(errorPayload)
  }

}

module.exports = {productController,searchImageByColor}