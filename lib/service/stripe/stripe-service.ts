import api from "../api";

export const getStripe = async () => {
  const response = await api.get("/stripe");

  return response.data;
};
