import express, { request, response } from 'express'
import Twilio from './API/twilio'

const routes = express.Router()
const users = [
    'Jorge',
    'Karen',
    'Diego',
    'Ana',
    'Pedro',
    'Carlos'
]

routes.get('/', (request, response) => {
    return response.json({message: 'Hello Wolrd!'})
})

routes.post('/twilio', Twilio.response )


export default routes