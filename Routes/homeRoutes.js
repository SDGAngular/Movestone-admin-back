const express = require('express');
const { homeController, configController } = require('../controllers/homeController');
const { productController, searchImageByColor } = require('../controllers/productController');
const { setQuery, getQuery, getEmails, submitEmail } = require('../controllers/queryController');
const { authController } = require('../controllers/authController');
const { authMiddleware } = require('../middlewares/authMiddlesware');
const { modelController } = require('../controllers/modelController');
const ProductsPictures = require('../database/models/productPics');
const homeRouter = express.Router();
var schedule = require('node-schedule');
const Query = require('../database/models/query');


homeRouter.get('/getHomeDetails',homeController);
homeRouter.post('/getProductDetails',productController);
homeRouter.post('/createQuery',setQuery);
homeRouter.post('/authenticate',authController);
homeRouter.post('/submitEmails',submitEmail);
homeRouter.post('/getImageByColor',searchImageByColor);


homeRouter.get('/startAndCreateModels',modelController)
 homeRouter.post('/getConfig',configController)
homeRouter.get('/allProductsPictures',async (req,resp)=>{



   const allPictures =await ProductsPictures.findAll({attributes:{exclude:['createdAt','updatedAt']}});
   resp.send(allPictures);

})



homeRouter.post('/getQuery',authMiddleware,getQuery);
homeRouter.get('/getEmailsForNewsletter',authMiddleware,getEmails);


//Schedulers

schedule.scheduleJob('deleteEveryMonth', '0 0 0 1,15 ? *', async function() { 

   return await Query.truncate();

} )

module.exports =homeRouter;

