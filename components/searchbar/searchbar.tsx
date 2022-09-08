import SearchbarInput from "./searchbarInput";
import { useState } from "react";

import { store } from "../../redux/store";
import { filterGames } from "../../redux/features/gamesSlice";

const Searchbar = ({ setPage }: any) => {
    const [category, setCategory] = useState("");
    const [platform, setPlatform] = useState("");
    const [sort, setSort] = useState("");

    const searchGames = () => {
        store.dispatch(filterGames({ platform, sort, category }));
        setPage(1);
    };

    return (
        <div className="searchbar">
            <h4 className="searchbar--text">Filter Games</h4>
            <div className="flex">
                <SearchbarInput
                    label="Choose Platform"
                    options={["All", "PC", "Browser"]}
                    val={platform}
                    changeFunc={setPlatform}
                />
                <SearchbarInput
                    label="Sort Games By"
                    options={[
                        "Release Date",
                        "Popularity",
                        "Alphabetical",
                        "Relevance",
                    ]}
                    val={sort}
                    changeFunc={setSort}
                />
                <SearchbarInput
                    label="Choose Category"
                    options={["MMORPG", "Shooter", "PVP", "MMOFPS"]}
                    val={category}
                    changeFunc={setCategory}
                />
            </div>
            <button className="searchbar--button" onClick={() => searchGames()}>
                Search for it
            </button>
        </div>
    );
};

export default Searchbar;
