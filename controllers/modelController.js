
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
    await Products.bulkCreate([
      {
        "productID": "PMP01",
        "productName": "MOVE STONE SUPER",
        "colorOptions": "GRAY / BLUE / RED / GREEN / SEA GREEN",
        "motor": "1000 WT AND 1200 WT",
        "controller": "55 AH",
        "tyreDiameter": "3.75-12",
        "tyreType": "CEAT & RALSON ",
        "weightWithoutBattery": "270",
        "breakType": "BRAKE DRUM",
        "roof": "METAL ROOF/PVC FIBER",
        "shocker": "43 MM 31\"",
        "seatingCapacity": "4+1",
        "bodyDimension": "2710mmL-980mmW-1790mmH\t",
        "charger": "AXIOM 18 A",
        "battery": "EASTMAN & MUHAO",
        "rim": "ALLOY RIM",
        "mileage": "60-80",
        "sideCover": "UV-resistant polyester canvas\t",
        "wiper": "12V-12\"-RUBBER WIPER\t",
        "converter": "20/15Amp-48/60/72V",
        "headLight": "\tHALOGEN",
        "price": "118000-131000",
        "features": "new,2021,automatic,petrol,138mph",
        "imageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1706368144/rickshaw/super/SEN_9310-removebg-preview_tmv5yz.png",
       
      },

      {
        "productID": "KJP01",
        "productName": "MOVESTONE LOADER\n",
        "colorOptions": "GRAY / BLUE / RED / GREEN / SEA GREEN",
        "motor": "1900 WT AND 2200 WT\n",
        "controller": "55 AH",
        "tyreDiameter": "3.75-12",
        "tyreType": "CEAT & RALSON ",
        "weightWithoutBattery": "270",
        "breakType": "BRAKE DRUM/ DISK",
        "roof": "METAL ROOF/PVC FIBER",
        "shocker": "43 MM 31\"\n",
        "seatingCapacity": "1+1",
        "bodyDimension": "2800mmL-1000mmW-1800mmH\n",
        "charger": "AXIOM 36 A\n",
        "battery": "EASTMAN & MUHAO",
        "rim": "ALLOY RIM/SPOKE",
        "mileage": "80",
        "sideCover": "UV-resistant polyester canvas\t",
        "wiper": "12V-12\"-RUBBER WIPER\t",
        "converter": "20/15Amp-48/60/72V\t",
        "headLight": "HALOGEN",
        "price": "130000-145000",
        "features": "new,2021,automatic,petrol,138mph",
        "imageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1707027385/rickshaw/Loader/10_qbce5s.webp",
      
      },

      {
        "productID": "STR01",
        "productName": "MOVE STONE DELUXE",
        "colorOptions": "GRAY / BLUE / RED / GREEN / SEA GREEN",
        "motor": "1000 WT AND 1200 WT",
        "controller": "55 AH",
        "tyreDiameter": "3.75-12",
        "tyreType": "CEAT & RALSON ",
        "weightWithoutBattery": "270",
        "breakType": "BRAKE DRUM/ DISK",
        "roof": "METAL ROOF/PVC FIBER",
        "shocker": "43 MM 31\"",
        "seatingCapacity": "4+1",
        "bodyDimension": "2710mmL-980mmW-1790mmH\t",
        "charger": "AXIOM 18 A",
        "battery": "EASTMAN & MUHAO",
        "rim": "ALLOY RIM",
        "mileage": "150",
        "sideCover": "UV-resistant polyester canvas\t",
        "wiper": "12V-12\"-RUBBER WIPER\t",
        "converter": "20/15Amp-48/60/72V\t",
        "headLight": "HALOGEN/LED",
        "price": "150000-175000",
        "features": "new,2021,automatic,petrol,138mph",
        "imageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1706366953/rickshaw/deluxe/SEN_9379-removebg-preview_ua31oe.png",
       
      }

   
  
  ])
    await ProductsPictures.sync({force:true});
    await ProductsPictures.bulkCreate([
      {
        "id": 5,
        "productID": "STR01",
        "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1706367176/rickshaw/deluxe/SEN_9380_qt3zx0.webp"
      },
      {
        "id": 6,
        "productID": "STR01",
        "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1706367176/rickshaw/deluxe/SEN_9395_r33drw.webp"
      },
      {
        "id": 7,
        "productID": "STR01",
        "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1706367177/rickshaw/deluxe/SEN_9388_ibl0ey.webp"
      },
      {
        "id": 8,
        "productID": "STR01",
        "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1706367177/rickshaw/deluxe/SEN_9386_kcrgmw.webp"
      },
      {
        "id": 9,
        "productID": "STR01",
        "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1706367177/rickshaw/deluxe/SEN_9387_jttv4v.webp"
      },
      {
        "id": 10,
        "productID": "STR01",
        "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1706367178/rickshaw/deluxe/SEN_9383_b7wtzl.webp"
      },
      {
        "id": 1,
        "productID": "PMP01",
        "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1706368144/rickshaw/super/SEN_9310-removebg-preview_tmv5yz.png"
      },
      {
        "id": 2,
        "productID": "PMP01",
        "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1706428365/rickshaw/super/SEN_9314_c7x0l7.webp"
      },
      {
        "id": 3,
        "productID": "PMP01",
        "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1706428365/rickshaw/super/SEN_9314_c7x0l7.webp"
      },
      {
        "id": 11,
        "productID": "PMP01",
        "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1706428365/rickshaw/super/SEN_9322_eiiame.webp"
      },
      {
        "id": 12,
        "productID": "PMP01",
        "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1706428365/rickshaw/super/SEN_9328_ksvcba.webp"
      },
      {
        "id": 13,
        "productID": "PMP01",
        "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1706428365/rickshaw/super/SEN_9328_ksvcba.webp"
      },
      {
        "id": 14,
        "productID": "PMP01",
        "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1706428366/rickshaw/super/SEN_9341_o1rsgq.webp"
      },
      {
        "id": 15,
        "productID": "PMP01",
        "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1706428373/rickshaw/super/SEN_9334_rnrpil.webp"
      },
      {
        "id": 16,
        "productID": "PMP01",
        "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1706428366/rickshaw/super/SEN_9333_u4hwcv.webp"
      },
      {
        "id": 4,
        "productID": "STR01",
        "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1706366953/rickshaw/deluxe/SEN_9379-removebg-preview_ua31oe.png"
      },
      {
        "id": 18,
        "productID": "KJP01",
        "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1707027385/rickshaw/Loader/10_qbce5s.webp"
      },
      {
        "id": 19,
        "productID": "KJP01",
        "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1707027385/rickshaw/Loader/5_huqd5a.webp"
      },
      {
        "id": 21,
        "productID": "KJP01",
        "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1707027384/rickshaw/Loader/7_eyio0m.webp"
      },
      {
        "id": 23,
        "productID": "KJP01",
        "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1707027385/rickshaw/Loader/8_pbln28.webp"
      },
      {
        "id": 22,
        "productID": "KJP01",
        "productImageURL": "https://res.cloudinary.com/duumuebzt/image/upload/v1707027385/rickshaw/Loader/4_aro0lv.webp"
      }
    ])
    await Query.sync({alter:true});
    await Testimonial.sync({alter:true});
    await User.sync({force:true});
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