import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import Background from "../../../assets/background-stripped.jpg";
function ProductCTA() {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container component="section" sx={{ mt: 10, display: "flex" }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: "info.main",
              py: 8,
              px: 3,
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ maxWidth: 400 }}
            >
              <Typography
                variant="h2"
                component="h2"
                gutterBottom
                sx={{ width: "100%", mt: 3, mb: 2, color: "White" }}
              >
                Receive offers
              </Typography>
              <Typography
                variant="h5"
                sx={{ width: "100%", mt: 3, mb: 2, color: "White" }} /*  VER */
              >
                Let us tell you when new Mangas are released!
              </Typography>
              <TextField
                noBorder
                placeholder="Your email"
                variant="standard"
                sx={{ width: "100%", mt: 3, mb: 2 }} /*  VER */
              />
              <Button
                type="submit"
                style={{
                  background: "#c42b81",
                  color: "White",
                }}
                variant="contained"
                sx={{ width: "100%" }}
              >
                Keep me updated
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: "block", xs: "none" }, position: "relative" }}
        >
          <Box
            sx={{
              position: "absolute",
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: "100%",
              background:
                "url(/static/themes/onepirate/productCTAImageDots.png)",
            }}
          />
          <Box
            component="img"
            src="https://lzerbnaiva.files.wordpress.com/2018/07/reading-manga.jpg"
            alt="call to action"
            sx={{
              position: "absolute",
              top: -10,
              left: -28,
              right: 0,
              bottom: 0,
              width: "120%",
              maxWidth: 800,
            }}
          />
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        closeFunc={handleClose}
        message="We will send you our best offers, once a week."
      />
    </Container>
  );
}

export default ProductCTA;
