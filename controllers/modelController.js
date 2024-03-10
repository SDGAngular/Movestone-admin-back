
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
  //   await Products.sync({force:true});
  //   await Products.bulkCreate([
  //     {
  //       "productID": "PMP01",
  //       "productName": "MOVE STONE SUPER",
  //       "colorOptions": "#808080 / #0000FF / #FF0000 / #00FF00 /#2E8B57",
  //       "motor": "1000 WT AND 1200 WT",
  //       "controller": "55 AH",
  //       "tyreDiameter": "3.75-12",
  //       "tyreType": "CEAT & RALSON ",
  //       "weightWithoutBattery": "270",
  //       "breakType": "BRAKE DRUM",
  //       "roof": "METAL ROOF/PVC FIBER",
  //       "shocker": "43 MM 31\"",
  //       "seatingCapacity": "4+1",
  //       "bodyDimension": "2710mmL-980mmW-1790mmH\t",
  //       "charger": "AXIOM 18 A",
  //       "battery": "EASTMAN & MUHAO",
  //       "rim": "ALLOY RIM",
  //       "mileage": "60-80",
  //       "sideCover": "UV-resistant polyester canvas\t",
  //       "wiper": "12V-12\"-RUBBER WIPER\t",
  //       "converter": "20/15Amp-48/60/72V",
  //       "headLight": "\tHALOGEN",
  //       "price": "118000-131000",
  //       "features": "new,2021,automatic,petrol,138mph",
  //       "imageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1706368144/rickshaw/super/SEN_9310-removebg-preview_tmv5yz.png",
       
  //     },

  //     {
  //       "productID": "KJP01",
  //       "productName": "MOVESTONE LOADER\n",
  //       "colorOptions": "#808080 / #0000FF / #FF0000 / #00FF00 /#2E8B57",
  //       "motor": "1900 WT AND 2200 WT\n",
  //       "controller": "55 AH",
  //       "tyreDiameter": "3.75-12",
  //       "tyreType": "CEAT & RALSON ",
  //       "weightWithoutBattery": "270",
  //       "breakType": "BRAKE DRUM/ DISK",
  //       "roof": "METAL ROOF/PVC FIBER",
  //       "shocker": "43 MM 31\"\n",
  //       "seatingCapacity": "1+1",
  //       "bodyDimension": "2800mmL-1000mmW-1800mmH\n",
  //       "charger": "AXIOM 36 A\n",
  //       "battery": "EASTMAN & MUHAO",
  //       "rim": "ALLOY RIM/SPOKE",
  //       "mileage": "80",
  //       "sideCover": "UV-resistant polyester canvas\t",
  //       "wiper": "12V-12\"-RUBBER WIPER\t",
  //       "converter": "20/15Amp-48/60/72V\t",
  //       "headLight": "HALOGEN",
  //       "price": "130000-145000",
  //       "features": "new,2021,automatic,petrol,138mph",
  //       "imageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1707027385/rickshaw/Loader/10_qbce5s.webp",
      
  //     },

  //     {
  //       "productID": "STR01",
  //       "productName": "MOVE STONE DELUXE",
  //       "colorOptions": "#808080 / #0000FF / #FF0000 / #00FF00 /#2E8B57",
  //       "motor": "1000 WT AND 1200 WT",
  //       "controller": "55 AH",
  //       "tyreDiameter": "3.75-12",
  //       "tyreType": "CEAT & RALSON ",
  //       "weightWithoutBattery": "270",
  //       "breakType": "BRAKE DRUM/ DISK",
  //       "roof": "METAL ROOF/PVC FIBER",
  //       "shocker": "43 MM 31\"",
  //       "seatingCapacity": "4+1",
  //       "bodyDimension": "2710mmL-980mmW-1790mmH\t",
  //       "charger": "AXIOM 18 A",
  //       "battery": "EASTMAN & MUHAO",
  //       "rim": "ALLOY RIM",
  //       "mileage": "150",
  //       "sideCover": "UV-resistant polyester canvas\t",
  //       "wiper": "12V-12\"-RUBBER WIPER\t",
  //       "converter": "20/15Amp-48/60/72V\t",
  //       "headLight": "HALOGEN/LED",
  //       "price": "150000-175000",
  //       "features": "new,2021,automatic,petrol,138mph",
  //       "imageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1706366953/rickshaw/deluxe/SEN_9379-removebg-preview_ua31oe.png",
       
  //     }

   
  
  // ])
  //   await ProductsPictures.sync({force:true});
  //   await ProductsPictures.bulkCreate(
  //     [
  //       {
  //         "id": 18,
  //         "productID": "KJP01",
  //         "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1707027385/rickshaw/Loader/10_qbce5s.webp"
  //       },
  //       {
  //         "id": 19,
  //         "productID": "KJP01",
  //         "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1707027385/rickshaw/Loader/5_huqd5a.webp"
  //       },
  //       {
  //         "id": 21,
  //         "productID": "KJP01",
  //         "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1707027384/rickshaw/Loader/7_eyio0m.webp"
  //       },
  //       {
  //         "id": 23,
  //         "productID": "KJP01",
  //         "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1707027385/rickshaw/Loader/8_pbln28.webp"
  //       },
  //       {
  //         "id": 22,
  //         "productID": "KJP01",
  //         "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1707027385/rickshaw/Loader/4_aro0lv.webp"
  //       },
  //       {
  //         "id": 5,
  //         "productID": "STR01",
  //         "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1707664707/rickshaw/deluxe/new_set/deluxe_9_sep2ww.webp"
  //       },
  //       {
  //         "id": 6,
  //         "productID": "STR01",
  //         "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1707664707/rickshaw/deluxe/new_set/deluxe_4_eikslx.webp"
  //       },
  //       {
  //         "id": 7,
  //         "productID": "STR01",
  //         "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1707664707/rickshaw/deluxe/new_set/deluxe_6_uwtzwk.webp"
  //       },
  //       {
  //         "id": 8,
  //         "productID": "STR01",
  //         "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1707664707/rickshaw/deluxe/new_set/deluxe_3_nxtufx.webp"
  //       },
  //       {
  //         "id": 9,
  //         "productID": "STR01",
  //         "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1707664707/rickshaw/deluxe/new_set/deluxe_5_xu7ilq.webp"
  //       },
  //       {
  //         "id": 10,
  //         "productID": "STR01",
  //         "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1707664706/rickshaw/deluxe/new_set/deluxe_1_vydj8f.webp"
  //       },
  //       {
  //         "id": 2,
  //         "productID": "PMP01",
  //         "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1707666167/rickshaw/super/new_set/super-5-65c8e8fc29a1c_dkicno.webp"
  //       },
  //       {
  //         "id": 3,
  //         "productID": "PMP01",
  //         "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1707666167/rickshaw/super/new_set/super-2-65c8e8f9739cf_fy3nf5.webp"
  //       },
  //       {
  //         "id": 11,
  //         "productID": "PMP01",
  //         "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1707666166/rickshaw/super/new_set/super-3-65c8e8f9ee645_tz8ikf.webp"
  //       },
  //       {
  //         "id": 12,
  //         "productID": "PMP01",
  //         "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1707666166/rickshaw/super/new_set/super-1-65c8e8f7a6f77_vuekzn.webp"
  //       },
  //       {
  //         "id": 13,
  //         "productID": "PMP01",
  //         "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1707666166/rickshaw/super/new_set/product1-65c8e8f6d77e8_x4owbw.webp"
  //       },
  //       {
  //         "id": 1,
  //         "productID": "PMP01",
  //         "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1707666166/rickshaw/super/new_set/super-3-65c8e8f9ee645_tz8ikf.webp"
  //       }
  //     ])
  //   await Query.sync({alter:true});
  //   await Testimonial.sync({alter:true});
  //   await User.sync({force:true});
  //   await User.create({userID:'Shubhayu', password:'Kolkata@1', email:'dasguptasubhayu@gmail.com'})
await Emails.sync({alter:true})
  

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