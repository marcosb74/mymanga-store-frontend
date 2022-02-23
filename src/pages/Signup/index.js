import React, { useState } from "react";
import Swal from "sweetalert2";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import signUserUp from "../../services/signup.service";
import { useNavigate } from "react-router-dom";
import { postImage } from "../../services/image.service";
const Signup = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [newUser, setNewUser] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    validation: "",
    address: "",
    phone: 0,
    country: "",
    age: 0,
    avatar: null,
  });
  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  let list = [];

  for (let i = 18; i <= 90; i++) {
    list.push(i);
  }

  const theme = createTheme();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newUser.password !== newUser.validation) {
      return Swal.fire(
        "Ups!",
        "Please check your passwords, they are not match",
        "warning"
      );
    }
    if (
      newUser.name === "" ||
      newUser.lastname === "" ||
      newUser.email === "" ||
      newUser.address === "" ||
      newUser.phone === 0
    ) {
      return Swal.fire(
        "Oh-oh!",
        "Please check that you're filling all fields!",
        "warning"
      );
    }
    const urlPic = await uploadImage(image);
    if (urlPic) {
      const updatedUser = { ...newUser, avatar: urlPic.data.url };
      setNewUser(updatedUser);
      const response = await signUserUp(updatedUser);
      if (response.data.error == "Email taken") {
        Swal.fire(
          "Ups!",
          "The email you're trying to register is taken ",
          "error"
        );
      } else {
        Swal.fire(
          "Welcome!",
          "You have successfully been registered to the store, you may Sign-In now! ",
          "success"
        );
        navigate("/signin");
      }
    } else {
      Swal.fire(
        "Oh-oh!",
        "Please make sure you are uploading an image",
        "warning"
      );
    }
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "mzlgejmd"); // PASAR A ENV
    const response = await postImage(formData);
    return response;
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form
            /*              component="form"
            noValidate
            sx={{ mt: 3 }} */
            onSubmit={(e) => handleSubmit(e)}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="First Name"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastname"
                  label="Last Name"
                  name="lastname"
                  autoComplete="family-name"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="validation"
                  label="Re-enter Password"
                  type="password"
                  id="validation"
                  autoComplete="new-password"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="address"
                  label="Address"
                  type="text"
                  id="address"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="Phone"
                  type="number"
                  id="phone"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="country"
                  label="Country"
                  type="text"
                  id="country"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  type="file"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl sx={{ minWidth: 80 }}>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    /*value={age}*/
                    label="Age"
                    name="age"
                    onChange={handleChange}
                  >
                    {list.map((i) => (
                      <MenuItem value={i} key={i}>
                        {i}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="By checking this, I accept the ToS"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Signup;
