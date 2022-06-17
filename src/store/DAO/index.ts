import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const DAOSlice = createSlice({
    name: "dao",
    initialState,
    reducers: {
        setActiveTab: (state: any, action: PayloadAction<any>) => {
            state.activeTab = action.payload;
        },
        setModalOpen: (state: any, action: PayloadAction<any>) => {
            state.isModalOpen = action.payload;
        }   
    }
});

export const {
    setActiveTab,
    setModalOpen
} = DAOSlice.actions;

export default DAOSlice.reducer;