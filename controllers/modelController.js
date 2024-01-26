
const ProductsPictures = require("../database/models/productPics");
const Products = require("../database/models/products");
const Query = require("../database/models/query");
const Testimonial = require("../database/models/testimonials");
const User = require('../database/models/user');
const { getSuccessPayload, getErrorPayload } = require("../utilities/getSuccessAndErrorPayload");



const modelController = async (request, response, next) => {

  try {
    
    const successPayload = getSuccessPayload();
    await Products.sync({force:true});
    await Products.bulkCreate([{
      "productID": "STR01",
      "productName": "MS ETOT",
      "colorOptions": "GRAY / BLUE / RED / GREEN / SEA GREEN",
      "motor": "1000 WT AND 1200 WT",
      "controller": "55 AH",
      "tyreDiameter": "3.75.12",
      "tyreType": "CEAT & RALSON ",
      "weightWithoutBattery": "270",
      "breakType": "BRAKE DRUM",
      "roof": "METAL ROOF",
      "shocker": "43",
      "seatingCapacity": "4+1",
      "bodyDimension": "",
      "charger": "AXIOM 18 A",
      "battery": "EASTMAN & MUHAO",
      "rim": "ALLOY RIM",
      "mileage": null,
      "sideCover": null,
      "wiper": null,
      "converter": null,
      "headLight": null,
      "price": "700",
      "features": "new,2021,automatic,petrol,138mph",
      "imageURL": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Punch/10681/1691392713058/front-left-side-47.jpg?tr=w-664",
    },
    {
      "productID": "PMP01",
      "productName": "MOVE STONE",
      "colorOptions": "GRAY / BLUE / RED / GREEN / SEA GREEN",
      "motor": "1000 WT AND 1200 WT",
      "controller": "55 AH",
      "tyreDiameter": "3.75.12",
      "tyreType": "CEAT & RALSON ",
      "weightWithoutBattery": "270",
      "breakType": "BRAKE DRUM",
      "roof": "METAL ROOF",
      "shocker": "43",
      "seatingCapacity": "4+1",
      "bodyDimension": "",
      "charger": "AXIOM 18 A",
      "battery": "EASTMAN & MUHAO",
      "rim": "ALLOY RIM",
      "mileage": "100 + ",
      "sideCover": null,
      "wiper": null,
      "converter": null,
      "headLight": null,
      "price": "700",
      "features": "new,2021,automatic,petrol,138mph",
      "imageURL": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Punch/10681/1691392713058/front-left-side-47.jpg?tr=w-664",
    }
  
  ])
    await ProductsPictures.sync({alter:true});
    await Query.sync({alter:true});
    await Testimonial.sync({alter:true});
    await User.sync({alter:true});
    await User.create({userID:'Shubhayu', password:'Kolkata@1', email:'dasguptasubhayu@gmail.com'})

  

    response.send(successPayload);
  }
  catch (error) {
    const errorPayload = getErrorPayload();
    errorPayload.message = error.errorMessage
    errorPayload.extendedMessage = error.message
    response.send(errorPayload)
  }



}



module.exports = {
    modelController
}