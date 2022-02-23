import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function AppFooter() {
  return (
    <Typography component="footer" sx={{ display: "flex", bgcolor: "#c42b81" }}>
      <Container sx={{ my: 1, display: "flex", color: "White" }}>
        <Grid container>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            ></Grid>
          </Grid>
          <Grid item xs={4} sm={4} md={2}></Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
