import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';

const WeightGainingPlanScreen = () => {
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
                        source={require('../../assets/images/building.jpg')}
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
                            <Text style={{ color: COLORS.grey, fontSize: 16, paddingRight: 12, paddingLeft: 5 }}>6 Weeks</Text>
                        </View>
                    </View>
                    <Text style={style.detailsText}>
                        This 4-day program will help intermediate and
                        advanced trainees gain size and strength.
                        Rest-pause set, drop sets, and negatives will
                        kick your muscle gains into high gear!
                    </Text>

                    <View style={{ marginTop: 40 }}>
                        <Text style={style.dayAndMuscle}>Day 1: Chest and Side Delts</Text>
                        <Text style={style.workout}>Incline Barbell Bench Press  3 Sets Of 12, 10, 12* Reps</Text>
                        <Text style={style.workout}>Flat Dumbbell Bench Press  3 Sets Of 12, 10, 15+ Reps</Text>
                        <Text style={style.workout}>Cable Crossover  3 Sets Of 12, 12, 12^ Reps</Text>
                        <Text style={style.workout}>Seated Lateral Raise  3 Sets Of 12, 12, 12 Reps</Text>
                        <Text style={style.workout}>Single Arm Cable Lateral Raise  3 Sets Of 12, 12, 12 Reps</Text>
                    </View>

                    <View style={{ marginTop: 40 }}>
                        <Text style={style.dayAndMuscle}>Day 2: Upper Back and Rear Delts</Text>
                        <Text style={style.workout}>Bent-Over Barbell Row  3 Sets Of 12, 10, 12* Reps</Text>
                        <Text style={style.workout}>Dumbbell Pullover  3 Sets Of 12, 10, 15+ Reps</Text>
                        <Text style={style.workout}>Wide Grip Lat Pulldown  3 Sets Of 12, 12, 12^ Reps</Text>
                        <Text style={style.workout}>Dumbbell Rear Delt Fly  3 Sets Of 12, 12, 12 Reps</Text>
                        <Text style={style.workout}>Cable Face Pull  3 Sets Of 12, 12, 12 Reps</Text>
                        <Text style={style.workout}>Dumbbell Shrug  3 Sets Of 12, 12, 12 Reps</Text>
                    </View>

                    <View style={{ marginTop: 40 }}>
                        <Text style={style.dayAndMuscle}>Day 3: Arms and Abs</Text>
                        <Text style={style.workout}>Close Grip Bench Press  3 Sets Of 12, 10, 12* Reps</Text>
                        <Text style={style.workout}>Weighted Dip  3 Sets Of 12, 10, 12+ Reps</Text>
                        <Text style={style.workout}>Rope Tricep Extension  3 Sets Of 12, 12, 12^ Reps</Text>
                        <Text style={style.workout}>Lying Leg Raise  3 Sets Of 12, 12, 12 Reps</Text>
                        <Text style={style.workout}>Cable Crunch  3 Sets Of 12, 12, 12 Reps</Text>
                        <Text style={style.workout}>Barbell Curl  3 Sets Of 12, 12, 12* Reps</Text>
                        <Text style={style.workout}>Hammer Curl  3 Sets Of 12, 10, 12+ Reps</Text>
                        <Text style={style.workout}>Cable Curl  3 Sets Of12, 12, 12^ Reps</Text>
                    </View>

                    <View style={{ marginTop: 40 }}>
                        <Text style={style.dayAndMuscle}>Day 4: Legs</Text>
                        <Text style={style.workout}>Deadlift  3 Sets Of 12, 10, 12* Reps</Text>
                        <Text style={style.workout}>Lying Leg Curl  3 Sets Of 12, 10, 12+ Reps</Text>
                        <Text style={style.workout}>Walking Lunge  3 Sets Of 12, 12, 12 Reps</Text>
                        <Text style={style.workout}>Front Squat  3 Sets Of 12, 12, 12* Reps</Text>
                        <Text style={style.workout}>Leg Extension  3 Sets Of 12, 12, 12+ Reps</Text>
                        <Text style={style.workout}>Dumbbell Side Lunge  3 Sets Of 12, 12, 12 Reps</Text>
                        <Text style={style.workout}>Seated Calf Raise  3 Sets Of 12, 10, 12^ Reps</Text>
                        <Text style={style.workout}>Calf Press  3 Sets Of12, 12, 12^ Reps</Text>
                    </View>

                    <View style={{ marginTop: 40 }}>
                        <Text style={{ color: COLORS.white, fontWeight: 'bold', fontSize: 20 }}>* Rest-Pause Set  + Drop Set  ^ 3-5 Second Negatives</Text>
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

export default WeightGainingPlanScreen;