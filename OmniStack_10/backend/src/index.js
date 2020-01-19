const express = require( 'express' )
const mongoose = require( 'mongoose' )
const routes = require( './routes.js' )
const cors = require( 'cors' )
const http = require( 'http' )
const { setWebSocket } = require( './websocket' )

const app = express()
const server = http.Server( app )

setWebSocket( server )

mongoose.connect( 'mongodb+srv://jorgeomnistack:OmNiSTACK10@reacketseat-glpu1.mongodb.net/week10?retryWrites=true&w=majority', {

    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true

} )

app.use( cors( ) )
app.use( express.json() )
app.use( routes )


server.listen( 3333 )
