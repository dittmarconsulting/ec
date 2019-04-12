/**
 * the reducer for all components including the store
 *
 * Created by Tom on 12/3/2019
 */

import C from '../constants'
import mapData from '../data/mapData'

// define the init state
const initState = {
    mapData: mapData,
    selected: {},
}

// all reducers for the map
const mapState = (state=initState, action) => {

    switch(action.type) {

        case C.SET_MAP_DATA:
            return {
                ...state,
                mapData: action.payload
            }

        case C.SET_SELECTED:
            return {
                ...state,
                selected: action.payload
            }

        default: return state
    }
}

export default mapState
