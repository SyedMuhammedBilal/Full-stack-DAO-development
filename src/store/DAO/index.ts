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
        },
        setPassRate: (state: any, action: PayloadAction<any>) => {
            state.passRate = action.payload;
        },
        setTotalProposal: (state: any, action: PayloadAction<any>) => {
            state.totalProposal = action.payload;
        },
        setCount: (state: any, action: PayloadAction<any>) => {
            state.count = action.payload;
        }, 
        setForVote: (state: any, action: PayloadAction<any>) => {
            state.forVote = action.payload;
        },
        setAgainstVote: (state: any, action: PayloadAction<any>) => {
            state.againstVote = action.payload;
        }  
    }
});

export const {
    setActiveTab,
    setModalOpen,
    setPassRate,
    setTotalProposal,
    setCount,
    setForVote,
    setAgainstVote
} = DAOSlice.actions;

export default DAOSlice.reducer;