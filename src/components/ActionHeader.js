/**
 * Action header component
 *
 * Created by Tom on 12/04/2019
 */

import React, { Component } from 'react'
import { Platform, Animated, View, TouchableOpacity, Image, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'


class ActionHeader extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.headerWrapper}>

                    {/* left side */}
                    <TouchableOpacity
                        style={styles.headerLeft}
                        transparent
                        onPress={Actions.pop}>
                        <Image
                            style={styles.leftImage}
                            resizeMode="contain"
                            source={require('../assets/icons/back-chevron.png')} />
                            <Text style={styles.headerLeftText}>
                                Back
                            </Text>
                    </TouchableOpacity>

                    {/* middle */}
                    <View style={styles.headerCenter}>
                        <Image
                            style={styles.centerImage}
                            resizeMode="contain"
                            source={require('../assets/img/eatclub-small-v3.png')} />
                    </View>

                    {/* right */}
                    <View style={styles.headerRight}></View>

                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    headerWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 64,
        backgroundColor: '#FFF',
        elevation   : 5,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowRadius: 10,
        shadowOpacity: 1,
    },
    headerLeft: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftImage: {
        marginLeft: 10,
        marginRight: 8,
    },
    headerLeftText: {
        fontSize: 16,
        lineHeight: 19,
        fontWeight: '400',
        color: '#a5a5a5',
        backgroundColor: 'transparent',
    },
    headerCenter: {
        flex: 1,
        height: 64,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerImage: {
        width: 100
    },
    headerRight: {
        flex: 1,
        height: 64,
    },
}

export default ActionHeader
