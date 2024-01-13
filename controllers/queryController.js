const { productService } = require("../services/productService");
const { queryService } = require("../services/queryService");
const { getSuccessPayload, getErrorPayload } = require("../utilities/getSuccessAndErrorPayload");



const setQuery = async (request,response, next)=>{
    try {
    
       
      const successPayload = getSuccessPayload();
        successPayload.responsePayload = await queryService(request.body);
       
        response.send(successPayload);
      }
      catch (error) {
        const errorPayload = getErrorPayload();
        errorPayload.message = error.errorMessage
        errorPayload.extendedMessage = error.message
        response.send(errorPayload)
      }
}

module.exports = {setQuery}