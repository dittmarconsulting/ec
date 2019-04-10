/**
 * this is the entry class for the react-native app
 *
 * it wraps the Provider, which provides all child components with the
 * data of the Redux store
 *
 * Created by Tom on 10/3/2019
 */


import React, { Component } from 'react'
import { Provider } from 'react-redux'

// get the REDUX store
import store from './store'

// get the push notification class
// import PushService from './pushNotificationConfig'

// init the PN service as global class
// PushService.configure()

// get the router config
import RouterConfig from './routerConfig'


console.ignoredYellowBox = [
    // 'Warning: BackAndroid',
]

// exposing network requests in React Native Debugger,
// TODO: comment out for production
//GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest


class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <RouterConfig/>
            </Provider>
        )
    }
}

export default App
