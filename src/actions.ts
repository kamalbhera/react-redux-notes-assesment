export type Action = { type: "ADD_NOTE"; payload: string };

// note has to be specified. in our case it is a string. in this function we call dispatch action. action is an object. we export it and use it in app.tsx.
export const addNote = (note: string): Action => ({
    // type of action
    type: "ADD_NOTE",
    // the payload has the value from the function argument
    payload: note,
});
