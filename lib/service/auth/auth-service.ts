import { jwtVerify } from "jose";
import api from "../api";
import Cookies from "js-cookie";

export const register = async (email: string, password: string) => {
  const data = await api
    .post(`auth/local/signup`, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.access_token) {
        Cookies.set("user", JSON.stringify(response.data));
        return response.data;
      }
    })
    .catch((error) => {
      throw error;
    });

  return data;
};

export const login = async (email: string, password: string) => {
  const data = await api
    .post(`auth/local/signin`, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.access_token) {
        Cookies.set("user", JSON.stringify(response.data));
        return response.data;
      }
    })
    .catch((error) => {
      throw error;
    });

  return data;
};

export const logout = async () => {
  const data = await api
    .post(`auth/logout`)
    .then((response) => {
      if (response.status === 200) {
        Cookies.remove("user");
        return response.data;
      }
    })
    .catch((error) => {
      throw error;
    });

  return data;
};

export const getCurrentUser = async () => {
  const response = await api.get(`auth/me`).catch((error) => {
    throw new Error(error);
  });

  return response.data;
};

export const verifyJWT = async <T>(token: string): Promise<T> => {
  try {
    return (
      await jwtVerify(
        token,
        new TextEncoder().encode(process.env.JWT_SECRET_KEY)
      )
    ).payload as T;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
