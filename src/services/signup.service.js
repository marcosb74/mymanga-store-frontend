import axios from "axios";

export default async function signUserUp(user) {
  return await axios.post(process.env.BASE_URL + "/api/auth/signup", user);
}
