const { productService, getImageByColorService, updateVisibility } = require("../services/productService");
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

// Function to update product visibility
const updateProductVisibility = async (request, response, next) => {
  try {
    const { productID, visible } = request.body; 

    if (!productID || !visible) {
      const errorPayload = getErrorPayload();
      errorPayload.message = 'ID and visibility are required';
      return response.status(400).send(errorPayload);
    }

    // Call service to update the product
    const updateResult = await updateVisibility(productID, visible); // Assuming this method exists in productService

    const successPayload = getSuccessPayload();
    successPayload.responsePayload = updateResult;
    response.send(successPayload);
  } catch (error) {
    const errorPayload = getErrorPayload();
    errorPayload.message = error.errorMessage;
    errorPayload.extendedMessage = error.message;
    response.send(errorPayload);
  }
};

module.exports = {productController,searchImageByColor, updateProductVisibility}