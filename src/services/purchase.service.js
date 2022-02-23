import axios from "axios";

export async function postOrder(order) {
  console.log(order);
  await axios.post(
    process.env.REACT_APP_BASE_URL + "api/listing/checkout",
    order
  );
}
