/**
 * App splash screen
 *
 * Created by Tom on xx/xx/xx
 */

import React, { Component } from 'react'
import { Dimensions, ActivityIndicator, View, Image } from 'react-native'

// get the screen width & height
const screenHeight = Dimensions.get('window').height

// logo + margin + spinner = 182 (91)
const topDistance = (screenHeight / 2) - 91

class Splash extends Component {

    render() {
        return (
            <View style={styles.container}>

                {/* background image */}
                <Image
                    resizeMode="cover"
                    source={require('../assets/img/splash.png')} />

                {/* logo & spinner container */}
                <View style={styles.logoSpinnerContainer}>

                    {/* logo */}
                    <Image
                        style={styles.logo}
                        resizeMode="cover"
                        source={require('../assets/img/logo_big.png')} />

                    {/* spinner */}
                    <ActivityIndicator
                        size="large"
                        color="#FFF" />

                </View>

            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7941D',
    },
    logoSpinnerContainer: {
        position: 'absolute',
        top: topDistance,
    },
    logo: {
        marginBottom: 20,
    }
}


export default Splash
