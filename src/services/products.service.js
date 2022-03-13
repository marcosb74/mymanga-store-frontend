import axios from "axios";

export default async function fetchProducts() {
  return await axios.get(
    process.env.REACT_APP_BASE_URL + "api/listing/products"
  );
}
