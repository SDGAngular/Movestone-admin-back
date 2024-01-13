const express = require('express');
const { homeController } = require('../controllers/homeController');
const { productController } = require('../controllers/productController');
const { setQuery } = require('../controllers/queryController');
const homeRouter = express.Router();

homeRouter.get('/getHomeDetails',homeController);
homeRouter.post('/getProductDetails',productController);
homeRouter.post('/createQuery',setQuery)

module.exports =homeRouter;

