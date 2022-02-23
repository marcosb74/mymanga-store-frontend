import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const ImageBackdrop = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: "#000",
  opacity: 0.5,
  transition: theme.transitions.create("opacity"),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: 0,
  borderRadius: 0,
  height: "40vh",
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
    height: 100,
  },
  "&:hover": {
    zIndex: 1,
  },
  "&:hover .imageBackdrop": {
    opacity: 0.15,
  },
  "&:hover .imageMarked": {
    opacity: 0,
  },
  "&:hover .imageTitle": {
    border: "4px solid currentColor",
  },
  "& .imageTitle": {
    position: "relative",
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  "& .imageMarked": {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const images = [
  {
    url: "https://ramenparados.com/wp-content/uploads/2020/12/RENT-A-GIRLFRIEND-1-esp-300x443.png",
    title: "Rent a Girlfriend",
    width: "40%",
  },
  {
    url: "https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/2309/1515289801.jpg",
    title: "Evangelion",
    width: "20%",
  },
  {
    url: "https://lyricsfromanime.com/animes-info/guilty-crown/cover/guilty-crown-lyrics.jpg",
    title: "Guilty Crown",
    width: "40%",
  },
  {
    url: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/184/069/products/aot_01_6ta-edicion-cov1-b5d8482395dd56a46016306213884430-1024-1024.jpg",
    title: "Shingeki No Kyojin",
    width: "38%",
  },
  {
    url: "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/k/o/konosuba.jpg",
    title: "Konosuba",
    width: "38%",
  },
  {
    url: "https://http2.mlstatic.com/D_NQ_NP_960907-MLA45046442142_032021-O.webp",
    title: "Danganronpa",
    width: "24%",
  },
  {
    url: "https://images-na.ssl-images-amazon.com/images/I/71d67i5VssL.jpg",
    title: "Steins:Gate",
    width: "40%",
  },
  {
    url: "https://images-na.ssl-images-amazon.com/images/I/71vB1QwSacL.jpg",
    title: "Persona 5",
    width: "20%",
  },
  {
    url: "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/t/h/the-promised-neverland-19.jpg",
    title: "The Promised Neverland",
    width: "40%",
  },
];

export default function ProductCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        Some of the collections you can find
      </Typography>
      <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap" }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: "cover",
                backgroundPosition: "center 40%",
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "common.white",
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
