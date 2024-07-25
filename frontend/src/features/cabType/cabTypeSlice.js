import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openCabType: "outStationOneWay"
};

const openCabTypeSlice = createSlice({
    name: "cabType",
    initialState,
    reducers: {
        setCabType: (state, action) => {
            state.openCabType = action.payload;
        }
    }
});

export const { setCabType } = openCabTypeSlice.actions;

export default openCabTypeSlice.reducer;