import React, { FC, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchComponent from "../../component/LandingPage/SearchComponent";
import { fetchData } from "../../service/fetchData";
import userContext from "../../context/userContext";
import Loader from "../../component/Loader";

const SearchContainer: FC = () => {
  const navigate = useNavigate();

  const { setContent } = useContext(userContext);

  const [url, setUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const setSearch = (search: string) => {
    setUrl(search);
  };

  const getSearchData = async () => {
    try {
      setLoading(true);

      const data = await fetchData(url);
      if (data) {
        let pages = data?.Pages;
        setLoading(false);
        setContent(pages);
        navigate("/doc");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <React.Fragment>
      <Loader loading={loading} />
      <SearchComponent setSearch={setSearch} getSearchData={getSearchData} />
    </React.Fragment>
  );
};

export default SearchContainer;
