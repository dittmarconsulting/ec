/**
 * this file contains all redux-saga watchers & workers (like separate threads)
 * - watchers watch for dispatched actions
 * - workers invoke another actions in response to the processed actions
 *
 * NOTE: Saga's use the new ES6 generator functions function* ()
 * NOTE: Arrow-function can not be used as generators as the yield keyword
 * may not work in an arrow function's body
 *
 * Created by Tom on 10/3/2019
 */

import { all } from 'redux-saga/effects'

// import sagas
// import * as ComponentSagas from './sagas/componentSagas'


/* -----------------------------------------------------------------------------
    ROOT SAGA
----------------------------------------------------------------------------- */

// this root saga groups all other watcher sagas together
export default function* rootSaga() {
    yield all([

    ])
}
