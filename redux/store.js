import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";
import gamesReducer from "./features/gamesSlice";

export const store = configureStore({
    reducer: {
        gamesState: gamesReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger).concat(thunk),
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
