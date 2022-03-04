import { IApiScheme } from "./ApiScheme";

export interface IContext {
  selectedPage: string;
  pageData: Array<IApiScheme>;
  navLinks: Array<string>;
  setSelectedTab: (tabName: string) => void;
  setContent: (data: Array<IApiScheme>) => void;
}
