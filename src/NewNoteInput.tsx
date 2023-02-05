import React, { ChangeEvent} from 'react';

// defining a new note input prop for when the user clicks on the add note button
interface NewNoteInputProps {
    // addNote is a function that will accept note as a string, that will return nothing (i.e void)
    addNote(note: string): void;
}

// exporting newNoteInput as react functional component (FC) | destructure the props (addNote callback)
export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
    //to get the value from the input, create new state => 
    const [note, setNote] = React.useState("")

    // in TS, we need to specify the event type ( because the input is an onchange event). the htmliput is the type of element that will be triggered.
    const updateNote = (event:ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value)
    }
    // simpe on add note click event, cleaned up by setting it to a string ("")
    const onAddNoteClick = () => {
        addNote(note)
        setNote("")
    }

    return (
        <div>
            <input onChange={updateNote} value={note} type="text" name="note" placeholder="Note" />
            <button onClick={onAddNoteClick}>Add note</button>
        </div>
    );
}