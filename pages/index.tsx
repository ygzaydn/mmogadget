import Layout from "../components/layout/layout";

import { useEffect, useState } from "react";
import { store } from "../redux/store";
import { useSelector } from "react-redux";
import { getGames } from "../redux/features/gamesSlice";

import { Searchbar, Gamecard } from "../components";

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

  return (
    <Layout>
      <main className="homepageContainer">
        <div className="landingImage">
          <img
            src="images/background.jpg"
            alt="landingImage"
            className="landingImage--image"
          />
          <h1 className="landingImage--text">Time to find MMO to play!</h1>
          <div className="landingImage--subdiv">
            <h5 className="landingImage--subtext">
              MMO Gadget serves you free MMO games all around the world
            </h5>
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

        <Searchbar />

        <div className="gamesContainer">
          {selector?.slice((page - 1) * 30, page * 30).map((el: IGames) => (
            <Gamecard
              title={el.title}
              thumbnail={el.thumbnail}
              key={el.title}
            />
          ))}
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
