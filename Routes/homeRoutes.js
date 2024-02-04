const express = require('express');
const { homeController } = require('../controllers/homeController');
const { productController } = require('../controllers/productController');
const { setQuery, getQuery } = require('../controllers/queryController');
const { authController } = require('../controllers/authController');
const { authMiddleware } = require('../middlewares/authMiddlesware');
const { modelController } = require('../controllers/modelController');
const ProductsPictures = require('../database/models/productPics');
const homeRouter = express.Router();

homeRouter.get('/getHomeDetails',homeController);
homeRouter.post('/getProductDetails',productController);
homeRouter.post('/createQuery',setQuery);
homeRouter.post('/authenticate',authController);

homeRouter.get('/startAndCreateModels',modelController)
homeRouter.get('/allProductsPictures',async (req,resp)=>{

   const allPictures =await ProductsPictures.findAll({attributes:{exclude:['createdAt','updatedAt']}});
   resp.send(allPictures);

})



homeRouter.post('/getQuery',authMiddleware,getQuery);

module.exports =homeRouter;

