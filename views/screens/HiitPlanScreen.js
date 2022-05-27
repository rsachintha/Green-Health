import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';

const HiitPlanScreen = () => {
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
                        source={require('../../assets/images/hiit.jpg')}
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
                            Weight Gaining Plan
                        </Text>
                        <View style={style.iconContainer}>
                            <Icon name='timer' color={COLORS.primary} size={25} style={{ paddingLeft: 9 }} />
                            <Text style={{ color: COLORS.grey, fontSize: 16, paddingRight: 12, paddingLeft: 5 }}>4 Weeks</Text>
                        </View>
                    </View>
                    <Text style={style.detailsText}>
                        This home version of our HIT3 training program
                        will give you the muscle-building challenge you
                        crave all while using the equipment you have in
                        your home gym.
                    </Text>

                    <View style={{ marginTop: 40 }}>
                        <Text style={style.dayAndMuscle}>Day 1: Chest, Shoulders, and Triceps</Text>
                        <Text style={style.workout}>Decline Dumbbell Fly  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Incline Dumbbell Fly  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Flat Bench Dumbbell Fly  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Barbell Bench Press  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Feet-Elevated Push Ups  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Single Dumbbell Front Raise  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Barbell Close Grip Upright Row  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Arnold Press  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Seated Dumbbell Lateral Raise  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Standing Band Lateral Raise  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Skull Crushers  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Dumbbell Kickbacks  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Seated Two-Arm Overhead Extension  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Dips  1 Set Of 8-12 Reps</Text>
                    </View>

                    <View style={{ marginTop: 40 }}>
                        <Text style={style.dayAndMuscle}>Day 2: Lower Back, Glutes, Hamstrings,Quads, Calves</Text>
                        <Text style={style.workout}>Good Morning  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Stiff Leg Deadlift  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Barbell Hip Thrust  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>X-Band Walk  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Exercise Ball Leg Curl  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Dumbbell Hamstring Curl  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Dumbbell Walking Lunge  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Dumbbell Leg Extension  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Barbell Squat  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Zercher Squat (Sumo Stance)  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Seated Barbell Calf Raise  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Standing Calf Raise 1 Set Of 8-12 Reps</Text>
                    </View>

                    <View style={{ marginTop: 40 }}>
                        <Text style={style.dayAndMuscle}>Day 3: Upper Back, Rear Delts, Traps,Biceps,
                            Forearms,Abs</Text>
                        <Text style={style.workout}>Wide Grip Pull Up  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Wide Grip Behind the Neck Pull Up  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Reverse Grip Pull Up  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Dumbbell Rows on Bench  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Reverse Grip Barbell Row  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Bent Over Rear Lateral Raise  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Band Face Pulls  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Rear Delt Barbell Row  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Band Reverse Fly  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Dumbbell High Pull (Seated)  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Dumbbell High Pull (Standing)  1 Set Of  8-12 Reps</Text>
                        <Text style={style.workout}>Dumbbell Shrug (Seated)  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Barbell Preacher Curl  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Incline Dumbbell Curl 1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Dumbbell Walking Lunge  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Barbell Curl  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Barbell Squat  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Wrist Curl  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Barbell Reverse Wrist Curl  1 Set Of 8-12 Reps</Text>
                        <Text style={style.workout}>Wrist Curl  1 Set Of 8-12 Reps</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
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

export default HiitPlanScreen;