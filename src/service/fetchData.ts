import { IApiResponse } from "../models/ApiScheme";

export const fetchData = async (url: string): Promise<IApiResponse> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
