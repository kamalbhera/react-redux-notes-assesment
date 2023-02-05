import { createStore } from "redux"
import { notesReducer } from "./notesReducer"

// passing a reducer with redux
export const store = createStore(notesReducer)