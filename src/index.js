/**
 * this is the entry class for the react-native app
 *
 * it wraps the Provider, which provides all child components with the
 * data of the Redux store
 *
 * Created by Tom on 12/3/2019
 */


import React, { Component } from 'react'
import { SafeAreaView, YellowBox } from 'react-native'
import { Provider } from 'react-redux'

// get the REDUX store
import store from './store'

// get the router config
import RouterConfig from './routerConfig'

// in case of an RN bug
YellowBox.ignoreWarnings([
    //'...',
])

// exposing network requests in React Native Debugger,
// TODO: comment out for production
//GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <SafeAreaView style={styles.safeArea}>
                    <RouterConfig/>
                </SafeAreaView>
            </Provider>
        )
    }
}

const styles = {
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF'
  }
}

export default App
