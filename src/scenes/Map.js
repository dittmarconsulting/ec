/**
 * This page displays the map
 *
 * Created by Tom on 12/3/2019
 */

import React, { Component } from 'react'
import { Dimensions, ActivityIndicator, View, Image } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { ActionCreator } from '../actions/index'
import ToolBar from '../components/ToolBar'

// get the screen width & height
const screenHeight = Dimensions.get('window').height


class Map extends Component {

    render() {
        return (
            <View style={styles.container}>

                {/* background image */}
                <View style={styles.headerContainer}>
                    <View style={styles.leftContainer}>

                    </View>
                    <View style={styles.centerContainer}>
                        <Image
                            style={styles.centerImage}
                            resizeMode="contain"
                            source={require('../assets/img/eatclub-small-v3.png')} />
                    </View>
                    <View style={styles.rightContainer}>

                    </View>
                </View>



                <ToolBar/>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F7941D',
    },
    headerContainer: {
        flexDirection: 'row',
        height: 64,
        backgroundColor: '#CCC',
    },
    leftContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerImage: {
        width: 100,
    },
    rightContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    }
}

export default Map
