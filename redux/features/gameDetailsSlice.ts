import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {};

export const getGameDetail = createAsyncThunk(
    "gamesDetail/getGameDetail",
    async (id: number) => {
        const response = await axios.get(
            `https://mmo-games.p.rapidapi.com/game?id=${id}`
        );
        return response.data;
    }
);

export const gameDetailsSlice = createSlice({
    name: "gameDetail",
    initialState,
    reducers: {
        addGame(state, action: PayloadAction<object>) {
            state = action.payload;
            return state;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getGameDetail.fulfilled, (state, action) => {
            state = action.payload;
            return state;
        });
    },
});

export default gameDetailsSlice.reducer;
