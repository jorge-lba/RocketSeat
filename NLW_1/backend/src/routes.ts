import express from 'express'
import Twilio from './API/twilio'

const routes = express.Router()

routes.get('/', (request, response) => {
    return response.json({
        message:'Primeiro projeto da NLW RocketSeat!'
    })
})

routes.post('/twilio', Twilio.response )

export default routes