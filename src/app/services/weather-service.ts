import { AxiosResponse } from "axios";
import { ICapitalWeather } from "../Utility/interface/weather";
import httpClient from "./base-service";
import { WEATHER_API_BASE_URL, WEATHER_API_ACCESS_KEY } from "../constant";

export const axiosInstance = httpClient.create({
  baseURL: WEATHER_API_BASE_URL,
});

const getCapitalWeather = (
  capital: string
): Promise<AxiosResponse<ICapitalWeather>> =>
  axiosInstance.get(`weather?q=${capital}&appid=${WEATHER_API_ACCESS_KEY}`);

const exportedObject = {
  getCapitalWeather,
};

export default exportedObject;
