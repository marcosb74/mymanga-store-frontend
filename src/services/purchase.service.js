import axios from "axios";

export async function postOrder(order) {
  console.log(order);
  await axios.post(process.env.BASE_URL + "/api/listing/checkout", order);
}
