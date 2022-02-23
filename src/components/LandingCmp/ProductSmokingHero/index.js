import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Logo from "../../../assets/read-book.svg";
function ProductSmokingHero() {
  return (
    <Container
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 9,
      }}
    >
      <Button
        sx={{
          border: "4px solid currentColor",
          borderRadius: 0,
          height: "auto",
          py: 2,
          px: 5,
        }}
      >
        <Typography variant="h4" component="span">
          Got any questions? Mail us!
        </Typography>
      </Button>
      <Typography variant="subtitle1" sx={{ my: 3 }}></Typography>
      <Box component="img" src={Logo} alt="book" sx={{ width: 80 }} />
    </Container>
  );
}

export default ProductSmokingHero;
