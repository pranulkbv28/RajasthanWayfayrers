import { configureStore } from "@reduxjs/toolkit";
import optionReducer from "../features/options/optionsSlice";
import cabTypeReducer from "../features/cabType/cabTypeSlice";
import inputReducer from "../features/inputs/inputsSLice";
import userReducer from "../features/user/userSlice";

const store = configureStore({
    reducer: { optionReducer, cabTypeReducer, inputReducer, userReducer }
});

export default store;