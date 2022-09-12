/* eslint-disable @next/next/no-img-element */
import Layout from "../../components/layout/layout";

import { wrapper } from "../../redux/store";
import { getNews } from "../../redux/features/newsSlice";

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

const GameDetails = (news: { news: INews }) => {
    return (
        <Layout>
            <section className="gameDetail">
                <div className="gameDetail--leftGrid">
                    <div className="gameDetail--navigationBar">
                        <Link href="/">Home</Link>
                        <span>{">"}</span>
                        <Link href="/news">News</Link>
                        <span>{">"}</span>
                        <Link href="#">{news.news.title}</Link>
                    </div>
                    <img
                        src={news.news.thumbnail}
                        alt={`${news.news.title}-thumbnail`}
                        className="gameDetail--thumbnail"
                    />
                    <p className="white">{news.news.short_description}</p>
                    <div className="buttonContainer">
                        <Link href={news.news.article_url} className="button">
                            Read More
                        </Link>
                    </div>
                </div>
                <div className="gameDetail--rightGrid">
                    <p className="gameDetail--title">{news.news.title}</p>
                    <div
                        className="gameDetail--description"
                        dangerouslySetInnerHTML={{
                            __html: news.news.article_content,
                        }}
                    ></div>
                </div>
            </section>
        </Layout>
    );
};

export default GameDetails;

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {
        const id = parseInt(context.resolvedUrl.split("/news/")[1]);
        // we can set the initial state from here
        // we are setting to false but you can run your custom logic here
        const res = await store.dispatch(getNews());

        return {
            props: {
                news: res.payload.filter((el: INews) => el.id === id)[0],
            },
        };
    }
);
