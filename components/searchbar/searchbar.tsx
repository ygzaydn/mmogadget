import SearchbarInput from "./searchbarInput";

const Searchbar = () => {
  return (
    <div className="searchbar">
      <h4 className="searchbar--text">Filter Games</h4>
      <div className="flex">
        <SearchbarInput label="Choose a car" options={["Volvo", "Saab"]} />
        <SearchbarInput label="Choose a car" options={["Volvo", "Saab"]} />
        <SearchbarInput label="Choose a car" options={["Volvo", "Saab"]} />
      </div>
      <button className="searchbar--button">Search for it</button>
    </div>
  );
};

export default Searchbar;
