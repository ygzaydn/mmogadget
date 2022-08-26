import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = [{}];

export const getGames = createAsyncThunk("games/getGames", async () => {
    const response = await axios.get("https://mmo-games.p.rapidapi.com/games");
    return response.data;
});

export const gamesSlice = createSlice({
    name: "games",
    initialState,
    reducers: {
        searchGames: (state, action) => {
            state.games = action.payload.games;
        },
        deneme: (state, action) => ({
            ...state,
            games: 1,
        }),
    },
    extraReducers: (builder) => {
        builder.addCase(getGames.fulfilled, (state, action) => {
            state = action.payload;
            return state;
        });
    },
});

export const { searchGames, deneme } = gamesSlice.actions;

export default gamesSlice.reducer;
