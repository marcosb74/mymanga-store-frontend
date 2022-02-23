import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: "default",
  color: "secondary.main",
  fontWeight: "medium",
};

const image = {
  height: 55,
  my: 4,
};

function ProductHowItWorks() {
  const navigate = useNavigate();

  return (
    <Box
      component="section"
      sx={{ display: "flex", bgcolor: "#c42b81", overflow: "hidden" }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: "none",
            position: "absolute",
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          How it works
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number} sx={{ color: "white" }} component="h2">
                  1.
                </Box>
                <Box
                  component="img"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/03-editing-user-action/new-registration.png"
                  alt="register"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Sing-Up in our website for free!
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number} sx={{ color: "white" }} component="h2">
                  2.
                </Box>
                <Box
                  component="img"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/19-e-commerce-currency-shopping/cart-minus.svg"
                  alt="buy"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Select the items you want to buy
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number} sx={{ color: "white" }} component="h2">
                  3.
                </Box>
                <Box
                  component="img"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/30-logistics-shipping-delivery/package-delivery.svg"
                  alt="package"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  {"Your order is on the way."}
                  {" Just wait a few days for it to arrive!"}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          sx={{ mt: 8 }}
          onClick={() => navigate("/signup")}
        >
          Get started
        </Button>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
