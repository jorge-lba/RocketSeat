import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, View, Text, TextInput } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

function Main ( { navigation } ) {
    
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
        <> 
            < MapView  initialRegion={ currentRegion } style={ styles.map } >
                < Marker  coordinate={ { latitude: -23.5255981, longitude: -47.4919055 } }> 
                    <Image style={ styles.avatar } source={ { uri: 'https://avatars2.githubusercontent.com/u/56704254?s=400&v=4' } } />

                    <Callout onPress={ () => {
                        navigation.navigate( 'Profile', { github_username: 'jorge-lba' } )
                    } }>
                        <View style={ styles.callout } >
                            <Text style={ styles.devName }>Jorge Alegretti</Text>
                            <Text style={ styles.devBio }>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</Text>
                            <Text style={ styles.devTechs }>Javascript, ReactJS, React Native, Node.js</Text>
                        </View>
                    </Callout>
                </ Marker>
            </ MapView>
            <View style={ styles.searchFrom }>
                <TextInput 
                    style={ styles.searchInput }
                    placeholder= 'Buscar devs por techs...'
                    placeholderTextColor= '#999'
                    autoCapitalize= 'words'
                    autoCorrect={ false }
                />
                
            </View>
        </>
    )
}

const styles = StyleSheet.create( {
    map: {
        flex: 1
    },
    
    avatar:{
        width: 56,
        height: 56,
        borderRadius: 4,
        borderWidth: 3,
        borderColor: '#454687',
    },

    callout: {
        width: 260,
    },
    devName: {
        fontWeight: 'bold',
        fontSize: 16
    },

    devBio: {
        color: '#666',
        marginTop: 5
    },

    devTechs: {
        marginTop:5
    },
} )

export default Main