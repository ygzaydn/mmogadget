/* eslint-disable @next/next/no-img-element */
import Layout from "../../components/layout/layout";

import { wrapper } from "../../redux/store";
import {
    gameDetailsSlice,
    getGameDetail,
} from "../../redux/features/gameDetailsSlice";
import { store } from "../../redux/store";
import { useEffect } from "react";
import { SystemRequirements, Platform } from "../../components";

interface IGames {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    description: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    profile_url: string;
    minimum_system_requirements?: {
        graphics: string;
        memory: string;
        os: string;
        processor: string;
        storage: string;
    };
    screenshots: object[];
    status: string;
}

const GameDetails = (game: { game: IGames }) => {
    useEffect(() => {
        store.dispatch(gameDetailsSlice.actions.addGame(game.game));
    }, [game]);

    const {
        description,
        developer,
        game_url,
        minimum_system_requirements,
        platform,
        profile_url,
        publisher,
        release_date,
        screenshots,
        status,
        title,
        thumbnail,
    } = game.game;
    return (
        <Layout>
            <section className="gameDetail">
                <div className="gameDetail--leftGrid">
                    <img
                        src={thumbnail}
                        alt={`${title}-thumbnail`}
                        className="gameDetail--thumbnail"
                    />

                    {minimum_system_requirements && (
                        <SystemRequirements
                            systemReq={minimum_system_requirements}
                        />
                    )}

                    <div className="gameDetail--platform">
                        <span>
                            <p>Publisher </p>
                            <p className="white"> {publisher}</p>
                        </span>

                        <span>
                            <p>Developer </p>
                            <p className="white"> {developer}</p>
                        </span>
                        <span>
                            <p>Platform</p>
                            <Platform platform={platform} />
                        </span>
                    </div>
                </div>
                <div className="gameDetail--rightGrid"></div>
            </section>
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
                game: res.payload,
            },
        };
    }
);
