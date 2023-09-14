import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: process.env.BACK_END_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    if (config.url !== "/auth/refresh") {
      const cookies = Cookies.get("user");
      if (cookies) {
        const { access_token } = JSON.parse(cookies);

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

api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const cookies = Cookies.get("user");

    if (cookies) {
      const originalConfig = err.config;
      const { refresh_token } = JSON.parse(cookies);
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        if (originalConfig.url !== "/auth/refresh") {
          originalConfig._retry = true;

          try {
            const response = await api.post(
              `/auth/refresh`,
              {},
              {
                headers: {
                  Authorization: `Bearer ${refresh_token}`,
                },
              }
            );

            Cookies.set("user", JSON.stringify(response.data));

            return api(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }

      return Promise.reject(err);
    }
    return Promise.reject(err);
  }
);

export default api;
