import axios from "axios";

let baseURL;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:8080/";
} else {
  baseURL = "http://192.168.1.16:8080";
}

export const HTTP = axios.create({
  baseURL: baseURL
});
