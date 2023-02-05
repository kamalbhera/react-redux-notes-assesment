import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addNote } from './actions';
import { NewNoteInput } from './NewNoteInput';
import { NotesState } from './notesReducer';

function App() {
    // we have to specify notes with TS from the reducer. but because inside of the selector (state.notes) is an array of strings but outside of it (the conts notes =) is still unknown for TS, e fix this by providing the return type of useSelector. NotesState is what is the type of our state, and NotesState["notes"] what is the type of the return value of our useSelector. now TS knows that notes is an array of strings and we can use it in the layout below. 
    const notes = useSelector<NotesState, NotesState["notes"]>(
        (state) => state.notes
    );
    // in redux state is updated by dispatching actions. 
    const dispatch = useDispatch();

    // addNote action.
    const onAddNote = (note: string) => {
        dispatch(addNote(note));
    };

    return (
        <>
            <NewNoteInput addNote={onAddNote} />
            <hr />
            <ul>
                {notes.map((note) => {
                    return <li key={note}>{note}</li>;
                })}
            </ul>
        </>
    );
}

export default App;
