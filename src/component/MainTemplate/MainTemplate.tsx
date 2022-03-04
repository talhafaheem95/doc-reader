import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import SideBar from "../SideBar";
import { IApiScheme } from "../../models/ApiScheme";

interface IDocProps {
  navLinks: Array<string>;
  contentData: IApiScheme;
}

const MainTemplate: FC<IDocProps> = ({ navLinks, contentData }) => {
  const navigate = useNavigate();

  return (
    <div className="mainTemplate">
      <SideBar navLinks={navLinks} />
      <main className="templateBody">
        <div className="bodyHeading">
          <div className="headingBar">
            <h1>{contentData.title}</h1>
            <button
              className="defaultButton smbtn"
              onClick={() => {
                navigate("/");
              }}
            >
              Back
            </button>
          </div>
        </div>
        <div className="bodyContent">
          <pre> {contentData.bodyText} </pre>
        </div>
      </main>
    </div>
  );
};
export default MainTemplate;
