import axios from "axios";
import { cookies } from "next/headers";

const apiServer = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    "Content-Type": "application/json",
  },
});

apiServer.interceptors.request.use(
  (config) => {
    if (config.url !== "/auth/refresh" && config.url !== "/auth/sign-in") {
      const cookieStore = cookies();
      const auth_cookies = cookieStore.get("user");

      if (auth_cookies) {
        const { access_token } = JSON.parse(auth_cookies.value);

        if (access_token) {
          config.headers["Authorization"] = "Bearer " + access_token; // for Spring Boot back-end
          //   config.headers["x-access-token"] = token; // for Node.js Express back-end
        }
        return config;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiServer;
