/**
* this file combines all actions creators
*
* Created by Tom on 12/3/2019
*/

import * as ComponentActions from './componentActions'
import * as MapActions from './mapActions'

export const ActionCreator = Object.assign({},

    // add all action creators here
    ComponentActions,
    MapActions,
)
