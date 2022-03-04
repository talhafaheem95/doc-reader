import React, { FC, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import userContext from "../../context/userContext";
import { IApiScheme } from "../../models/ApiScheme";
import MainTemplate from "../../component/MainTemplate/MainTemplate";

const DocViewerContainer: FC = () => {
  const navigate = useNavigate();

  const { pageData, selectedPage, navLinks } = useContext(userContext);
  const [contentData, setContentData] = useState<IApiScheme>({
    title: "",
    bodyText: ""
  });

  useEffect(() => {
    if (pageData?.length <= 0) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    filterData();
    window.scrollTo(0, 0);
  }, [selectedPage]);

  const filterData = () => {
    let filterProp = pageData?.find(
      (data: IApiScheme) => selectedPage === data.title
    );
    setContentData(
      filterProp || {
        title: "",
        bodyText: ""
      }
    );
  };

  return (
    <React.Fragment>
      <MainTemplate contentData={contentData} navLinks={navLinks} />
    </React.Fragment>
  );
};
export default DocViewerContainer;
