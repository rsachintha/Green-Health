import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import { View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import PlansScreen from '../screens/PlansScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ViewEvent from '../screens/ViewEvents';
import ScanScreen from '../screens/ScanScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    height: 55,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: COLORS.primary,
            }}
        >
            <Tab.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="home-filled" color={color} size={28} />
                    ),
                }}
            /><Tab.Screen
                name='PlansScreen'
                component={PlansScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="fitness-center" color={color} size={28} />
                    ),
                }}
            /><Tab.Screen
                name='Scan'
                component={ScanScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <View style={{
                            height: 60,
                            width: 60,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: COLORS.white,
                            borderColor: COLORS.primary,
                            borderWidth: 2,
                            borderRadius: 30,
                            top: -25,
                            elevation: 5,
                        }}>
                            <Icon name="qr-code-scanner" color={COLORS.primary} size={28} />
                        </View>

                    ),
                }}
            /><Tab.Screen
                name='ViewEvent'
                component={ViewEvent}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="auto-stories" color={color} size={28} />
                    ),
                }}
            /><Tab.Screen
                name='ProfileScreen'
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="person" color={color} size={28} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomNavigator;