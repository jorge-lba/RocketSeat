const { Router } = require( 'express' )
const axios = require( 'axios' )
const Dev = require( './models/Dev.js' )

const routes = Router()

routes.post( '/devs', async ( request, response ) => {

    const { github_username, techs, longitude, latitude } = request.body

    const apiResponse = await axios.get( `https://api.github.com/users/${ github_username }` )

    const { login, avatar_url, bio } = apiResponse.data
    const name = apiResponse.data.name ? apiResponse.data.name : login

    const techsArray = techs.split( ',' ).map( tech => tech.trim() )

    const location = {
        type: 'Point',
        coordinates: [ longitude, latitude ]
    }

    const dev = await Dev.create( {
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
    } )

    return response.json( dev )
} )

module.exports = routes