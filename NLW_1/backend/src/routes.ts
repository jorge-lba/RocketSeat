import express, { request, response } from 'express'
import Twilio from './API/twilio'

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const routes = express.Router()

const pointsController = new PointsController()
const itemsController = new ItemsController()

// indes, show, dreate, update, delete
routes.get('/items', itemsController.index )

routes.post('/points', pointsController.create )
routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show )

routes.post('/twilio', Twilio.response )


export default routes