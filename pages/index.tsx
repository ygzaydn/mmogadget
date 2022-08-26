import Layout from "../components/layout/layout";

import { useEffect } from "react";
import { store } from "../redux/store";
import { useSelector } from "react-redux";
import { getGames } from "../redux/features/gamesSlice";

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
    const selector = useSelector((state: state) => state.gamesState);

    useEffect(() => {
        store.dispatch(getGames());
    }, []);
    console.log(process.env.REACT_APP_KEY);
    return (
        <Layout>
            <main className="homepageContainer">
                <div className="landingImage">
                    <img
                        src="images/background.jpg"
                        alt="landingImage"
                        className="landingImage--image"
                    />
                    <h1 className="landingImage--text">
                        Time to find MMO to play!
                    </h1>
                    <div className="landingImage--subdiv">
                        <h5 className="landingImage--subtext">
                            MMO Gadgets serves you free MMO gammes all around
                            the world
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
                <div className="searchbar">
                    <h4 className="searchbar--text">Filter Games</h4>
                    <div className="flex">
                        <div className="searchInput">
                            <label
                                className="searchInput--label"
                                htmlFor="cars"
                            >
                                Choose a car:
                            </label>
                            <select
                                name="cars"
                                id="cars"
                                className="searchbar--select"
                            >
                                <optgroup label="Select Platform">
                                    <option value=""></option>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                </optgroup>
                            </select>
                        </div>

                        <div className="searchInput">
                            <label
                                className="searchInput--label"
                                htmlFor="cars"
                            >
                                Choose a car:
                            </label>
                            <select
                                name="cars"
                                id="cars"
                                className="searchbar--select"
                            >
                                <optgroup label="Select Platform">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                </optgroup>
                            </select>
                        </div>

                        <div className="searchInput">
                            <label
                                className="searchInput--label"
                                htmlFor="cars"
                            >
                                Choose a car:
                            </label>
                            <select
                                name="cars"
                                id="cars"
                                className="searchbar--select"
                            >
                                <optgroup label="Select Platform">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    {selector?.map((el: IGames) => (
                        <div
                            key={el.title}
                            style={{
                                position: "relative",
                            }}
                        >
                            <img
                                src={el.thumbnail}
                                alt={el.title + " thumbnail-img"}
                                style={{
                                    boxShadow:
                                        "inset 0px -40px 5px 0px rgba(0,0,0,0.75)",
                                }}
                            />
                            <p
                                style={{
                                    position: "absolute",
                                    bottom: "5%",
                                    left: "2%",
                                    color: "orange",
                                }}
                            >
                                {el.title}
                            </p>
                        </div>
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
