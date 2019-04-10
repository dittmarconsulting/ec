/**
 * `react-native-router-flux` doesn't record the current scene in the REDUX
 * store by default
 * this is a wrapper that connects the `Router` with the REDUX store (meta props)
 *
 *
 * Created by Tom on 10/3/2019
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Router, Reducer, Overlay, Modal, Stack, Drawer } from 'react-native-router-flux'
import { EventRegister } from 'react-native-event-listeners'

import C from '../constants'

class RouterWithRedux extends Component {

    _reducerCreate (params) {
        const defaultReducer = new Reducer(params)
        return (state, action) => {
            return defaultReducer(state, action)
        }
    }

    _onBackAndroidHandlerClick() {
        // emit the event that the Android backbutton has been pressed
        EventRegister.emit(C.BACK_ANDROID, 'backAndroidClick')
        // backAndroidHandler "return true" is needed, so BackHandler knows that
        // you are overriding the default action and that it should not close the app
        return true
    }

    /*
        if we used a drawer
        <Drawer
            hideNavBar
            key="drawer"
            onExit={() => {}}
            onEnter={() => {}}
            contentComponent={DrawerContent}
            drawerWidth={300}>
            {this.props.children}
        </Drawer>

    */

    render () {
        return (
            <Router
                createReducer={::this._reducerCreate}
                backAndroidHandler={::this._onBackAndroidHandlerClick}>
                {/* this is the root wrapper scene for all scenes */}
                <Overlay key="overlay">
                    <Modal>
                        <Stack
                            key="root"
                            titleStyle={{ alignSelf: 'center' }}
                            hideNavBar>
                            {this.props.children}
                        </Stack>
                    </Modal>
                </Overlay>
            </Router>
        )
    }
}

// define the prop types
RouterWithRedux.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ])
}

export default RouterWithRedux
