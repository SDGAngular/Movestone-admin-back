

const db = require('../database');

const { Sequelize, DataTypes } = require('sequelize');
const ProductsPictures = require('./productPics');
const Query = require('./query');


const Products = db.define('Products', {
 
    productID: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        primaryKey:true,
        
    },
    productName: {

        type: Sequelize.STRING,
        allowNull: false,

    },

    price: {

        type: DataTypes.STRING,
        allowNull: false,

    },
    features: {

        type: Sequelize.STRING,
        allowNull: false,

    },
    imageURL: {

        type: Sequelize.STRING,
        allowNull: false,

    }
}, {
    // Other model options go here
});

// `sequelize.define` also returns the model
console.log(Products === db.models.Products); // true

Products.hasMany(ProductsPictures,{foreignKey:'productID', as:'productPictureDetails'});
ProductsPictures.belongsTo(Products,{foreignKey:'productID', as:'productInfo'});

// Products.hasMany(Query,{foreignKey:'productID', as:'queries'});
// Query.belongsTo(Products,{foreignKey:'forProuct',as:'forProduct'})





module.exports = Products;