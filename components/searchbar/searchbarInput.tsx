import { ChangeEvent } from "react";

interface ISearchBarInput {
    label: string;
    options: string[];
    val: string;
    changeFunc: any;
}

const SearchbarInput = ({
    label,
    options,
    val,
    changeFunc,
}: ISearchBarInput) => {
    const change = (event: ChangeEvent<HTMLSelectElement>) => {
        changeFunc(event?.target?.value);
    };
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
                value={val}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => change(e)}
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
