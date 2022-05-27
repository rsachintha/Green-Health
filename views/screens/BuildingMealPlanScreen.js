import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';

const GainMealPlanScreen = () => {
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
                        source={require('../../assets/images/build.jpg')}
                        style={{
                            height: 450,
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
                            Muscle Building Meal Plan
                        </Text>
                    </View>
                    <Text style={style.detailsText}>
                        Each meal and snack should contain 20–30 grams of protein to optimally support muscle building.
                        When you’re in a bulking phase, your food intake will be much higher than when you’re in a cutting phase.
                        You can enjoy the same foods in the cutting phase that you would when bulking — just in smaller portions.
                    </Text>
                    <View style={{ marginTop: 40 }}>

                        <Text style={style.day}>Monday</Text>
                        <Text style={style.mealTime}>Breakfast:</Text><Text style={style.planContent}>Scrambled eggs with mushrooms and oatmeal.</Text>
                        <Text style={style.mealTime}>Snack:</Text><Text style={style.planContent}>Low-fat cottage cheese with blueberries.</Text>
                        <Text style={style.mealTime}>Lunch:</Text><Text style={style.planContent}>Venison burger, white rice and broccoli.</Text>
                        <Text style={style.mealTime}>Snack:</Text><Text style={style.planContent}>Protein shake and a banana.</Text>
                        <Text style={style.mealTime}>Dinner:</Text><Text style={style.planContent}>Salmon, quinoa and asparagus.</Text>

                        <Text style={style.day}>Tuesday</Text>
                        <Text style={style.mealTime}>Breakfast:</Text><Text style={style.planContent}>Protein pancakes with light-syrup, peanut butter and raspberries.</Text>
                        <Text style={style.mealTime}>Snack:</Text><Text style={style.planContent}>Hard-boiled eggs and an apple.</Text>
                        <Text style={style.mealTime}>Lunch:</Text><Text style={style.planContent}>Sirloin steak, sweet potato and spinach salad with vinaigrette.</Text>
                        <Text style={style.mealTime}>Snack:</Text><Text style={style.planContent}>Protein shake and walnuts.</Text>
                        <Text style={style.mealTime}>Dinner:</Text><Text style={style.planContent}>Ground turkey and marinara sauce over pasta.</Text>

                        <Text style={style.day}>Wednesday</Text>
                        <Text style={style.mealTime}>Breakfast:</Text><Text style={style.planContent}>Chicken sausage with egg and roasted potatoes.</Text>
                        <Text style={style.mealTime}>Snack:</Text><Text style={style.planContent}>Greek yogurt and almonds.</Text>
                        <Text style={style.mealTime}>Lunch:</Text><Text style={style.planContent}>Turkey breast, basmati rice and mushrooms.</Text>
                        <Text style={style.mealTime}>Snack:</Text><Text style={style.planContent}>Protein shake and grapes.</Text>
                        <Text style={style.mealTime}>Dinner:</Text><Text style={style.planContent}>Mackerel, brown rice and salad leaves with vinaigrette.</Text>

                        <Text style={style.day}>Thursday</Text>
                        <Text style={style.mealTime}>Breakfast:</Text><Text style={style.planContent}>Ground turkey, egg, cheese and salsa in a whole-grain tortilla.</Text>
                        <Text style={style.mealTime}>Snack:</Text><Text style={style.planContent}>Yogurt with granola.</Text>
                        <Text style={style.mealTime}>Lunch:</Text><Text style={style.planContent}>Chicken breast, baked potato, sour cream and broccoli.</Text>
                        <Text style={style.mealTime}>Snack:</Text><Text style={style.planContent}>Protein shake and mixed berries.</Text>
                        <Text style={style.mealTime}>Dinner:</Text><Text style={style.planContent}>Stir-fry with chicken, egg, brown rice, broccoli, peas and carrots.</Text>

                        <Text style={style.day}>Friday</Text>
                        <Text style={style.mealTime}>Breakfast:</Text><Text style={style.planContent}>Blueberries, strawberries and vanilla Greek yogurt on overnight oats.</Text>
                        <Text style={style.mealTime}>Snack:</Text><Text style={style.planContent}>Jerky and mixed nuts.</Text>
                        <Text style={style.mealTime}>Lunch:</Text><Text style={style.planContent}>Tilapia fillets with lime juice, black and pinto beans and seasonal veggies.</Text>
                        <Text style={style.mealTime}>Snack:</Text><Text style={style.planContent}>Protein shake and watermelon.</Text>
                        <Text style={style.mealTime}>Dinner:</Text><Text style={style.planContent}>Ground beef with corn, brown rice, green peas and green beans.</Text>

                        <Text style={style.day}>Saturday</Text>
                        <Text style={style.mealTime}>Breakfast:</Text><Text style={style.planContent}>Ground turkey and egg with corn, bell peppers, cheese and salsa.</Text>
                        <Text style={style.mealTime}>Snack:</Text><Text style={style.planContent}>Can of tuna with crackers.</Text>
                        <Text style={style.mealTime}>Lunch:</Text><Text style={style.planContent}>Tilapia fillet, potato wedges and bell peppers.</Text>
                        <Text style={style.mealTime}>Snack:</Text><Text style={style.planContent}>Protein shake and pear.</Text>
                        <Text style={style.mealTime}>Dinner:</Text><Text style={style.planContent}>Diced beef with rice, black beans, bell peppers, cheese and pico de gallo.</Text>

                        <Text style={style.day}>Sunday</Text>
                        <Text style={style.mealTime}>Breakfast:</Text><Text style={style.planContent}>Breakfast: Eggs sunny-side up and avocado toast.</Text>
                        <Text style={style.mealTime}>Snack:</Text><Text style={style.planContent}>Snack: Protein balls and almond butter.</Text>
                        <Text style={style.mealTime}>Lunch:</Text><Text style={style.planContent}>Lunch: Pork tenderloin slices with roasted garlic potatoes and green beans.</Text>
                        <Text style={style.mealTime}>Snack:</Text><Text style={style.planContent}>Snack: Protein shake and strawberries.</Text>
                        <Text style={style.mealTime}>Dinner:</Text><Text style={style.planContent}>Dinner: Turkey meatballs, marinara sauce and parmesan cheese over pasta.</Text>

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
    detailsText: {
        marginTop: 10,
        lineHeight: 22,
        fontSize: 16,
        color: COLORS.white,
    },
    day: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 26,
        textTransform: 'uppercase',
        paddingBottom: 7,
        paddingTop: 7,
    },
    planContent: {
        color: COLORS.dark,
        fontSize: 16,
    },
    mealTime: {
        color: COLORS.dark,
        fontSize: 20,
        fontWeight: 'bold',
    },
})

export default GainMealPlanScreen;