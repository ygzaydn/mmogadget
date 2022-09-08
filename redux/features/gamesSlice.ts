import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = [{}];

export const getGames = createAsyncThunk("games/getGames", async () => {
    const response = await axios.get("https://mmo-games.p.rapidapi.com/games");
    return response.data;
});

export const filterGames = createAsyncThunk(
    "games/filterGames",
    async (data: { platform: string; sort: string; category: string }) => {
        const { platform, sort, category } = data;
        let url = "https://mmo-games.p.rapidapi.com/games?";
        if (platform) {
            url = url + `platform=${platform}&`;
        }
        if (sort) {
            url = url + `sort-by=${sort}&`;
        }
        if (category) {
            url = url + `category=${category}&`;
        }

        const response = await axios.get(url);
        return response.data;
    }
);

export const gamesSlice = createSlice({
    name: "games",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getGames.fulfilled, (state, action) => {
            state = action.payload;
            return state;
        });
        builder.addCase(filterGames.fulfilled, (state, action) => {
            state = action.payload;
            return state;
        });
    },
});

//export const { searchGames, getGames } = gamesSlice.actions;

export default gamesSlice.reducer;
