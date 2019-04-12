/**
 * this file configures the redux store setup
 *
 * the function configureStore is called from main.js to pass the `history`
 *
 * Created by Tom on 12/3/2019
 */

import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
//import createLogger from 'redux-logger'

import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-reactnativeasyncstorage'

import rootReducer from './reducers/index'
import { ActionCreator } from './actions/index'
import { storageKey } from './config'
import rootSaga from './rootSaga'

import C from './constants'

// create the logger middleware
//const loggerMiddleWare = createLogger()

// create middleware for the sagas
const sagaMiddleware = createSagaMiddleware()

// link the combineReducer to the sync storage
const reducer = storage.reducer(rootReducer)

// create the engine with the key from the config file
const engine = createEngine(storageKey)

// create the engine middleware
const engineMiddleware = storage.createMiddleware(engine)

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
    ActionCreator
})

// combine middleware
const enhancer = composeEnhancers(
    applyMiddleware(
        //loggerMiddleWare,
        engineMiddleware,
        sagaMiddleware
    )
)

// create the redux store (passing the an empty object and init state)
const store = createStore(reducer, {}, enhancer)

// run the root saga
sagaMiddleware.run(rootSaga)

// ONLY FOR DEBUGGING - ACCESS STORE IN CONSOLE window.store.dispatch()
// NOTE: change the execution environment in the Chrome console from the default <top frame> to <debuggerWorker.js>
//window.reduxStore = store

// load the saved store and update the store with the saved version
const load = storage.createLoader(engine)
load(store)
    .then(() => {

        // set the flag 'storeSynced' to true
        store.dispatch({
            type: C.STORE_SYNCED,
            payload: true
        })
    })
    .catch(() => {
        console.log('Failed to load previous state')
    })

export default store
