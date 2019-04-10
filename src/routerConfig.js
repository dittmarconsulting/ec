/**
 * we use `react-native-router-flux` navigation
 * for this project, because REDUX is already inbuilt
 * https://github.com/aksonov/react-native-router-flux
 *
 * this file sets up the start inits, router and scene configuration
 *
 * FATAL EXCEPTION: OkHttp Dispatcher
 * https://github.com/facebook/react-native/issues/11016
 *
 * Created by Tom on 10/3/2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { AppState, StatusBar, View } from 'react-native'
import { Actions, Scene, ActionConst } from 'react-native-router-flux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

 // components
import RouterWithRedux from '../src/components/RouterWithRedux'
import { ActionCreator } from '../src/actions/index'

// scenes
import Splash from '../src/scenes/Splash'
import TestView from '../src/scenes/TestView'

class RouterConfig extends PureComponent {

    constructor(props) {
        super(props)
        // set local state (don't need to broadcast these values)
        this.state = {
            appState: AppState.currentState
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    // new funcs of v4
    // TODO: not sure whether we need these but I leave them here for the time being
    _onEnter() {
        // console.log('onEnter', this.props)
    }
    _onExit() {
        //console.log('onExit', val)
    }

    render() {
        return (
            <View style={styles.container}>

                {/* set the status bar style */}
                <StatusBar
                    translucent={false}
                    animated={false}
                    hidden={false}
                    backgroundColor="#462701"
                    barStyle='light-content'/>

                <RouterWithRedux>

                    {/* ---------------------------------------------------- */}
                    {/* ----------- HORIZONTAL TRANSITION SCENES ----------- */}
                    {/* ---------------------------------------------------- */}

                    <Scene key='root'>

                        {/* splash page */}
                        <Scene
                            key='splash'
                            component={Splash}
                            unmountScenes={true}
                            sceneStyle={{backgroundColor: 'transparent'}}
                            hideNavBar
                            duration={0}
                            onEnter={::this._onEnter}
                            onExit={::this._onExit}
                            initial
                        />

                        {/* splash page */}
                        <Scene
                            key='splash'
                            component={TestView}
                            unmountScenes={true}
                            sceneStyle={{backgroundColor: 'transparent'}}
                            hideNavBar
                            duration={0}
                            initial
                        />

                    </Scene>

                    {/* ---------------------------------------------------- */}
                    {/* ------------ VERTICAL TRANSITION SCENES ------------ */}
                    {/* ---------------------------------------------------- */}



                </RouterWithRedux>

            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1
    }
}

// define the prop types
RouterConfig.propTypes = {

}

// pull isLogged property into this container
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

export default connect(mapStateToProps, mapDispatchToProps)(RouterConfig)
