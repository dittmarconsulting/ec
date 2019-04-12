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
import SearchHeader from '../components/SearchHeader'

// get the screen width & height
const screenHeight = Dimensions.get('window').height


class Map extends Component {

    render() {
        return (
            <View style={styles.container}>
                <SearchHeader/>



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

}

export default Map
