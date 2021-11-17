import axios, { AxiosError, AxiosResponse } from "axios";
// import { COUNTRIES_API_BASE_URL, WEATHER_API_BASE_URL } from "../constant";
import { HttpStatusCodes } from "../Utility/enums/http-status-codes";
import { toast } from "react-toastify";

// export const axiosInstance = axios.create({
//   baseURL: COUNTRIES_API_BASE_URL,
// });

const httpClient = axios;

httpClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    switch (error.response?.status) {
      case HttpStatusCodes.Unauthorized:
      case HttpStatusCodes.BadRequest:
      case HttpStatusCodes.ConflictError:
        break;
      case HttpStatusCodes.InternalServerError:
        if (process.env.NODE_ENV === "development") {
          toast.error("Internal Server Error");
        } else {
          toast.error("Something went wrong");
        }
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

export default httpClient;
