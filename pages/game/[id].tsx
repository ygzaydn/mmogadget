/* eslint-disable @next/next/no-img-element */
import Layout from "../../components/layout/layout";

import { useEffect, useState } from "react";
import { store, wrapper } from "../../redux/store";
import { useSelector } from "react-redux";
import { getGameDetail } from "../../redux/features/gameDetailsSlice";

import { Searchbar, Gamecard } from "../../components";

interface IGames {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    profile_url: string;
}

interface state {
    gamesState: IGames[];
}

const GameDetails = () => {
    return (
        <Layout>
            <div>asd</div>
        </Layout>
    );
};

export default GameDetails;

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {
        const id = parseInt(context.resolvedUrl.split("/game/")[1]);
        // we can set the initial state from here
        // we are setting to false but you can run your custom logic here
        const res = await store.dispatch(getGameDetail(id));
        return {
            props: {
                games: res.payload,
            },
        };
    }
);
