import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as StoreProvider } from 'react-redux'
import store from './src/reducer/store'
import COLORS from './consts/colors';
import OnBoardScreen from './views/screens/OnBoardScreen';
import PlansScreen from './views/screens/PlansScreen';
import ProfileScreen from './views/screens/ProfileScreen';
import BottomNavigator from './views/navigation/BottomNavigator';
import EditProfileScreen from './views/screens/EditProfileScreen';
import GymScreen from './views/screens/GymScreen';
import PoolScreen from './views/screens/PoolScreen';
import Beginners from './views/screens/BeginnersPlanScreen';
import Building from './views/screens/WeightGainingPlanScreen';
import Loss from './views/screens/WeightlossPlan';
import Hiit from './views/screens/HiitPlanScreen';
import GainMealPlan from './views/screens/BuildingMealPlanScreen';
import MaintainMealPlan from './views/screens/MaintainingMealPlanScreen';
import LossMealPlan from './views/screens/FatLossMealPlanScreen';
import SignInScreen from './views/screens/SignInScreen';
import SignUpScreen from './views/screens/SignUpScreen';
import AddEvents from './views/screens/AddEvents';
import ViewEvents from './views/screens/ViewEvents';
import News from './views/screens/News';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <StoreProvider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
        <Stack.Navigator screenOptions={{ header: () => null }}>
          <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
          <Stack.Screen name='SignInScreen' component={SignInScreen} />
          <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
          <Stack.Screen name="Home" component={BottomNavigator} />
          <Stack.Screen name='News' component={News} />
          <Stack.Screen name="Plans" component={PlansScreen} />
          <Stack.Screen name='Beginners' component={Beginners} />
          <Stack.Screen name='Building' component={Building} />
          <Stack.Screen name='Loss' component={Loss} />
          <Stack.Screen name='Hiit' component={Hiit} />
          <Stack.Screen name='GainMealPlan' component={GainMealPlan} />
          <Stack.Screen name='MaintainMealPlan' component={MaintainMealPlan} />
          <Stack.Screen name='LossMealPlan' component={LossMealPlan} />
          <Stack.Screen name="AddEvents" component={AddEvents} />
          <Stack.Screen name="ViewEvents" component={ViewEvents} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name='EditProfile' component={EditProfileScreen} />
          <Stack.Screen name='GymScreen' component={GymScreen} />
          <Stack.Screen name='PoolScreen' component={PoolScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>

  );
}