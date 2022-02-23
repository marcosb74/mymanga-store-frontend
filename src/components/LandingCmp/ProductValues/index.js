import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "#c42b81" }}
    >
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <Box
          component="img"
          //src="https://i.imgur.com/iVrdNvh.jpg"
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://icon-library.com/images/in-the-news-icon/in-the-news-icon-16.jpg"
                alt="news"
                sx={{ height: 55 }}
              />
              <Typography variant="h4" sx={{ my: 5 }}>
                Get the latest Mangas
              </Typography>
              <Typography variant="h5">
                {
                  "In MyManga-Store we are really focused on giving you the latest mangas."
                }{" "}
                {"If it is released, we probably have it waiting for you!"}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://www.clipartmax.com/png/full/449-4494182_complain-of-the-post-complain-criticize-icon-police-icon-png-blue.png"
                alt="safety"
                sx={{ height: 55 }}
              />
              <Typography variant="h4" sx={{ my: 5 }}>
                Your purchases are secured
              </Typography>
              <Typography variant="h5">
                {"Shopping with us means your purchases "}

                {"will be safe until you get them in your house"}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://i.pinimg.com/originals/55/fc/fb/55fcfb833ffc6994e918b1df29e7428f.png"
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h4" sx={{ my: 5 }}>
                We are here to help
              </Typography>
              <Typography variant="h5">
                {"If you ever have a problem, let us tell you that"}
                {"we will be there for you for anything."}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
