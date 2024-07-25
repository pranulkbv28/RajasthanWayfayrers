import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    from: "",
    to: "",
    pickupDate: "",
    pickupTime: "",
    dropDate: "",
    dropTime: ""
};

const inputSlice = createSlice({
    name: "input",
    initialState,
    reducers: {
        inputChange: (state, action) => {
            const { name, value } = action.payload;
            state[name] = value;
        }
    }
});

export const { inputChange } = inputSlice.actions;

export default inputSlice.reducer;