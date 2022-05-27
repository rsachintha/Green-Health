import remove from 'lodash.remove'
export const ADD_EVENT = 'ADD_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'

let eventID = 0

//Action
export function addevent(event) {
    return {
        type: ADD_EVENT,
        id: eventID++,
        event
    }
}

export function deleteevent(id) {
    return {
        type: DELETE_EVENT,
        payload: id
    }
}

// Reducers

const initialState = []

function eventsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_EVENT:
            return [
                ...state,
                {
                    id: action.id,
                    event: action.event
                }
            ]

        case DELETE_EVENT:
            const deleteNewArray = remove(state, obj => {
                return obj.id != action.payload
            })

            return deleteNewArray

        default:
            return state
    }

}

export default eventsReducer
