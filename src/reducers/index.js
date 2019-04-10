/**
* this file combines all reducers of the app
*
* Created by Tom on 10/3/2019
*/

import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import componentState from './componentReducer'

// add all reducers here to match the initState
export default combineReducers({
    form: formReducer,
    componentState,
})
