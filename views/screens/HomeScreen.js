import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import COLORS from '../../consts/colors';
import Carousel from '../components/Carousel';
import { carouselData } from '../../data/Data';

const HomeScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View>
                <Carousel data={carouselData} />
            </View>

            <ScrollView>
                <View style={style.header}>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 28 }}>Start,</Text>
                            <Text style={{ fontSize: 28, fontWeight: 'bold', marginLeft: 5 }}>Today's Work</Text>
                        </View>
                        <Text style={{ marginTop: 5, fontSize: 22, color: COLORS.grey }}>Reshape your dream healthy lifestyle</Text>
                    </View>
                </View>

                <View>
                    <View style={style.optionsListContainer}>

                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('GymScreen')}>
                            <View style={{
                                backgroundColor: COLORS.primary,
                                ...style.optionBtn
                            }}>
                                <View style={style.optionBtnImgCon}>
                                    <Image source={require('../../assets/images/gymIcon.png')} style={{ height: 30, width: 30, resizeMode: 'cover' }} />
                                </View>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10, color: COLORS.white }}>Gym</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('PoolScreen')}>
                            <View style={{
                                backgroundColor: COLORS.primary,
                                ...style.optionBtn
                            }}>
                                <View style={style.optionBtnImgCon}>
                                    <Image source={require('../../assets/images/poolIcon.png')} style={{ height: 30, width: 30, resizeMode: 'cover' }} />
                                </View>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10, color: COLORS.white }}>Pool</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={style.bannerContainer}>
                    <ImageBackground source={require('../../assets/images/sports.jpg')} resizeMode='cover' style={style.bannerImg}>

                        <Text style={style.bannerText}>Browse The Latest Sports News</Text>

                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('News')}>
                            <View style={{
                                backgroundColor: COLORS.white,
                                ...style.newsBtn
                            }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>Browse</Text>
                            </View>
                        </TouchableOpacity>

                    </ImageBackground>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    optionsListContainer: {
        paddingVertical: 30,
        alignItems: 'center',
        paddingHorizontal: 40,
        flexDirection: 'row',
    },
    optionBtn: {
        height: 65,
        width: 150,
        marginLeft: 7,
        borderRadius: 30,
        alignItems: 'center',
        paddingHorizontal: 5,
        flexDirection: 'row',
    },
    optionBtnImgCon: {
        height: 35,
        width: 35,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 33,
    },
    bannerContainer: {
        height: 170,
        width: 320,
        margin: 10,
        marginBottom: 50,
        alignSelf: 'center',
        backgroundColor: COLORS.primary,
    },
    bannerText: {
        alignContent: 'center',
        color: COLORS.white,
        fontSize: 25,
        marginLeft: 25,
        marginTop: 10,
        fontWeight: 'bold',

    },
    newsBtn: {
        height: 50,
        width: 100,
        marginLeft: 110,
        marginTop: 20,
        borderRadius: 30,
        alignItems: 'center',
        paddingHorizontal: 5,
        flexDirection: 'row',
    },
    bannerImg: {
        flex: 1,
        justifyContent: "center",

    }
})

export default HomeScreen;
