import axios from "axios";

export async function signUserIn(user) {
  await axios
    .post(process.env.BASE_URL + "/api/auth/signin", user)
    .then((response) => {
      localStorage.setItem("token", JSON.stringify(response.data.token));
    });
}

export async function getCurrentUser() {
  const token = localStorage.getItem("token");
  return await axios.get(process.env.BASE_URL + "/api/auth/profile", {
    headers: {
      Authorization: token, //the token is a variable which holds the token
    },
  });
  // header x props.
}
