import React from "react";
import { IContext } from "../models/Interfaces";
import { IApiScheme } from "../models/ApiScheme";
const defaultState = {
  selectedPage: "",
  pageData: [],
  navLinks:[],
  setSelectedTab: (tabName: string) => {},
  setContent: (data: Array<IApiScheme>) => {}
};

const userContext = React.createContext<IContext>(defaultState);
userContext.displayName = "UserContext";
export default userContext;
