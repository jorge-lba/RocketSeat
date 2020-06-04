import express, { request, response } from 'express'
import Twilio from './API/twilio'
import knex from './database/connection'

const routes = express.Router()
const users = [
    'Jorge',
    'Karen',
    'Diego',
    'Ana',
    'Pedro',
    'Carlos'
]

routes.get('/items', async (request, response) => {
    const items = await knex('items').select('*')
    const serializedItems = items.map(item => {
        return{
            title: item.title,
            image_url: `${process.env.URL}/uploads/${item.image}`
        }
    })

    return response.json(serializedItems)
})

routes.post('/twilio', Twilio.response )


export default routes