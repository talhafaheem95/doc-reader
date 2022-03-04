import React, { FC, useState } from "react";

import userContext from "./userContext";
import { IApiScheme } from "../models/ApiScheme";
import { filterNavTitles } from "../helper/filterNavTitles";

const ProviderContext: FC = props => {
  const [tabSelected, setTabSelected] = useState<string>("");
  const [pageData, setPageData] = useState<Array<IApiScheme>>([]);
  const [navLinks, setNavLinks] = useState<Array<string>>([]);

  const setSelectedTab = (tabName: string) => {
    setTabSelected(tabName);
  };

  const setContent = (data: Array<IApiScheme>) => {
    setPageData(data);
    setNavLinks(filterNavTitles(data));
  };

  return (
    <React.Fragment>
      <userContext.Provider
        value={{
          selectedPage: tabSelected,
          pageData: pageData,
          setSelectedTab: setSelectedTab,
          setContent: setContent,
          navLinks: navLinks
        }}
      >
        {props.children}
      </userContext.Provider>
    </React.Fragment>
  );
};

export default ProviderContext;
