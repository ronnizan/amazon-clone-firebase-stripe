import axios from "axios";
import { axiosBaseUrl } from "../secrets";

const instance = axios.create({
  baseURL: axiosBaseUrl
});

export default instance;


