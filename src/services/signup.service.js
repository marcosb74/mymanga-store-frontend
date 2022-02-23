import axios from "axios";

export default async function signUserUp(user) {
  return await axios.post(
    process.env.REACT_APP_BASE_URL + "api/auth/signup",
    user
  );
}
