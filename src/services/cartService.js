import api from "./api";

export const addToCart = async (
  product_id,
  quantity = 1
) => {
  const response = await api.post("/cart/add", {
    product_id,
    quantity,
  });

  return response.data;
};

export const getCart = async () => {
  const response = await api.get("/cart/view");
  return response.data.cart;
};

export const updateCart = async (
  product_id,
  quantity
) => {
  const response = await api.put("/cart/update", {
    product_id,
    quantity,
  });

  return response.data;
};

export const removeFromCart = async (
  product_id
) => {
  const response = await api.delete(
    `/cart/remove/${product_id}`
  );

  return response.data;
};