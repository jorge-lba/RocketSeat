const { Router } = require( 'express' )
const axios = require( 'axios' )

const routes = Router()

routes.post( '/devs', ( request, response ) => {

    const { github_username } = request.body

    return response.json( { message: "Hello OmniStack!!!" } )
} )

module.exports = routes