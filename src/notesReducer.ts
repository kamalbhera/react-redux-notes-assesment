// In redux, reducers are functions that calculate the new value for the state.

import { Action } from "./actions"

// the type of our state
export interface NotesState {
    //defining notes here is an array of strings. thanks typescript.
    notes: string[];
}

// the initialState is an object with a field notes and an empty array of notes.
const initialState = {
    notes: []
}

//export reducer. reducers accept two values; 1. state (previous state) 2. action (basically an event containing the data to calculate the new state)
// state has type of NotesState interface(type or). actions will be defined in actions.ts.
export const notesReducer = (state: NotesState = initialState, action: Action) => {
    // reducers contain switch case statements, where they check the action type.
    switch(action.type) {
        // and depending on what type does the action, we perform different modifications to the state.
        case "ADD_NOTE": {
            // return an object from the case with all the fields from the previous ...state, but notes will be a new array with all the previous notes + action payload. we basically add na new note here.
            return {...state, notes: [...state.notes, action.payload]}
        }
        // if we recieve a note with any other type, this will be our default statement and we just return state. and then we import everything in store.ts and pass the function the reducer. in index.tsx we import store from store.ts and pass it to provider. 
        default:
            return state
    }
}