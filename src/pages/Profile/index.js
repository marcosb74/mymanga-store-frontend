import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  CardHeader,
  TextField,
} from "@mui/material";
import { getCurrentUser } from "../../services/signin.service";
const Profile = () => {
  const [user, setUser] = useState({});
  const [values, setValues] = useState({});

  useEffect(async () => {
    function fetchProfile() {
      return getCurrentUser();
    }
    const fetchedUser = await fetchProfile();
    if (typeof fetchedUser.data == "string") {
      //swal de que loguee
    } else {
      setUser(fetchedUser.data);
    }
  }, []);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography sx={{ mb: 3 }} variant="h4">
            My Profile
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Avatar
                      src={user.avatar}
                      sx={{
                        height: 64,
                        mb: 2,
                        width: 64,
                      }}
                    />
                    <Typography color="textPrimary" gutterBottom variant="h5">
                      {user.name} {user.lastname}
                    </Typography>
                    <Typography color="textSecondary" variant="body2">
                      {user.country}
                    </Typography>
                    <Typography color="textSecondary" variant="body2">
                      {user.isAdmin && "This user is Superadmin"}
                    </Typography>
                  </Box>
                </CardContent>
                <Divider />
                <CardActions>
                  <Button color="primary" fullWidth variant="text">
                    Upload picture
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item lg={8} md={6} xs={12}>
              <form autoComplete="off" noValidate>
                <Card>
                  <CardHeader
                    subheader="The information can be edited"
                    title="Profile"
                  />
                  <Divider />
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          helperText="Please specify the first name"
                          label="First name"
                          name="firstName"
                          onChange={handleChange}
                          required
                          value={user.name}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          label="Last name"
                          name="lastName"
                          onChange={handleChange}
                          required
                          value={user.lastname}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          label="Email Address"
                          name="email"
                          onChange={handleChange}
                          required
                          value={user.email}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          label="Phone Number"
                          name="phone"
                          onChange={handleChange}
                          type="number"
                          value={user.phone}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          label="Country"
                          name="country"
                          onChange={handleChange}
                          required
                          value={user.country}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          label="Address"
                          name="address"
                          onChange={handleChange}
                          required
                          value={user.address}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          label="Age"
                          name="age"
                          onChange={handleChange}
                          required
                          value={user.age}
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      p: 2,
                    }}
                  >
                    <Button color="primary" variant="contained">
                      Save details
                    </Button>
                  </Box>
                </Card>
              </form>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

// Profile.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Profile;
