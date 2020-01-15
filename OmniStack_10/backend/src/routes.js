const { Router } = require( 'express' )
const axios = require( 'axios' )

const routes = Router()

routes.post( '/devs', async ( request, response ) => {

    const { github_username, techs } = request.body

    const apiResponse = await axios.get( `https://api.github.com/users/${ github_username }` )

    const { login, avatar_url, bio } = apiResponse.data
    const name = apiResponse.data.name ? apiResponse.data.name : login

    const techsArray = techs.split( ',' ).map( tech => tech.trim() )

    console.log( techsArray )

    return response.json( { message: "Hello OmniStack!!!" } )
} )

module.exports = routes