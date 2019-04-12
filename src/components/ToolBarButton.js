/**
 * this is the toolbar button component used in the ToolBar component
 *
 * Created by Tom on 12/3/2019
 */

import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, Image } from 'react-native'

const ToolBarButton = ({ iconSource, btnId, onClick }) => {
    return (
        <TouchableOpacity
            style={styles.toolBarBtn}
            transparent
            onPress={() => onClick(btnId)}>
            <Image
                style={styles.image}
                resizeMode="stretch"
                source={iconSource} />
        </TouchableOpacity>
    )
}

const styles = {
    toolBarBtn: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
    },
    image: {
        width: 40,
        height: 40,
    },
}

// define the prop types
ToolBarButton.propTypes = {
    onClick: PropTypes.func,
    iconSource: PropTypes.number,
    btnId: PropTypes.number,
}

export default ToolBarButton
