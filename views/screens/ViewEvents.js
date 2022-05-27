import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Text, FAB, List } from 'react-native-paper'
import { useSelector, useDispatch } from 'react-redux'
import { addevent, deleteevent } from '../../src/reducer/eventsApp'

function ViewEvents({ navigation }) {
    // const [notes, setNotes] = useState([])
    const events = useSelector(state => state)
    const dispatch = useDispatch()

    const addEvent = event => {
        console.log(event)
        dispatch(addevent(event))
    }

    const deleteEvent = id => dispatch(deleteevent(id))

    // const addNotes = note => {
    //     note.id = notes.length + 1
    //     setNotes([...notes, note])
    // }

    return (
        <>

            <View style={styles.container}>
                {events.length === 0 ? (
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>You do not have any Events</Text>
                    </View>
                ) : (
                    <FlatList
                        data={events}
                        renderItem={({ item }) => (
                            <List.Item
                                title={item.event.eventTitle}
                                description={item.event.eventDescription}
                                descriptionNumberOfLines={1}
                                titleStyle={styles.listTitle}
                                onPress={() => deleteEvent(item.id)}
                            />
                        )}
                        keyExtractor={item => item.id.toString()}
                    />
                )}

                <FAB
                    style={styles.fab}
                    small
                    icon='plus'
                    label='Add a new Event'
                    onPress={() => navigation.navigate('AddEvents', {
                        addEvent
                    })
                    }
                />
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        fontSize: 20
    },
    fab: {
        backgroundColor: '#219653',
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 50
    },
    listTitle: {
        fontSize: 20
    }

})

export default ViewEvents