import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, Modal, Animated, TextInput } from 'react-native';
import COLORS from '../../consts/colors';

const ModalPopup = ({ visible, children }) => {

    const [showModal, setShowModal] = useState(visible);
    const scaleValue = useRef(new Animated.Value(0)).current;

    const toggleModal = () => {
        if (visible) {
            setShowModal(true)
            Animated.spring(scaleValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            setTimeout(() => setShowModal(false), 200)
            Animated.timing(scaleValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    }

    useEffect(() => {
        toggleModal();
    }, [visible]);

    return (
        <Modal transparent visible={showModal}>
            <View style={style.modalBg}>
                <Animated.View style={[style.modalContainer, { transform: [{ scale: scaleValue }] }]}>{children}</Animated.View>
            </View>
        </Modal>
    )
}


const PoolScreen = () => {

    const [visible, setVisible] = useState(false);
    const [id, setId] = useState("");
    const [session, setSession] = useState("");

    function findOcc(arr, key) {
        let arr2 = [];

        arr.forEach((x) => {

            if (arr2.some((val) => { return val[key] == x[key] })) {

                arr2.forEach((k) => {
                    if (k[key] === x[key]) {
                        k["occurrence"]++
                    }
                })

            } else {
                let a = {}
                a[key] = x[key]
                a["occurrence"] = 1
                arr2.push(a);
            }
        })

        return arr2
    }


    let arr = [
        {
            "session": "09:00 - 11:00"
        },
        {
            "session": "09:00 - 11:00"
        },
        {
            "session": "11:00 - 13:00"
        },
        {
            "session": "13:00 - 15:00"
        },
        {
            "session": "15:00 - 17:00"
        },
        {
            "session": "17:00 - 19:00"
        },
        {
            "session": "19:00 - 21:00"
        },
        {
            "session": "21:00 - 23:00"
        },
        {
            "session": "21:00 - 23:00"
        },
        {
            "session": "21:00 - 23:00"
        },
    ]

    // let arr = count

    let key = "session"
    // console.log(findOcc(arr, key))
    const findOccFunc = findOcc(arr, key)
    var foundValue1 = findOccFunc.filter(obj => obj.session === '09:00 - 11:00');
    var foundValue2 = findOccFunc.filter(obj => obj.session === '11:00 - 13:00');
    var foundValue3 = findOccFunc.filter(obj => obj.session === '13:00 - 15:00');
    var foundValue4 = findOccFunc.filter(obj => obj.session === '15:00 - 17:00');
    var foundValue5 = findOccFunc.filter(obj => obj.session === '17:00 - 19:00');
    var foundValue6 = findOccFunc.filter(obj => obj.session === '19:00 - 21:00');
    var foundValue7 = findOccFunc.filter(obj => obj.session === '21:00 - 23:00');

    var btn1 = 20 - foundValue1[0].occurrence;
    var btn2 = 20 - foundValue2[0].occurrence;
    var btn3 = 20 - foundValue3[0].occurrence;
    var btn4 = 20 - foundValue4[0].occurrence;
    var btn5 = 20 - foundValue5[0].occurrence;
    var btn6 = 20 - foundValue6[0].occurrence;
    var btn7 = 20 - foundValue7[0].occurrence;


    return (
        <SafeAreaView>
            <ModalPopup visible={visible}>
                <View style={{ alignItems: 'center' }}>
                    <View style={style.header}>
                        <TouchableOpacity onPress={() => setVisible(false)}>
                            <Text style={{ fontSize: 25, paddingBottom: 80 }} >X</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ alignItems: 'center', flexDirection: 'column' }}>
                    <Text style={{ paddingBottom: 20, fontSize: 18 }}>Enter Your Member ID</Text>
                    <TextInput
                        style={{ paddingBottom: 20 }}
                        placeholder='Member ID'
                        placeholderTextColor={COLORS.grey}
                        value={id}
                        onChangeText={text => setId(text)}
                    />
                    <Text style={{ paddingBottom: 20, fontSize: 18 }}>Enter Session Time.ex:-09:00-11:00</Text>
                    <TextInput
                        style={{ paddingBottom: 20 }}
                        placeholder='00:00-00:00'
                        placeholderTextColor={COLORS.grey}
                        value={session}
                        onChangeText={text => setSession(text)}
                    />
                    <TouchableOpacity activeOpacity={0.8} onPress={() => { }}>
                        <View style={{
                            backgroundColor: COLORS.primary,
                            ...style.optionBtnModal
                        }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 12, color: COLORS.white }}>Submit</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ModalPopup>
            <View style={style.optionsListContainer}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => setVisible(true)}>
                    <View style={{
                        backgroundColor: COLORS.primary,
                        ...style.optionBtn
                    }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10, color: COLORS.white }}>09:00-11:00 ({btn1})</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} onPress={() => setVisible(true)}>
                    <View style={{
                        backgroundColor: COLORS.primary,
                        ...style.optionBtn
                    }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10, color: COLORS.white }}>11:00-13:00 ({btn2})</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={style.optionsListContainer}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => setVisible(true)}>
                    <View style={{
                        backgroundColor: COLORS.primary,
                        ...style.optionBtn
                    }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10, color: COLORS.white }}>13:00-15:00 ({btn3})</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} onPress={() => setVisible(true)}>
                    <View style={{
                        backgroundColor: COLORS.primary,
                        ...style.optionBtn
                    }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10, color: COLORS.white }}>15:00-17:00 ({btn4})</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>


    )
}

const style = StyleSheet.create({
    optionsListContainer: {
        marginTop: 150,
        paddingVertical: 10,
        alignItems: 'center',
        paddingHorizontal: 20,
        flexDirection: 'row'
    },
    optionBtn: {
        height: 65,
        width: 170,
        marginLeft: 15,
        borderRadius: 30,
        alignItems: 'center',
        paddingHorizontal: 5,
        flexDirection: 'row',
    },
    optionBtnModal: {
        height: 50,
        width: 100,
        marginLeft: 20,
        borderRadius: 30,
        alignItems: 'center',
        paddingHorizontal: 5,
        flexDirection: 'row',
    },
    modalBg: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
    },
    header: {
        width: '100%',
        height: 40,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
})

export default PoolScreen;
