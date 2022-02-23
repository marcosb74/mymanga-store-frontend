import axios from "axios";

export async function signUserIn(user) {
  await axios
    .post(process.env.REACT_APP_BASE_URL + "/api/auth/signin", user)
    .then((response) => {
      localStorage.setItem("token", JSON.stringify(response.data.token));
    });
}

export async function getCurrentUser() {
  const token = localStorage.getItem("token");
  return await axios.get(process.env.REACT_APP_BASE_URL + "/api/auth/profile", {
    headers: {
      Authorization: token, //the token is a variable which holds the token
    },
  });
  // header x props.
}
