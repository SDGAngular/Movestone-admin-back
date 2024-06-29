

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
    colorOptions:{
        type: Sequelize.STRING,
        allowNull: true,
    },

    motor:{
        type: Sequelize.STRING,
        allowNull: true,
    },

    controller:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    tyreDiameter:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    tyreType:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    weightWithoutBattery:{
        type: Sequelize.STRING,
        allowNull: true,
    },

    breakType:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    roof:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    shocker:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    seatingCapacity:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    bodyDimension:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    charger:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    battery:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    rim:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    mileage:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    sideCover:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    wiper:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    converter:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    headLight:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    price: {

        type: DataTypes.STRING,
        allowNull: true,

    },
    features: {

        type: Sequelize.STRING,
        allowNull: true,

    },
    imageURL: {

        type: Sequelize.STRING,
        allowNull: true,

    },
    curtain: {

        type: Sequelize.STRING,
        allowNull: true,

    },
    sideLookingGlass: {

        type: Sequelize.STRING,
        allowNull: true,

    },
    camera: {

        type: Sequelize.STRING,
        allowNull: true,

    },
    sensorLock: {

        type: Sequelize.STRING,
        allowNull: true,

    },
    rearShocker: {

        type: Sequelize.STRING,
        allowNull: true,

    },

    fireExtinguisher:{

        type: Sequelize.STRING,
        allowNull: true,

    },
    footMat:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    fmSet:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    taxiLight:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    fan:{
        type: Sequelize.STRING,
        allowNull: true,
    },


    toolKit:{
        type: Sequelize.STRING,
        allowNull: true,
    },

    jackHandleSet:{
        type: Sequelize.STRING,
        allowNull: true,
    },

    passengerHandle:{
        type: Sequelize.STRING,
        allowNull: true,
    },

    stepnyCover:{
        type: Sequelize.STRING,
        allowNull: true,
    },

    fogLight:{
        type: Sequelize.STRING,
        allowNull: true,
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