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

routes.get('/users', (request, response) => {
    const search = String(request.query.search)
    const filteredUsers = search 
        ? users.filter((user:string) => user.includes(search))
        : users

    return response.json(filteredUsers)
})

routes.get('/users/:id', (request, response) => {
    const id:number = Number(request.params.id)
    const user = users[id]

    return response.json(user)
})

routes.post('/users', (request, response) => {
    const user = request.body

    return response.json(user)
})

routes.post('/twilio', Twilio.response )


export default routes