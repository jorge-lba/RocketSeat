import React, { useEffect, useState } from 'react'
import { StyleSheet, Image } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

function Main ( ) {
    
    const [ currentRegion, setCurrentRegion ] = useState( null )

    useEffect( ( ) =>{
        
        async function loadInitialPosition() {
        
            const { granted } = await requestPermissionsAsync()

            if ( granted ) {
                const { coords } = await getCurrentPositionAsync( {
                    enableHighAccuracy: true,
                } )

                const { latitude, longitude } = coords

                setCurrentRegion( {
                    latitude,
                    longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                } )
            }
            
        }

        loadInitialPosition()
    }, [ ] )

    if( !currentRegion ) {
        return null
    }

    return (
        < MapView  initialRegion={ currentRegion } style={ styles.map } >
            < Marker  coordinate={ { latitude: -23.5255981, longitude: -47.4919055 } }> 
                <Image style={ styles.avatar } source={ { uri: 'https://avatars2.githubusercontent.com/u/56704254?s=400&v=4' } } />
            </ Marker>
        </ MapView>
    )
}

const styles = StyleSheet.create( {
    map: {
        flex: 1
    },
    
    avatar:{
        width: 34,
        height: 34,
        borderRadius: 4,
        borderWidth: 3,
        borderColor: '#454687',
    }
} )

export default Main