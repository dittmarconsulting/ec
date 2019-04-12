/**
 * all actions for the map
 *
 * Created by Tom on 12/3/2019
 */

import C from '../constants'

export const setMapData = arrayData => {
    return {
        type: C.SET_MAP_DATA,
        payload: arrayData,
    }
}

export const setSelected = objectData => {
    return {
        type: C.SET_SELECTED,
        payload: objectData,
    }
}
