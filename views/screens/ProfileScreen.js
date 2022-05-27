import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { Avatar, Title, Text, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import { auth } from '../../firebase';

const ProfileScreen = ({ navigation }) => {

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("SignInScreen")
            })
            .catch(error => alert(error.message))
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <Avatar.Image
                        source={{
                            uri: 'https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg',
                        }}
                        size={80}
                    />
                    <View style={{ marginLeft: 20 }}>
                        <Title style={[styles.title, {
                            marginTop: 15,
                            marginBottom: 5,
                        }]}>jonathan joestar</Title>
                    </View>
                </View>
            </View>

            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name="map" color={COLORS.secondary} size={20} />
                    <Text style={{ color: COLORS.grey, marginLeft: 20, fontSize: 16 }}>Kolkata, India</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="phone" color={COLORS.secondary} size={20} />
                    <Text style={{ color: COLORS.grey, marginLeft: 20, fontSize: 16 }}>+91-900000009</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="email" color={COLORS.secondary} size={20} />
                    <Text style={{ color: COLORS.grey, marginLeft: 20, fontSize: 16 }}>{auth.currentUser?.email}</Text>
                </View>
            </View>

            <View style={styles.menuWrapper}>
                <TouchableRipple onPress={() => { }}>
                    <View style={styles.menuItem}>
                        <Icon name="share" color={COLORS.primary} size={35} />
                        <Text style={styles.menuItemText}>Tell Your Friends</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => { }}>
                    <View style={styles.menuItem}>
                        <Icon name="help" color={COLORS.primary} size={35} />
                        <Text style={styles.menuItemText}>Support</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => navigation.navigate('EditProfile')}>
                    <View style={styles.menuItem}>
                        <Icon name="settings" color={COLORS.primary} size={35} />
                        <Text style={styles.menuItemText}>Settings</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={handleSignOut}>
                    <View style={styles.menuItem}>
                        <Icon name="backspace" color={COLORS.primary} size={35} />
                        <Text style={styles.menuItemText}>Logout</Text>
                    </View>
                </TouchableRipple>
            </View>

        </SafeAreaView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: COLORS.grey,
        marginTop: 5,
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 26,
    },
});