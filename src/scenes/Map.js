/**
 * This page displays the map
 *
 * Created by Tom on 12/3/2019
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Platform, Dimensions, ActivityIndicator, View, Image } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import MapboxGL from '@mapbox/react-native-mapbox-gl'

import { ActionCreator } from '../actions/index'
import ToolBar from '../components/ToolBar'
import SearchHeader from '../components/SearchHeader'
import markerIcon from '../assets/icons/marker.png'
import pinActiveIcon from '../assets/icons/pin-active.png'
import config from '../config.json'


const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

// define the pin style for the map
const pinStyle = MapboxGL.StyleSheet.create({
    icon: {
        iconImage: '{icon}',
        iconSize: MapboxGL.StyleSheet.source(
            [
                ['pin-active', 0.3]
            ],
            'icon',
            MapboxGL.InterpolationMode.Categorical,
        ),
    },
})

class Map extends Component {

    componentDidMount() {
        MapboxGL.setAccessToken(config.mapBoxKey)
    }

    _onPinPressed(event) {
        const { setSelected } = this.props
        // save the selected pin data
        setSelected(event.nativeEvent.payload.properties)
        // go to detail view
        Actions.detail({})
    }

    render() {

        const { mapData } = this.props

        const collection = {
            type: 'FeatureCollection',
            features: mapData.features
        }

        return (
            <View style={styles.container}>
                <SearchHeader/>
                <MapboxGL.MapView
                    showUserLocation={true}
                    zoomLevel={11}
                    userTrackingMode={ MapboxGL.UserTrackingModes.Follow }
                    styleURL={ MapboxGL.StyleURL.Street }
                    style={styles.mapContainer}
                    centerCoordinate={[144.970225, -37.838176]}>
                    <MapboxGL.ShapeSource
                        id="pinSource"
                        shape={collection}
                        onPress={::this._onPinPressed}
                        images={{
                            'pin-active': pinActiveIcon,
                            'assets': ['pin-active']
                        }}>
                        <MapboxGL.SymbolLayer
                            id="icon"
                            style={pinStyle.icon} />
                    </MapboxGL.ShapeSource>
                </MapboxGL.MapView>
                <ToolBar/>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    mapContainer: {
        height: screenHeight - 200,
        width: screenWidth,
    },
}

// define the prop types
Map.propTypes = {
    setSelected: PropTypes.func.isRequired,
    mapData: PropTypes.object,
}

// pull in all required props into this container
const mapStateToProps = (state) => {
    return {
        mapData: state.mapState.mapData,
    }
}

// pull all required action creators into this container
const mapDispatchToProps = (dispatch) => {
    const action = bindActionCreators(ActionCreator, dispatch)
    return {
        setSelected: action.setSelected,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
