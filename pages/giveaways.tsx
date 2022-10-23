/* eslint-disable @next/next/no-img-element */
import Layout from "../components/layout/layout";

import { wrapper } from "../redux/store";
import { getGiveaways, giveawaySlice } from "../redux/features/giveawaySlice";
import { store } from "../redux/store";
import { useEffect } from "react";

import { Button } from "../components";
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

  return (
    <Layout>
      <section className="giveaway">
        <div className="gameDetail--navigationBar giveaway--navbar">
          <Link href="/">Home</Link>
          <span>{">"}</span>
          <Link href="#">Giveaways</Link>
        </div>
        <h4 className="giveaway--title">Giveaways</h4>
        <h5 className="giveaway--text">
          You can find giveaways here, click link to obtain gift. They
          {"'"}re all free.
        </h5>
        <div className="giveaway--container">
          {giveaway?.giveaway?.map((el) => (
            <div className="giveawayItem" key={el.id}>
              <img
                src={el.thumbnail}
                alt={el.title}
                onClick={() => (window.location.href = el.giveaway_url)}
              />
              <p className="giveawayItem--title">{el.title}</p>
              <p className="giveawayItem--description">
                {el.short_description}
              </p>
              <Button href={el.giveaway_url} text="Obtain Gift" align />
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
    const res = await store.dispatch(getGiveaways());

    return {
      props: {
        giveaway: res.payload,
      },
    };
  }
);
