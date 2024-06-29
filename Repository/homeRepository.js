const { Op, Sequelize } = require("sequelize");
const ProductsPictures = require("../database/models/productPics");
const Products = require("../database/models/products");
const Query = require("../database/models/query");
const Testimonial = require("../database/models/testimonials");
const Users = require("../database/models/user");
const Emails = require("../database/models/email");
const Config = require("../database/models/config");



const getAllDetailsFromProductsTable = async ()=>{
    try{
        return await Products.findAll({attributes:['productID','productName','price','features','imageURL','colorOptions'],
        include:{model:ProductsPictures, as:'productPictureDetails', attributes:['productImageURL','id','productColor'], order:[['id','ASC']] }});
    }
    catch(error){
         throw ({errorMessage:"error caught in repo level", message:error.message});
    }
    
}


const getConfigProperties = async (pageName,sectionName) =>{

    try{
        return await Config.findAll({attributes:['pageName','sectionName','attribute1'],where:{pageName,sectionName}});
    }
    catch(error){
         throw ({errorMessage:"error caught in repo level", message:error.message});
    }

}


const getProductDetails = async (productID)=>{
    try{
        return await Products.findOne({attributes:{exclude:['createdAt','updatedAt']},
        
        include:{model:ProductsPictures, as:'productPictureDetails', attributes:['productImageURL','id'], order:[['id','ASC']] }, 
          
        where:{productID}});
    }
    catch(error){
         throw ({errorMessage:"error caught in repo level", message:error.message});
    }
    
}

const getAllDetailsFromTestimonials = async ()=>{
    try{ return await Testimonial.findAll({attributes:['testimonialID','testimonial','testimonialAuthor','stars','imageURL']});}
   catch(error){
        throw ({errorMessage:"error caught in repo level", message:error.message});
   }
}

const createQuery= async (body) =>{
    try{ 
        return await Query.create(body)}

    catch(error){
         throw ({errorMessage:"error caught in repo level", message:error.message});
    }
}

const getAllQueries= async (body)=>{

    try{
        return await Query.findAll({attributes:['queryID','queryMessage','queryPhone','queryEmail','forProduct']});
    }


    catch(error){
        throw ({errorMessage:"error caught in repo level", message:error.message});
   }

}

const getAllQueryFromToday = async ()=>{
    try{
        
        const TODAY_START = new Date().setHours(0, 0, 0, 0);
        const NOW = new Date();
        return await Query.findAll({

            where: {
                createdAt: { 
                  [Op.gt]: TODAY_START,
                  [Op.lt]: NOW
                },
              },
            
        })
    }
    catch(error){
        throw ({errorMessage:"error caught in repo level", message:error.message});
   }
}


const getAllQueryFromWeekAndMonth = async (days)=>{
    try{
       
        return await Query.findAll({
            where:{
                createdAt: {
                    [Op.gte]: Sequelize.literal(`NOW() - INTERVAL '${days}'`),
                  }
            }
        })
        
    }
    catch(error){
        throw ({errorMessage:"error caught in repo level", message:error.message});
   }
}



const findUser=async (request)=>{
    try{

        return await Users.findOne({
            where: {
              [Op.or]: [
                {
                    userID:request.userID,
                    password:request.password
                },
                {
                    email:request.email??null,
                    password:request.password
                }
              ],
            }
          });

        // return await Users.findOne({where:{userID:request.userID}})

    }
    catch(error)
{
    throw ({errorMessage:"error caught in repo level", message:error.message});
}}


const findAllEmail=async (request)=>{
    try{
     return await Emails.findAll()

    }
    catch(error)
{
    throw ({errorMessage:"error caught in repo level", message:error.message});
}}

const getImagesByHextCodeAndProductCode=async (request)=>{
    try{

        const productID = request.productID;
        const productColorHex = request.productColorHex;

        return await ProductsPictures.findAll({where:{productID,productColor:productColorHex},

            attributes:{exclude:['createdAt','updatedAt','id','productID','productColor']}
        });

    }
    catch(error)
{
    throw ({errorMessage:"error caught in repo level", message:error.message});
}}


const submitEmailinTable=async (request)=>{
    try{

        const email=request.emailID;

        return await Emails.findOrCreate({
            where:{emailID:email},defaults:request});

    }
    catch(error)
{
    throw ({errorMessage:"error caught in repo level", message:error.message});
}}


module.exports={getAllDetailsFromProductsTable,
    getImagesByHextCodeAndProductCode,getConfigProperties,
    getAllDetailsFromTestimonials,getAllQueryFromToday,getAllQueryFromWeekAndMonth,
    getProductDetails, createQuery,getAllQueries,findUser,findAllEmail,submitEmailinTable}