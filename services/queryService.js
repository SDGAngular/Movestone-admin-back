
const Joi = require('joi');
const { createQuery } = require('../Repository/homeRepository');
const axios = require('axios');
const { sendMobileMessage } = require('../external/external');
const { response } = require('express');



const RECIPIENT_WAID="917003420196";
const VERSION="v18.0";
const PHONE_NUMBER_ID="199439156589717";
const ACCESS_TOKEN="EAAKdMrZCZB6ZCMBO0jb7Uf4bwBy1soatzhntFDFZBqpXAvduOETwd61aIGHgxYA4LyunXZAFUNcgDZCoa6rLhQDOwaZCjjFIukbF9JiPPXbDN9H1wVrWaYfSghCK8MfQtXvMFyz2ZCAonXE8qWZBanhbPpRwBEwEpVpciR42hHNDldm07xjRqw2slSQoTdppxHSlNDDgXKBmwvOLOWL1G8rJ08d3V8oOIHuwlVC1v";


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

module.exports = { queryService }