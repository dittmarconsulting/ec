/**
* this file combines all reducers of the app
*
* Created by Tom on xx/xx/xx
*/

import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import componentState from './componentReducer'

// add all reducers here to match the initState
export default combineReducers({
    form: formReducer,
    componentState,
})
