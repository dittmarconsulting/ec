/**
 * all actions for the components
 *
 * Created by Tom on 12/3/2019
 */

import C from '../constants'

export const setToolBarBtnActive = numberVal => {
    return {
        type: C.TOOLBAR_BTN_ACTIVE,
        payload: numberVal
    }
}
