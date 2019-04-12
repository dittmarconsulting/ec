/**
 * App splash screen
 *
 * Created by Tom on 12/3/2019
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Dimensions, ActivityIndicator, View, Image } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { ActionCreator } from '../actions/index'
import RestaurantDetailsView from '../bridges/RestaurantDetailsNativeView'

// get the screen width & height
const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width


class RestaurantDetails extends Component {

    _onButtonPressed(event) {
        console.log(`${event.nativeEvent.buttonName} button pressed!`)
    }

    render() {

        const { selected } = this.props

        return (
            <View style={styles.container}>
                {/* native view */}
                <RestaurantDetailsView
                    style={styles.restaurantView}
                    restaurantObj={selected}
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
        marginTop: 70,
    },
    restaurantView: {
        height: screenHeight,
        width: screenWidth,
    }
}

// define the prop types
RestaurantDetails.propTypes = {
    selected: PropTypes.object,
}

// pull in all required props into this container
const mapStateToProps = (state) => {
    return {
        selected: state.mapState.selected,
    }
}

export default connect(mapStateToProps, null)(RestaurantDetails)
