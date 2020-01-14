const express = require( 'express' )

const app = express()

app.use( express.json() ) // Configurando express para atender requisições que tem o corpo no formato json

// Mátodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query Params: request.query ( Filtros, Ordenação, Paginação, ... )
// Route Params: request.params ( Identificar um recurso na alteração ou remoção )
// Body: request.body ( Dados para criação ou alteração de um registro )

// MongoDB ( Não-Relacional )

app.post( '/users', ( request, response ) => {
    console.log( request.body )
    return response.json( { message: "Hello OmniStack!!!" } )
} )

app.listen( 3333 )
