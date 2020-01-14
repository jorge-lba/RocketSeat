const express = require( 'express' )

const app = express()

// Mátodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query Params: request.query ( Filtros, Ordenação, Paginação, ... )
// Route Params: request.params ( Identificar um recurso na alteração ou remoção )
// Body:

app.delete( '/users/:id', ( request, response ) => {
    console.log( request.params )
    return response.json( { message: "Hello OmniStack!!!" } )
} )

app.listen( 3333 )
