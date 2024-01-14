
const Joi = require('joi');
const { createQuery, getAllQueries } = require('../Repository/homeRepository');
const axios = require('axios');
const { sendMobileMessage } = require('../external/external');
const { response } = require('express');
const Users = require('../database/models/user');






const queryService = async (request) => {
    const responseBody = {}
    try {

        const querySchema = getQuerySchema();
        const value = await querySchema.validateAsync(request);

        if (value) {
            const createdQuery = await createQuery(request);
            const sentQuery= await sendMobileMessage(createdQuery);
        

            return createdQuery;
        }
        else {
            return value;
        }






    }
    catch (error) {

        throw ({ errorMessage: "error caught in query service level", message: error.message });


    }

}

const getQueries = async (request)=>{

    const responseBody = {}
    try {

       
        responseBody.queryList = await getAllQueries(request);
        return responseBody






    }
    catch (error) {

        throw ({ errorMessage: "error caught in query service level", message: error.message });


    }


}









function getQuerySchema() {
    return Joi.object({
        queryID: Joi.string()

            .min(3)

            .required(),

         queryMessage: Joi.string().required(),

        queryPhone: Joi.string().regex(/^[0-9]{10}$/).messages({ 'string.pattern.base': `Phone number must have 10 digits.` }).required(),





        queryEmail: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'in'] } })
    })
}

module.exports = { queryService, getQueries }