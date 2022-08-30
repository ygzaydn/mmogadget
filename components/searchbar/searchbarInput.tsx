interface ISearchBarInput {
  label: string;
  options: string[];
}

const SearchbarInput = ({ label, options }: ISearchBarInput) => {
  return (
    <div className="searchInput">
      <label className="searchInput--label" htmlFor="cars">
        {label}
      </label>
      <select
        name={label.trim()}
        id={label.trim()}
        className="searchbar--select"
        placeholder={label}
      >
        <option value=""></option>
        {options.map((el) => (
          <option key={el} value={el.toLowerCase()}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchbarInput;
