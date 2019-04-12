/**
 * this is the bottom tool bar
 *
 * Created by Tom on 12/3/2019
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { ActionCreator } from '../actions/index'
import ToolBarButton from '../components/ToolBarButton'


class ToolBar extends Component {

    _onClickBtn(btnId) {
        console.log('Button ID clicked', btnId)
        const { setToolBarBtnActive } = this.props
        setToolBarBtnActive(btnId)
    }

    render() {

        const { toolBarButtonActive } = this.props

        let searchIcon = require('../assets/icons/map.png')
        let bookmarkIcon = require('../assets/icons/detail.png')
        let employersIcon = require('../assets/icons/favorite.png')
        let profileIcon = require('../assets/icons/redeem.png')

        switch(toolBarButtonActive) {
            case 1: searchIcon = require('../assets/icons/map-active.png')
                break
            case 2: bookmarkIcon = require('../assets/icons/detail-active.png')
                break
            case 3: employersIcon = require('../assets/icons/favorite-active.png')
                break
            case 4: profileIcon = require('../assets/icons/redeem-active.png')
                break
        }

        return (
            <View style={styles.container}>

                {/* search button */}
                <ToolBarButton
                    btnId={1}
                    iconSource={searchIcon}
                    onClick={::this._onClickBtn}
                />
                {/* bookmark button */}
                <ToolBarButton
                    btnId={2}
                    iconSource={bookmarkIcon}
                    onClick={::this._onClickBtn}
                />
                {/* employers button */}
                <ToolBarButton
                    btnId={3}
                    iconSource={employersIcon}
                    onClick={::this._onClickBtn}
                />
                {/* profile button */}
                <ToolBarButton
                    btnId={4}
                    iconSource={profileIcon}
                    onClick={::this._onClickBtn}
                />
            </View>
        )
    }
}

const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#FFF',
        borderTopColor: '#e0e0e0',
        borderTopWidth: 1
    }
}

// define the prop types
ToolBar.propTypes = {
    toolBarButtonActive: PropTypes.number,
    setToolBarBtnActive: PropTypes.func,
}

// pull in all required props into this container
const mapStateToProps = (state) => {
    return {
        toolBarButtonActive: state.componentState.toolBarButtonActive
    }
}

// pull all required action creators into this container
const mapDispatchToProps = (dispatch) => {
    const action = bindActionCreators(ActionCreator, dispatch)
    return {
        setToolBarBtnActive: action.setToolBarBtnActive,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar)
