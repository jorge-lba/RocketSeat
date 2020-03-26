const express = require( 'express' )

const OngController = require( './controlles/OngController' )
const IncidentController = require( './controlles/IncidentController' )

const routes = express.Router()

routes.get( '/ongs', OngController.index )
routes.post( '/ongs', OngController.create )

routes.get( '/incidents', IncidentController.index )
routes.post( '/incidents', IncidentController.create )
routes.delete( '/incidents/:id', IncidentController.delete )

module.exports = routes