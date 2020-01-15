const { Router } = require( 'express' )
const DevController = require( './models/controllers/DevController.js' )

const routes = Router()

routes.post( '/devs', DevController.store )

module.exports = routes