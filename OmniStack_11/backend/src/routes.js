const { celebrate, Segments, Joi } = require( 'celebrate' )
const express = require( 'express' )

const OngController = require( './controlles/OngController' )
const IncidentController = require( './controlles/IncidentController' )
const ProfileController = require( './controlles/ProfileController' )
const SessionController = require( './controlles/SessionController' )

const routes = express.Router()

routes.post( '/sessions', SessionController.create  )

routes.get( '/ongs', OngController.index )
routes.post( '/ongs', OngController.create )

routes.get( '/profile', ProfileController.index )

routes.get( '/incidents', IncidentController.index )
routes.post( '/incidents', IncidentController.create )
routes.delete( '/incidents/:id', IncidentController.delete )

module.exports = routes