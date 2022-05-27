import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../consts/colors';
import { PrimaryButton } from '../components/Button';

const OnBoardScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ height: 400 }}>
                <Image style={{
                    width: "100%",
                    resizeMode: 'contain',
                    top: -520,
                }} source={require("../../assets/images/onboardImage.png")} />
            </View>
            <View style={style.textContainer}>
                <View>
                    <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center' }}>Change Your Lifestyle!</Text>
                    <Text style={{ marginTop: 20, fontSize: 18, textAlign: 'center', color: COLORS.grey }}>Accept the challenge and become the best version of your self with us.</Text>
                </View>
                <PrimaryButton
                    onPress={() => navigation.navigate('Home')}
                    title="Get Started" />
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    textContainer: {
        flex: 1,
        paddingHorizontal: 50,
        justifyContent: 'space-between',
        paddingBottom: 40,

    },
})

export default OnBoardScreen;