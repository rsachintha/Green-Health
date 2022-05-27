import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, StyleSheet, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import { auth } from '../../firebase';


const SignInScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("Home")
            }
        })

        return unsubscribe
    }, [])

    const handleSignIn = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log("Logged in with:", user.email);
            })
            .catch(error => alert(error.message))
    }

    return (
        <SafeAreaView style={{ paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white, margin: 3 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', marginTop: 40 }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 35,
                        color: COLORS.primary
                    }}>Green</Text>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 35,
                        color: COLORS.dark
                    }}>Health</Text>
                </View>
                <View style={{ marginTop: 40 }}>
                    <Text style={{
                        fontSize: 27,
                        fontWeight: 'bold',
                        color: COLORS.dark
                    }}>Welcome Back,</Text>
                    <Text style={{
                        fontSize: 19,
                        fontWeight: 'bold',
                        color: COLORS.grey
                    }}>Sign in to continue</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <View style={styles.inputContainer}>
                        <Icon
                            name="person-outline"
                            size={20} color={COLORS.primary}
                        />
                        <TextInput
                            value={email}
                            onChangeText={text => setEmail(text)}
                            placeholder='Email'
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon
                            name="lock-outline"
                            size={20} color={COLORS.primary}
                        />
                        <TextInput
                            value={password}
                            onChangeText={text => setPassword(text)}
                            placeholder='Password'
                            style={styles.input}
                            secureTextEntry
                        />
                    </View>
                    <TouchableOpacity onPress={handleSignIn}>
                        <View style={styles.btnPrimary}>
                            <Text style={{
                                color: COLORS.white,
                                fontWeight: 'bold',
                                fontSize: 18,
                            }}>Sign In</Text>
                        </View>
                    </TouchableOpacity>
                    <View
                        style={{
                            marginVertical: 20,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <View style={styles.line}></View>
                        <Text style={{ fontWeight: 'bold', marginHorizontal: 5 }}>OR</Text>
                        <View style={styles.line}></View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        <View style={styles.btnSecondary}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 10 }}>Sign in with</Text>
                            <Image style={styles.btnImg} source={require('../../assets/images/google-logo.png')} />
                        </View>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    marginTop: 40,
                    marginBottom: 20,
                }}>
                    <Text style={{ color: COLORS.grey, fontWeight: 'bold' }}>
                        Don't have an account?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                        <Text style={{ color: COLORS.secondary, fontWeight: 'bold' }}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignInScreen;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    input: {
        color: COLORS.primary,
        paddingLeft: 30,
        borderBottomWidth: 0.5,
        flex: 1,
        fontSize: 18,
    },
    btnPrimary: {
        backgroundColor: COLORS.primary,
        height: 50,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    line: {
        height: 1,
        width: 30,
        backgroundColor: COLORS.grey,
    },
    btnSecondary: {
        height: 50,
        borderWidth: 1,
        borderColor: COLORS.dark,
        flex: 1,
        justifyContent: 'center',
        borderRadius: 5,
        flexDirection: 'row',
    },
    btnImg: {
        width: 20,
        height: 20,
        marginLeft: 5,
        marginTop: 10
    },
})
