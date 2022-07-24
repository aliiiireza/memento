import axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const instance = axios.create({
  baseURL: publicRuntimeConfig.backendUrl || "http://localhost:8000/api/",
  withCredentials: true,
});

export default instance;
