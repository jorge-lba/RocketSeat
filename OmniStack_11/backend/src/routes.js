const { celebrate, Segments, Joi } = require( 'celebrate' )
const express = require( 'express' )

const OngController = require( './controlles/OngController' )
const IncidentController = require( './controlles/IncidentController' )
const ProfileController = require( './controlles/ProfileController' )
const SessionController = require( './controlles/SessionController' )

const routes = express.Router()

routes.post( '/sessions', SessionController.create  )

routes.get( '/ongs', OngController.index )

routes.post( '/ongs', celebrate({
    [ Segments.BODY ]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), OngController.create )

routes.get( '/profile', celebrate({
    [ Segments.HEADERS ]: Joi.object({
        authorization: Joi.string().required().length(8)
    }).unknown()
}), ProfileController.index )

routes.get( '/incidents', IncidentController.index )
routes.post( '/incidents', IncidentController.create )
routes.delete( '/incidents/:id', IncidentController.delete )

module.exports = routes