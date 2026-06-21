import api from "./api";

export const placeOrder = async () => {
  const response = await api.post("/orders/place");
  return response.data;
};

export const getOrders = async () => {
  const response = await api.get("/orders/my");
  return response.data.orders;
};