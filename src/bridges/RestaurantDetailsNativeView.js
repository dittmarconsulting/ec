/**
 * This is the bridge file to the native view
 *
 * Created by Tom on 10/3/2019
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { requireNativeComponent } from 'react-native'

const RestaurantDetails = requireNativeComponent('RestaurantDetails', RestaurantDetailsView)

class RestaurantDetailsView extends Component {
    render () {
        return <RestaurantDetails {...this.props} />
    }
}

RestaurantDetailsView.propTypes = {
    url: PropTypes.string
}

export default RestaurantDetailsView
