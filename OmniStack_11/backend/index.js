const express = require( 'express' )

const app = express()

app.use( express.json() )

app.get( '/', ( request, response ) => {
    return response.json( {
        evento: 'Semana OmniStack 11.0',
        aluno: 'Jorge Alegretti'
    } )
} )

app.listen( 3333 )