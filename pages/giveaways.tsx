/* eslint-disable @next/next/no-img-element */
import Layout from "../components/layout/layout";

import { wrapper } from "../redux/store";
import { getGiveaways, giveawaySlice } from "../redux/features/giveawaySlice";
import { store } from "../redux/store";
import { useEffect } from "react";

import Link from "next/link";

interface IGiveaway {
    id: number;
    title: string;
    keys_left: string;
    thumbnail: string;
    main_image: string;
    short_description: string;
    giveaway_url: string;
}

const Giveaway = (giveaway: { giveaway: IGiveaway[] }) => {
    useEffect(() => {
        store.dispatch(giveawaySlice.actions.getGiveaway(giveaway.giveaway));
    }, [giveaway]);
    console.log(giveaway);
    return (
        <Layout>
            <section className="giveawayContainer">
                {giveaway?.giveaway?.map((el) => (
                    <div className="giveawayItem" key={el.id}>
                        <img src={el.thumbnail} alt={el.title} />
                        <p className="giveawayItem--title">{el.title}</p>
                        <p className="giveawayItem--description">
                            {el.short_description}
                        </p>
                        <Link href={el.giveaway_url}>Obtain gift</Link>
                    </div>
                ))}
            </section>
        </Layout>
    );
};

export default Giveaway;

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async () => {
        // we can set the initial state from here
        // we are setting to false but you can run your custom logic here
        const res = await store.dispatch(getGiveaways());

        return {
            props: {
                giveaway: res.payload,
            },
        };
    }
);
