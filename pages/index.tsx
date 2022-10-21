/* eslint-disable @next/next/no-img-element */
import Layout from "../components/layout/layout";

import { useEffect, useState } from "react";
import { store } from "../redux/store";
import { useSelector } from "react-redux";
import { getGames } from "../redux/features/gamesSlice";
import { getNews } from "../redux/features/newsSlice";
import { getGiveaways } from "../redux/features/giveawaySlice";

import { Gamecard, Button, HoverLink } from "../components";

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

interface INews {
    id: number;
    title: string;
    short_description: string;
    thumbnail: string;
    main_image: string;
    article_content: string;
    article_url: string;
}

interface IGiveaway {
    id: number;
    title: string;
    keys_left: string;
    thumbnail: string;
    main_image: string;
    short_description: string;
    giveaway_url: string;
}

interface state {
    gamesState: IGames[];
    newsState: INews[];
    giveawayState: IGiveaway[];
}

const Home = () => {
    const [page, setPage] = useState(1);
    const selector = useSelector((state: state) => state.gamesState);
    const newsSelector = useSelector((state: state) => state.newsState);
    const giveawaySelector = useSelector((state: state) => state.giveawayState);

    useEffect(() => {
        store.dispatch(getGames());
        store.dispatch(getNews());
        store.dispatch(getGiveaways());
    }, []);

    const pageLimit = 10;

    const handlePage = (num: number) => {
        setPage(page + num);
        window.scrollTo({
            top: 800,
            behavior: "smooth",
        });
    };

    return (
        <Layout>
            <main className="homepageContainer">
                <div className="landingImage">
                    <video
                        autoPlay
                        muted
                        loop
                        id="myVideo"
                        className="landingImage--video"
                    >
                        <source src="/video/video2.mp4" type="video/mp4" />
                    </video>
                    {/*<img
                        src="images/background.webp"
                        alt="landingImage"
                        className="landingImage--image"
    />*/}
                    <h1 className="landingImage--text">MMOGadget</h1>
                    <div className="landingImage--subdiv">
                        {/*<h5 className="landingImage--subtext">
                            MMO Gadget serves you free MMO games all around the
                            world
</h5>*/}
                        <img
                            src="images/scrolldown.gif"
                            alt="scrolldowngif"
                            className="landingImage--gif"
                            onClick={() =>
                                window.scrollTo({
                                    top: 400,
                                    behavior: "smooth",
                                })
                            }
                        />
                    </div>
                </div>

                <div className="infoGrid">
                    <img
                        src="/images/console-opt.gif"
                        alt="gif"
                        className="infoGrid--gif"
                    />
                    <div className="infoGrid--text">
                        <h2>One platform to rule them all</h2>
                        <h4>
                            MMOGadget will guide you to choose your next game,
                            you do not need another platform. <br />
                            You can find latest MMO news, giveaways and games.
                        </h4>
                    </div>
                </div>

                <div className="gamesGrid">
                    <div className="gamesGrid--text">
                        <h2>Games</h2>
                        <HoverLink
                            text="Click for more"
                            href="/games"
                            color="primary"
                        />
                    </div>
                    <div className="gamesGrid--games">
                        {selector?.slice(0, 4).map((el: IGames) => (
                            <Gamecard
                                title={el.title}
                                thumbnail={el.thumbnail}
                                key={el.title}
                                platform={el.platform}
                                genre={el.genre}
                                developer={el.developer}
                                description={el.short_description}
                                id={el.id}
                            />
                        ))}
                    </div>
                    <div className="gamesGrid--subtext">
                        <Button href="/games" text="Browse more games" wider />
                    </div>
                </div>
                <div className="secondColor">
                    <div className="newsGrid">
                        <div className="newsGrid--text">
                            <h2>News</h2>
                            <HoverLink
                                text="Click for more"
                                href="/news"
                                color="secondary"
                            />
                        </div>
                        <div className="newsGrid--news">
                            {newsSelector?.slice(0, 5).map((el: INews) => (
                                <div className="giveawayItem" key={el.id}>
                                    <a href={`news/${el.id}`}>
                                        {" "}
                                        <img
                                            src={el.thumbnail}
                                            alt={el.title}
                                        />
                                    </a>
                                    <p className="giveawayItem--title">
                                        {el.title?.length > 70
                                            ? el.title.slice(0, 70) + "..."
                                            : el.title}
                                    </p>
                                    <p className="giveawayItem--description">
                                        {el.short_description?.length > 70
                                            ? el.short_description.slice(
                                                  0,
                                                  70
                                              ) + "..."
                                            : el.short_description}
                                    </p>
                                    <span style={{ margin: "auto 0 .25rem 0" }}>
                                        <Button
                                            href={`news/${el.id}`}
                                            text="Read More"
                                        />
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="gamesGrid--subtext">
                            <Button
                                href="/news"
                                text="Browse more news"
                                wider
                            />
                        </div>
                    </div>
                </div>

                <div className="giveawayGrid">
                    <div className="giveawayGrid--text">
                        <h2>Giveaways</h2>
                        <HoverLink
                            text="Click for more"
                            href="/giveaways"
                            color="primary"
                        />
                    </div>
                    <div className="giveawayGrid--giveaways">
                        {giveawaySelector?.slice(0, 5).map((el: IGiveaway) => (
                            <div className="giveawayItem" key={el.id}>
                                <img
                                    src={el.thumbnail}
                                    alt={el.title}
                                    onClick={() =>
                                        (window.location.href = el.giveaway_url)
                                    }
                                />
                                <p className="giveawayItem--title">
                                    {el.title?.length > 70
                                        ? el.title.slice(0, 70) + "..."
                                        : el.title}
                                </p>
                                <p className="giveawayItem--description">
                                    {el.short_description?.length > 70
                                        ? el.short_description.slice(0, 70) +
                                          "..."
                                        : el.short_description}
                                </p>
                                <div style={{ margin: "auto 0 .25rem 0" }}>
                                    <Button
                                        href={el.giveaway_url || ""}
                                        text="Obtain Gift"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="gamesGrid--subtext">
                        <Button
                            href="/giveaways"
                            text="Browse more giveaways"
                            wider
                        />
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default Home;

/*export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async () => {
        // we can set the initial state from here
        // we are setting to false but you can run your custom logic here
        const res = await store.dispatch(getGames());
        return {
            props: {
                games: res.payload,
            },
        };
    }
);*/
