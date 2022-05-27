import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';

const BeginnersPlanScreen = () => {
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 350,
                    }}>
                    <Image
                        source={require('../../assets/images/beginner.jpg')}
                        style={{
                            height: 400,
                            width: 400,
                            resizeMode: 'cover',
                            shadowOpacity: 1,
                        }}
                    />
                </View>
                <View style={style.planDetailsContainer}>
                    <View
                        style={{
                            alignItems: 'center',
                        }}>
                        <Text
                            style={{
                                fontSize: 30,
                                fontWeight: 'bold',
                                color: COLORS.white,
                                paddingBottom: 5,
                            }}>
                            Beginners Plan
                        </Text>
                        <View style={style.iconContainer}>
                            <Icon name='timer' color={COLORS.primary} size={25} style={{ paddingLeft: 9 }} />
                            <Text style={{ color: COLORS.grey, fontSize: 16, paddingRight: 12, paddingLeft: 5 }}>4 Weeks</Text>
                        </View>
                    </View>
                    <Text style={style.detailsText}>
                        New to weight training? This workout is for you.
                        Designed to hit each muscle group with the
                        big compound exercises once per week. Each
                        workout day has 3-5 exercises.
                    </Text>

                    <View style={{ marginTop: 40 }}>
                        <Text style={style.dayAndMuscle}>Monday - Chest & Triceps</Text>
                        <Text style={style.muscle}>Chest</Text>
                        <Text style={style.workout}>Dumbbell Bench Press  4 Sets Of 12, 10, 10, 10 Reps</Text>
                        <Text style={style.workout}>Incline Bench Press  2 Sets Of 10 Reps</Text>
                        <Text style={style.muscle}>Triceps</Text>
                        <Text style={style.workout}>Tricep Dip  3 Sets Till Failure</Text>
                        <Text style={style.workout}>Lying Tricep Extension  3 Sets Of 10 Reps</Text>
                    </View>

                    <View style={{ marginTop: 40 }}>
                        <Text style={style.dayAndMuscle}>Wednesday - Back & Biceps</Text>
                        <Text style={style.muscle}>Back</Text>
                        <Text style={style.workout}>Wide Grip Pull Up  4 Sets Of 10 Reps</Text>
                        <Text style={style.workout}> Seated Row  3 Sets Of 12 Reps</Text>
                        <Text style={style.workout}>One Arm Dumbbell Row  3 Sets Of 10 Reps</Text>
                        <Text style={style.muscle}>Biceps</Text>
                        <Text style={style.workout}>Standing Barbell Curl  3 Sets Of  8 - 10 Reps</Text>
                    </View>

                    <View style={{ marginTop: 40 }}>
                        <Text style={style.dayAndMuscle}>Friday - Legs & Shoulders</Text>
                        <Text style={style.muscle}>Legs</Text>
                        <Text style={style.workout}>45 Degree Leg Press  4 Sets Of  12, 10, 10, 10 Reps</Text>
                        <Text style={style.workout}>Leg Extension  3 sets Of 12 Reps</Text>
                        <Text style={style.workout}>Leg Curl  3 Sets Of 12 Reps</Text>
                        <Text style={style.muscle}>Shoulders</Text>
                        <Text style={style.workout}>Military Press  4 Sets Of 8 - 10 Reps</Text>
                        <Text style={style.workout}>Dumbbell Lateral Raise  3 Sets Of 10 Reps</Text>
                    </View>

                    <View style={{ marginTop: 40 }}>
                        <Text style={style.dayAndMuscle}>Saturday & Sunday - Rest  </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

const style = StyleSheet.create({
    planDetailsContainer: {
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 60,
        backgroundColor: COLORS.primary,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        elevation: 15,
    },
    iconContainer: {
        backgroundColor: COLORS.white,
        height: 40,
        width: 110,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    detailsText: {
        marginTop: 10,
        lineHeight: 22,
        fontSize: 16,
        color: COLORS.white,
    },
    dayAndMuscle: {
        color: COLORS.dark,
        fontWeight: 'bold',
        fontSize: 26,
        textTransform: 'uppercase',
    },
    muscle: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 5,
    },
    workout: {
        marginTop: 5,
        marginBottom: 5,
        fontSize: 15,
    },
})

export default BeginnersPlanScreen;