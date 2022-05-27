import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import COLORS from '../../consts/colors';

const PlansScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
            <View>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: COLORS.primary, paddingLeft: 22 }}>Workout Plans</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('Beginners')}>
                    <View style={style.plansCard}>
                        <Image source={require('../../assets/images/beginner.jpg')} style={{ height: 80, width: 80 }} />
                        <View style={{
                            height: 100,
                            marginLeft: 10,
                            paddingVertical: 20,
                            flex: 1,
                        }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Beginners Plan</Text>
                            <Text style={{ fontSize: 19, color: COLORS.grey }}>4 Weeks</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Beginner</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('Building')}>
                    <View style={style.plansCard}>
                        <Image source={require('../../assets/images/building.jpg')} style={{ height: 80, width: 80 }} />
                        <View style={{
                            height: 100,
                            marginLeft: 10,
                            paddingVertical: 20,
                            flex: 1,
                        }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Weight Gaining Plan</Text>
                            <Text style={{ fontSize: 19, color: COLORS.grey }}>6 Weeks</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Intermediate/Advance</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('Loss')}>
                    <View style={style.plansCard}>
                        <Image source={require('../../assets/images/loss.jpg')} style={{ height: 80, width: 80 }} />
                        <View style={{
                            height: 100,
                            marginLeft: 10,
                            paddingVertical: 20,
                            flex: 1,
                        }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Weight loss Plan</Text>
                            <Text style={{ fontSize: 19, color: COLORS.grey }}>4 Weeks</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Intermediate/Advance</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('Hiit')}>
                    <View style={style.plansCard}>
                        <Image source={require('../../assets/images/hiit.jpg')} style={{ height: 80, width: 80 }} />
                        <View style={{
                            height: 100,
                            marginLeft: 10,
                            paddingVertical: 20,
                            flex: 1,
                        }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 17 }}>HIIT Plan</Text>
                            <Text style={{ fontSize: 19, color: COLORS.grey }}>4 Weeks</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Intermediate/Advance</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('GainMealPlan')}>
                    <View style={style.plansCard}>
                        <Image source={require('../../assets/images/build.jpg')} style={{ height: 80, width: 80 }} />
                        <View style={{
                            height: 100,
                            marginLeft: 10,
                            paddingVertical: 20,
                            flex: 1,
                        }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Muscle Building Meal Plan</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('MaintainMealPlan')}>
                    <View style={style.plansCard}>
                        <Image source={require('../../assets/images/maintain.jpg')} style={{ height: 80, width: 80 }} />
                        <View style={{
                            height: 100,
                            marginLeft: 10,
                            paddingVertical: 20,
                            flex: 1,
                        }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Muscle Maintaining Meal Plan</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('LossMealPlan')}>
                    <View style={style.plansCard}>
                        <Image source={require('../../assets/images/fat-loss.jpg')} style={{ height: 80, width: 80 }} />
                        <View style={{
                            height: 100,
                            marginLeft: 10,
                            paddingVertical: 20,
                            flex: 1,
                        }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Fat Loss Meal Plan</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    plansCard: {
        height: 100,
        elevation: 15,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
})

export default PlansScreen;