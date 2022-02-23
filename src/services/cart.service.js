import axios from "axios";
export async function getUserCart() {
  const token = localStorage.getItem("token");
  return await axios.get(process.env.BASE_URL + "/api/listing/cart", {
    headers: {
      Authorization: token, //the token is a variable which holds the token
    },
  });
}

export async function updateCart(cart) {
  const token = localStorage.getItem("token");
  return await axios.put(process.env.BASE_URL + "/api/listing/cart", cart, {
    headers: {
      Authorization: token, //the token is a variable which holds the token
    },
  });
}
export async function deleteItem(id) {
  const token = localStorage.getItem("token");
  return axios.delete(process.env.BASE_URL + "/api/listing/cart", {
    data: { id: id },
    headers: { Authorization: token },
  });
}
