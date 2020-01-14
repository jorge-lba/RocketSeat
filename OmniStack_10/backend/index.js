const express = require( 'express' )

const app = express()

// Mátodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query Params: req.query ( Filtros, Ordenação, Paginação, ... )
// Route Params:
// Body:

app.get( '/users', ( request, response ) => {
    console.log( request.query )
    return response.json( { message: "Hello OmniStack!!!" } )
} )

app.listen( 3333 )
