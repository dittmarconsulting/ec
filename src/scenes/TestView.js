/**
 * App splash screen
 *
 * Created by Tom on 10/3/2019
 */

import React, { Component } from 'react'
import { Dimensions, ActivityIndicator, View, Image } from 'react-native'

import RestaurantDetailsView from '../bridges/RestaurantDetailsNativeView'

// get the screen width & height
const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

class TestView extends Component {

    _onButtonPressed(event) {
        console.log(`${event.nativeEvent.buttonName} button pressed!`)
    }

    render() {
        return (
            <View style={styles.container}>

                <RestaurantDetailsView
                    style={styles.restaurantView}
                    url="https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg"
                    onButtonPressed={::this._onButtonPressed}/>

            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CCC',
    },
    restaurantView: {
        height: screenHeight,
        width: screenWidth,
        //marginTop: 60,
    }
}


export default TestView
