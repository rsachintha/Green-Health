import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';

const WeightLossPlanScreen = () => {
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
                        source={require('../../assets/images/loss.jpg')}
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
                            Weight Loss Plan
                        </Text>
                        <View style={style.iconContainer}>
                            <Icon name='timer' color={COLORS.primary} size={25} style={{ paddingLeft: 9 }} />
                            <Text style={{ color: COLORS.grey, fontSize: 16, paddingRight: 12, paddingLeft: 5 }}>4 Weeks</Text>
                        </View>
                    </View>
                    <Text style={style.detailsText}>
                        This intense cutting routine hits each muscle
                        group twice a week on a 3 days on, 1 day
                        off schedule. Use this routine to burn fat and
                        get ripped!
                    </Text>

                    <View style={{ marginTop: 40 }}>
                        <Text style={style.dayAndMuscle}>Day 1 - Chest & Triceps</Text>
                        <Text style={style.muscle}>Chest</Text>
                        <Text style={style.workout}>Incline Dumbbell Bench Press  4 Sets Of 12 - 15 Reps</Text>
                        <Text style={style.workout}>Flat Dumbbell Press  3 Sets Of 12 Reps</Text>
                        <Text style={style.workout}>Incline Flys  3 Sets Of 12 Reps</Text>
                        <Text style={style.workout}>Pec Deck  3 Sets Of 12 Reps</Text>
                        <Text style={style.muscle}>Triceps</Text>
                        <Text style={style.workout}>Skull Crushers  4 Sets Of 12 - 15 Reps</Text>
                        <Text style={style.workout}>Rope Extensions  3 Sets Of 12 Reps</Text>
                        <Text style={style.workout}>Straight Bar Pushdowns  3 Sets Of 12 Reps</Text>
                        <Text style={style.muscle}>Abdominals</Text>
                        <Text style={style.workout}>Rope Crunch  4 Sets Of 20 - 25 Reps</Text>
                        <Text style={style.workout}>Hanging Knee Raise  4 Sets Of 20 - 25 Reps</Text>
                    </View>

                    <View style={{ marginTop: 40 }}>
                        <Text style={style.dayAndMuscle}>Day 2 - Back & Biceps</Text>
                        <Text style={style.muscle}>Back</Text>
                        <Text style={style.workout}>Wide Grip Chins  4 Sets Of 12 - 15 Reps</Text>
                        <Text style={style.workout}>Wide Grip Rows  3 Sets Of 12 Reps</Text>
                        <Text style={style.workout}>Narrow Grip Pulldown  4 Sets Of 12 - 15 Reps</Text>
                        <Text style={style.workout}>Hyper Extensions  3 Sets Of 12 Reps</Text>
                        <Text style={style.muscle}>Biceps</Text>
                        <Text style={style.workout}>Concentration Curls  4 Sets Of 12 - 15 Reps</Text>
                        <Text style={style.workout}>EZ Bar  3 Sets Of 12 Reps</Text>
                    </View>

                    <View style={{ marginTop: 40 }}>
                        <Text style={style.dayAndMuscle}>Day 3 - Legs & Shoulders</Text>
                        <Text style={style.muscle}>Legs</Text>
                        <Text style={style.workout}>Squats  4 Sets Of 12 - 15 Reps</Text>
                        <Text style={style.workout}>Leg Extensions  3 Sets Of 12 Reps</Text>
                        <Text style={style.workout}>Leg Curl  4 Sets Of 12 - 15 Reps</Text>
                        <Text style={style.workout}>Stiff Leg Deadlifts  3 Sets Of 12 Reps</Text>
                        <Text style={style.workout}>Seated Calf Raise  3 Sets Of 12 Reps</Text>
                        <Text style={style.muscle}>Shoulders</Text>
                        <Text style={style.workout}>Dumbbell Shoulder Press  4 Sets Of 12 - 15 Reps</Text>
                        <Text style={style.workout}>Cable Lateral Raise  3 Sets Of 12 Reps</Text>
                        <Text style={style.workout}>Reverse Cable Fly  3 Sets Of 12 Reps</Text>
                        <Text style={style.workout}>Smith Machine Shrugs  4 Sets Of 12 - 15 Reps</Text>
                        <Text style={style.muscle}>Abdominals</Text>
                        <Text style={style.workout}>Rope Crunch  4 Sets Of 20 - 25 Reps</Text>
                        <Text style={style.workout}>Hanging Knee Raise  4 Sets Of 20 - 25 Reps</Text>
                    </View>

                    <View style={{ marginTop: 40 }}>
                        <Text style={style.dayAndMuscle}>Day 4 - Chest & Triceps</Text>
                        <Text style={style.muscle}>Chest</Text>
                        <Text style={style.workout}>Incline Barbell Press  4 Sets Of 12 - 15 Reps</Text>
                        <Text style={style.workout}>Flat Barbell Press  3 Sets Of 12 Reps</Text>
                        <Text style={style.workout}>Flat Flys  3 Sets Of 12 Reps</Text>
                        <Text style={style.workout}>Cable Crossovers  3 Sets Of 12 Reps</Text>
                        <Text style={style.muscle}>Triceps</Text>
                        <Text style={style.workout}>Reverse Grip Pushdown  4 Sets Of 12 - 15 Reps</Text>
                        <Text style={style.workout}>Dumbbell Kickbacks  3 Sets Of 12 Reps</Text>
                        <Text style={style.workout}>Dumbbell Extension  3 Sets Of 12 Reps</Text>
                        <Text style={style.muscle}>Abdominals</Text>
                        <Text style={style.workout}>Weighted Incline Crunches  4 Sets Of 20 - 25 Reps</Text>
                        <Text style={style.workout}>Hip Thrust  4 Sets Of 20 - 25 Reps</Text>
                    </View>

                    <View style={{ marginTop: 40 }}>
                        <Text style={style.dayAndMuscle}>Day 5 - Back & Biceps</Text>
                        <Text style={style.muscle}>Back</Text>
                        <Text style={style.workout}>Wide Grip Pulldowns  4 Sets Of 12 - 15 Reps</Text>
                        <Text style={style.workout}>Bent Over Dumbbell Rows  3 sets Of 12 Reps</Text>
                        <Text style={style.workout}>Good Mornings  3 Sets Of 12 Reps</Text>
                        <Text style={style.workout}>One Arm Dumbbell Row  3 Sets Of 12 Reps</Text>
                        <Text style={style.muscle}>Biceps</Text>
                        <Text style={style.workout}>Preacher Curl  4 Sets Of 12 - 15 Reps</Text>
                        <Text style={style.workout}>Dumbbell Curl  3 Sets Of 12 Reps</Text>
                    </View>

                    <View style={{ marginTop: 40 }}>
                        <Text style={style.dayAndMuscle}>Day 6 - Legs & Shoulders</Text>
                        <Text style={style.muscle}>Legs</Text>
                        <Text style={style.workout}>Leg Press  4 Sets Of  12 - 15 Reps</Text>
                        <Text style={style.workout}>Lunges  3 sets Of 12 Reps</Text>
                        <Text style={style.workout}>Leg Curl  4 Sets Of  12 - 15 Reps</Text>
                        <Text style={style.workout}>Straight Leg Deadlifts  3 sets Of 12 Reps</Text>
                        <Text style={style.workout}>Standing Calf Raises  4 Sets Of  12 - 15 Reps</Text>
                        <Text style={style.muscle}>Shoulders</Text>
                        <Text style={style.workout}>Smith Machine Press  4 Sets Of 12 - 15 Reps</Text>
                        <Text style={style.workout}>Dumbbell Lateral Raise  3 Sets Of 12 Reps</Text>
                        <Text style={style.workout}>Dumbbell Rear Delt Flys  3 Sets Of 12 Reps</Text>
                        <Text style={style.workout}>Upright Rows  4 Sets Of 12 - 15 Reps</Text>
                        <Text style={style.muscle}>Abdominals</Text>
                        <Text style={style.workout}>Weighted Incline Crunches  4 Sets Of 20 - 25 Reps</Text>
                        <Text style={style.workout}>Hip Thrust  4 Sets Of 20 - 25 Reps</Text>
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

export default WeightLossPlanScreen;