const request = require( 'supertest' )
const app = require( '../../src/app' )
const connection = require( '../../src/database/connection' )


const data = {
    send:{
        ong:{
            name:"TDD",
            email:"contato@tdd.com",
            whatsapp:"47000000000",
            city:"Rio do Sul",
            uf:"SC"
        },
        incident: {
            title:"Caso test Validação",
            description:"Descrição do caso",
            value:120
        }
    },
    response:{
        ong_id: '',
        incident_id: Number,
    }
}

describe( 'ONG', () => {

    beforeEach( async () => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    } )

    // afterAll( async () => await connection.destroy() )

    it( 'should be able to create a new ONG', async () => {
        const response = await request( app )
            .post( '/ongs' )
            .send( data.send.ong )
        
        expect( response.body ).toHaveProperty( 'id' )
        expect( response.body.id ).toHaveLength( 8 )

        data.response.ong_id = response.body.id
    } )

} )

describe( 'ONG_GET', () => {

    it( 'must contain the same ONG that was registered', async () => {
        const response = await request( app )
            .get( '/ongs' )

        const { ...ong } = response.body[0]

        function testKeys( ongSend, ongResponse ) {
            const keysSend = Object.keys( ongSend )
            const keysResponse = Object.keys( ongResponse )

            expect( keysResponse[0] ).toBe( 'id' )

            keysSend.forEach( ( key, index ) => {
                expect( key ).toBe( keysResponse[ index + 1 ] )
            } )
        }

        function testValue( ongSend, ongResponse ){
            const valuesSend = Object.values( ongSend )
            const valuesResponse = Object.values( ongResponse )
            
            expect( typeof valuesResponse[0] ).toBe( 'string' )
            expect( valuesResponse[0] ).toHaveLength( 8 )

            valuesSend.forEach( ( value, index ) => {
                expect( value ).toBe( valuesResponse[ index + 1 ] )
            } )

        }

        testKeys( data.send.ong, ong )
        testValue( data.send.ong, ong )

    } )

} )

describe( 'ONG_LOGIN', () => {

    it( 'must return the name of the registered ONG', async () => {
        const response = await request( app )
            .post( '/sessions' )
            .send( { id: data.response.ong_id} )

        expect( response.body.name ).toBe( data.send.ong.name )
    } )

} )

describe( 'INCIDENT_CREATE', () => {

    it( 'should be able to create a new INCIDENT', async () => {
        const response = await request( app )
            .post( '/incidents' )
            .set( 'authorization', data.response.ong_id )
            .send( data.send.incident )
        
        expect( response.body ).toHaveProperty( 'id' )
        expect( typeof response.body.id ).toBe( 'number' )

        data.response.incident_id = response.body.id

    } )

} )

describe( 'INCIDENT_CREATE_MULT', () => {

    it( 'should be able to create a new INCIDENT', async () => {

        for( let i = 0; i < 20; i++ ){
            const response = await request( app )
                .post( '/incidents' )
                .set( 'authorization', data.response.ong_id )
                .send( data.send.incident )
            
            expect( response.body ).toHaveProperty( 'id' )
            expect( typeof response.body.id ).toBe( 'number' )

        }

    } )

} )

describe( 'INCIDENTS_LIST', () => {

    it( 'must return the registered all incidents', async () => {
        const respose = await request( app )
            .get( '/incidents' )

        function testKeys( ongSend, incidentSend, incidentResponse ){
            const keysOngSend = Object.keys( ongSend )
            const keysIncidentSend = Object.keys( incidentSend )
            const keysResponse = Object.keys( incidentResponse )

            const keysSend = [ 'id', ...keysIncidentSend, 'ong_id',...keysOngSend ]

            keysSend.forEach( ( key, index ) => {
                expect( key ).toBe( keysResponse[ index ] )
            } )
        }

        function testValues( ongSend, incidentSend, incidentResponse ){
            const valuesOngSend = Object.values( ongSend )
            const valuesIncidentSend = Object.values( incidentSend )
            const valuesResponse = Object.values( incidentResponse )

            const valueSSend = [ incidentResponse.id, ...valuesIncidentSend, data.response.ong_id,...valuesOngSend ]

            valueSSend.forEach( ( value, index ) => {
                expect( value ).toBe( valuesResponse[ index ] )
            } )
        }

        for( let i = 0; i < respose.body.length; i++ ){
            testKeys( data.send.ong, data.send.incident, respose.body[ i ] )
            testValues( data.send.ong, data.send.incident, respose.body[ i ] )

        }

    } )

} )

