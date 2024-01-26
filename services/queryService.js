
const Joi = require('joi');
const { createQuery, getAllQueries, getAllQueryFromToday, getAllQueryFromWeekAndMonth } = require('../Repository/homeRepository');
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
    const filter = request.filter;
    try {
        if(!filter){
            responseBody.queryList = await getAllQueries(request);
            return responseBody
        }
        switch(filter.toLowerCase()){
            case 'today':
                return await getAllQueryFromToday();
            case 'week':
                return await getAllQueryFromWeekAndMonth('7d');
            case 'month':
                return await getAllQueryFromWeekAndMonth('30d');
            default:
                throw ({ errorMessage: "error caught in query service level", message: "No records found for illegal paramter of filter" })


        }
        


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