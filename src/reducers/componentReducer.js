/**
 * the reducer for all components including the store
 *
 * Created by Tom on 12/3/2019
 */

import C from '../constants'

// define the init state
const initState = {
    storeSynced: false,
    toolBarButtonActive: 1,
}

// all reducers for the components
const componentState = (state=initState, action) => {

    switch(action.type) {

        case C.STORE_SYNCED:
            return {
                ...state,
                storeSynced: action.payload
            }

        case C.TOOLBAR_BTN_ACTIVE:
            return {
                ...state,
                toolBarButtonActive: action.payload
            }

        default: return state
    }
}

export default componentState
