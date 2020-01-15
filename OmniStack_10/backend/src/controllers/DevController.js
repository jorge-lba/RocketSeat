const axios = require( 'axios' )
const Dev = require( '../models/Dev.js' )
const parseStringAsArray = require( '../utils/parseStringAsArry.js' )

module.exports ={ 

    async index ( request, response ) {

        const devs = await Dev.find()
        
        return response.json( devs )
    },

    async store ( request, response ) {

        const { github_username, techs, longitude, latitude } = request.body

        let dev = await Dev.findOne( { github_username } )

        if ( !dev ){
            
            const apiResponse = await axios.get( `https://api.github.com/users/${ github_username }` )
    
            const { login, avatar_url, bio } = apiResponse.data
            const name = apiResponse.data.name ? apiResponse.data.name : login
    
            const techsArray = parseStringAsArray( techs )
    
            const location = {
                type: 'Point',
                coordinates: [ longitude, latitude ]
            }
    
                dev = await Dev.create( {
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            } )
            
            return response.json( dev )

        } else {
            return response.json( { message: ` User ${ github_username } is already registered ` } )
        }


    }
}