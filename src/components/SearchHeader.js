/**
 * this is the bottom tool bar
 *
 * Created by Tom on 12/3/2019
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View, Image } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { ActionCreator } from '../actions/index'
import ToolBarButton from '../components/ToolBarButton'


class SearchHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.leftContainer}
                    transparent
                    onPress={() => {}}>
                    <Image
                        style={styles.icon}
                        resizeMode="stretch"
                        source={require('../assets/icons/account.png')} />
                </TouchableOpacity>
                <View style={styles.centerContainer}>
                    <Image
                        style={styles.centerImage}
                        resizeMode="contain"
                        source={require('../assets/img/eatclub-small-v3.png')} />
                </View>
                <TouchableOpacity
                    style={styles.rightContainer}
                    transparent
                    onPress={() => {}}>
                    <Image
                        style={styles.icon}
                        resizeMode="stretch"
                        source={require('../assets/icons/filter.png')} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        backgroundColor: '#FFF',
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1
    },
    leftContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 30,
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
        alignItems: 'flex-end',
        paddingRight: 30,
    },
    icon: {
        width: 40,
        height: 40,
    },
}

// define the prop types
SearchHeader.propTypes = {

}

// pull in all required props into this container
const mapStateToProps = (state) => {
    return {

    }
}

// pull all required action creators into this container
const mapDispatchToProps = (dispatch) => {
    const action = bindActionCreators(ActionCreator, dispatch)
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchHeader)
