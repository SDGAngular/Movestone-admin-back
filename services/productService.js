const { getProductDetails, getImagesByHextCodeAndProductCode, updateProductVisibilityInDb } = require("../Repository/homeRepository");

const productService = async (request, response) => {
  const responseBody = {};
  try {
    const productID = request.productID;
    if (!productID || productID.length === 0) {
      throw ({ errorMessage: "error caught in service level", message: "productID required for search" });
    }
    responseBody.productDetails = await getProductDetails(productID);
    responseBody.productDetails.productPictureDetails = responseBody.productDetails.productPictureDetails.sort(function(a, b) { return a.id - b.id });
  } catch (error) {
    throw ({ errorMessage: "error caught in service level", message: error.message });
  }
  return responseBody;
};

const getImageByColorService = async (request, response) => {
  const responseBody = {};
  try {
    const productID = request.productID;
    const productColorHex = request.productColorHex;

    responseBody.productID = productID;
    responseBody.productColorHex = productColorHex;

    if (!productID || productID.length === 0) {
      throw ({ errorMessage: "error caught in service level", message: "productID required for search" });
    }

    if (!productColorHex || productColorHex.length === 0) {
      throw ({ errorMessage: "error caught in service level", message: "productColorHex required for search" });
    }

    const allPics = await getImagesByHextCodeAndProductCode(request);

    responseBody.pictures = allPics.map((eachPic) => {
      return eachPic.productImageURL;
    });
  } catch (error) {
    throw ({ errorMessage: "error caught in service level", message: error.message });
  }
  return responseBody;
};

// New method to update product visibility
const updateVisibility = async (productID, visible) => {
  try {
    if (!productID || !visible) {
      throw new Error('Product ID and visibility status are required');
    }
    // Call the repository function to update visibility
    const result = await updateProductVisibilityInDb(productID, visible);
    return result;
  } catch (error) {
    throw new Error('Error updating product visibility: ' + error.message);
  }
};

module.exports = {
  productService,
  getImageByColorService,
  updateVisibility
};
