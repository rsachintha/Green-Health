import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { IconButton, TextInput, FAB } from 'react-native-paper'

function AddEvents({ navigation }) {
    const [eventTitle, setEventTitle] = useState('')
    const [eventDescription, setEventDescription] = useState('')

    function onSaveEvent() {
        navigation.state.params.addEvent({ eventTitle, eventDescription })
        navigation.goBack()
    }

    return (
        <>
            <View style={styles.container}>
                <TextInput
                    label="Add Note Title here"
                    value={eventTitle}
                    mode='outlined'
                    onChangeText={setEventTitle}
                    style={styles.title}
                    selectionColor="#219653"
                    outlineColor="#219653"
                    activeOutlineColor="#219653"
                />
                <TextInput
                    label="Add Note Description"
                    value={eventDescription}
                    onChangeText={setEventDescription}
                    mode="flat"
                    multiline={true}
                    style={styles.text}
                    scrollEnabled={true}
                    returnKeyLabel='done'
                    blurOnSubmit={true}
                    selectionColor="#219653"
                    activeUnderlineColor="#219653"

                />
                <FAB
                    style={styles.fab}
                    small
                    icon="check"
                    disabled={eventTitle == '' ? true : false}
                    onPress={() => onSaveEvent()}
                />
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: 24,
        marginBottom: 16
    },
    text: {
        height: 300,
        fontSize: 16
    },
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 0,
        backgroundColor: '#219653'
    }

})

export default AddEvents

