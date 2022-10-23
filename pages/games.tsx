/* eslint-disable @next/next/no-img-element */
import Layout from "../components/layout/layout";

import { useEffect, useState } from "react";
import { store } from "../redux/store";
import { useSelector } from "react-redux";
import { getGames } from "../redux/features/gamesSlice";

import { Searchbar, Gamecard, Pagination } from "../components";
import Link from "next/link";

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

const Home = () => {
  const [page, setPage] = useState(1);
  const selector = useSelector((state: state) => state.gamesState);

  useEffect(() => {
    store.dispatch(getGames());
  }, []);

  const pageLimit = 10;

  return (
    <Layout>
      <main className="homepageContainer">
        <div className="gameDetail--navigationBar homepageContainer--navigationBar">
          <Link href="/">Home</Link>
          <span>{">"}</span>
          <Link href="#">Games</Link>
        </div>

        <Searchbar setPage={setPage} />

        <div className="buttonContainer">
          <Link href="/giveaways" className="button">
            Latest MMO Giveaways
          </Link>
          <Link href="/news" className="button">
            Latest MMO News
          </Link>
        </div>
        <div className="gamesContainer">
          {selector
            ?.slice((page - 1) * pageLimit, page * pageLimit)
            .map((el: IGames) => (
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
        <Pagination pageNum={page} pageFunc={setPage} />
      </main>
    </Layout>
  );
};

export default Home;
