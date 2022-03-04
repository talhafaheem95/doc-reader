import { IApiScheme } from "../models/ApiScheme";

export const filterNavTitles = (data: Array<IApiScheme>): Array<string> => {
  return data?.reduce((final: Array<string>, data: IApiScheme) => {
    return [...final, data.title];
  }, []);
};
