import React, { FC } from "react";

interface IProps {
  setSearch: (searchString: string) => void;
  getSearchData: () => void;
}

const SearchComponent: FC<IProps> = ({ setSearch, getSearchData }) => {
  return (
    <div className="searchComponent">
      <h1>Enter API Endpoint</h1>
      <div className="searchWrapper">
        <input
          name="search"
          onChange={e => {
            setSearch(e.target.value);
          }}
        />
        <button className="defaultButton" onClick={getSearchData}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
