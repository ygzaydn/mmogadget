import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = [{}];

export const getGiveaways = createAsyncThunk("games/getGames", async () => {
    const response = await axios.get(
        "https://mmo-games.p.rapidapi.com/giveaways"
    );

    return response.data;
});

export const giveawaySlice = createSlice({
    name: "giveaways",
    initialState,
    reducers: {
        getGiveaway(state, action: PayloadAction<object[]>) {
            state = action.payload;
            return state;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getGiveaways.fulfilled, (state, action) => {
            state = action.payload;
            return state;
        });
    },
});

//export const { searchGames, getGames } = gamesSlice.actions;

export default giveawaySlice.reducer;
