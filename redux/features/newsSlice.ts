import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = [{}];

export const getNews = createAsyncThunk("news/getNews", async () => {
    const response = await axios.get(
        "https://mmo-games.p.rapidapi.com/latestnews"
    );

    return response.data;
});

export const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        getNews(state, action: PayloadAction<object[]>) {
            state = action.payload;
            return state;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getNews.fulfilled, (state, action) => {
            state = action.payload;
            return state;
        });
    },
});

//export const { searchGames, getGames } = gamesSlice.actions;

export default newsSlice.reducer;
