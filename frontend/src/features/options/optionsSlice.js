import { createSlice } from "@reduxjs/toolkit";

// let option;

const initialState = {
    openOption: "hotels"
};

// const setOption = (state, action) => {
//     console.log(action.payload);
//     state.openOption = action.payload;
// };

const optionSlice = createSlice({
    name: "options",
    initialState,
    reducers: {
        setOption: (state, action) => {
            // console.log(action.payload);
            state.openOption = action.payload;
        }
    }
});

export const { setOption } = optionSlice.actions;

export default optionSlice.reducer;
