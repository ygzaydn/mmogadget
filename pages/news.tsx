/* eslint-disable @next/next/no-img-element */
import Layout from "../components/layout/layout";

import { wrapper } from "../redux/store";
import { getNews, newsSlice } from "../redux/features/newsSlice";
import { store } from "../redux/store";
import { useEffect } from "react";

import Link from "next/link";

interface INews {
    id: number;
    title: string;
    short_description: string;
    thumbnail: string;
    main_image: string;
    article_content: string;
    article_url: string;
}

const Giveaway = (news: { news: INews[] }) => {
    useEffect(() => {
        store.dispatch(newsSlice.actions.getNews(news.news));
    }, [news]);

    return (
        <Layout>
            <section className="giveaway">
                <div className="gameDetail--navigationBar giveaway--navbar">
                    <Link href="/">Home</Link>
                    <span>{">"}</span>
                    <Link href="#">News</Link>
                </div>
                <h4 className="giveaway--title">Latest MMO News</h4>
                <h5 className="giveaway--text">
                    You can find the latest MMO news here, click links to deep
                    into details.
                </h5>
                <div className="giveaway--container">
                    {news?.news?.map((el) => (
                        <div className="giveawayItem" key={el.id}>
                            <img
                                src={el.thumbnail}
                                alt={el.title}
                                onClick={() =>
                                    (window.location.pathname = `news/${el.id}`)
                                }
                            />
                            <p className="giveawayItem--title">{el.title}</p>
                            <p className="giveawayItem--description">
                                {el.short_description}
                            </p>
                            <Link href={`/news/${el.id}`}>Read More</Link>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export default Giveaway;

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async () => {
        // we can set the initial state from here
        // we are setting to false but you can run your custom logic here
        const res = await store.dispatch(getNews());

        return {
            props: {
                news: res.payload,
            },
        };
    }
);
