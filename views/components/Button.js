import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import COLORS from '../../consts/colors';

const PrimaryButton = ({ title, onPress = () => { } }) => {
    return <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View style={style.btnContainer}>
            <Text style={style.title}>{title}</Text>
        </View>
    </TouchableOpacity>
}

const style = StyleSheet.create({
    title: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: 'bold',

    },
    btnContainer: {
        backgroundColor: COLORS.primary,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export { PrimaryButton };