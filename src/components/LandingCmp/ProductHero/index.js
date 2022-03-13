import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import { useNavigate } from "react-router-dom";

const backgroundImage =
  "https://scontent.faep9-1.fna.fbcdn.net/v/t1.6435-9/50593773_1190777924408649_5346641049752174592_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeGf4Q5ZoW-ofGXo2ZeTII-gdA5eNpFEoD50Dl42kUSgPi365h1YqNL9vWURbE29GhExn-zkgjaJ55lbm3O9J011&_nc_ohc=SOYGDPFgbv0AX_ZMKRy&_nc_ht=scontent.faep9-1.fna&oh=00_AT8-46P4LdRwxKMhsOF6cBhMs7NOPT1AEvorwmKtPM0zcQ&oe=62328795";

export default function ProductHero() {
  const navigate = useNavigate();
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#c42b81", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Welcome to MyManga-Store!
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Enjoy our newest categories added!
      </Typography>
      <Button
        variant="contained"
        size="large"
        onClick={() => navigate("/signup")}
        sx={{ minWidth: 200, background: "#c42b81" }}
      >
        Register
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Shop with us!
      </Typography>
    </ProductHeroLayout>
  );
}
