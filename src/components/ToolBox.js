/**
* This component displays the date of the news items
*
* Created by Tom on 07/04/2019
*/

import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-native'

const ToolBox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>

            </View>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.centerImage}
                    resizeMode="contain"
                    source={require('../assets/img/eatclub-small-v3.png')} />
            </View>
            <View style={styles.imageContainer}>

        </View>
    )
}

const styles = {
    container: {
        flexDirection: 'row',
        height: 64,
        backgroundColor: '#CCC',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
}


export default ToolBox
