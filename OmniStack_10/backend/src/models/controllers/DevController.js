const axios = require( 'axios' )
const Dev = require( '../Dev.js' )

module.exports ={ 
    async store ( request, response ) {

        const { github_username, techs, longitude, latitude } = request.body

        let dev = await Dev.findOne( { github_username } )

        if ( !dev ){
            
            const apiResponse = await axios.get( `https://api.github.com/users/${ github_username }` )
    
            const { login, avatar_url, bio } = apiResponse.data
            const name = apiResponse.data.name ? apiResponse.data.name : login
    
            const techsArray = techs.split( ',' ).map( tech => tech.trim() )
    
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