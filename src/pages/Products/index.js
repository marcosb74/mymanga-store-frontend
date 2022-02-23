import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Card, Container, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import fetchProducts from "../../services/products.service";
import { getUserCart, updateCart } from "../../services/cart.service";
export default function Products() {
  const [products, setProducts] = useState([]);
  const [didLoad, setDidLoad] = useState(false);

  useEffect(() => {
    async function getData() {
      return await fetchProducts();
    }
    if (!didLoad) {
      getData().then((response) => {
        setProducts(response.data);
        setDidLoad(!didLoad);
      });
    }
  }, [didLoad]);

  const addToCart = async (item) => {
    const cart = await getUserCart();
    cart.data.products.push(item);
    await updateCart(cart);
    Swal.fire(
      "Item added to Cart!!",
      "You have successfully added the item to the cart",
      "success"
    );
  };
  return (
    <>
      <Container>
        <h2>Mangas in Stock</h2>
        <Grid container>
          {products.length > 0 &&
            products.map((item) => (
              <Card
                key={item.id}
                sx={{ maxWidth: 340, minWidth: 340, margin: 1 }}
                className="mt-2 mr-2 p-2"
              >
                <CardMedia
                  component="img"
                  height="170"
                  image={item.img}
                  alt={item.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => addToCart(item)}>
                    Add to cart
                  </Button>
                  <Button size="small">View More</Button>
                </CardActions>
              </Card>
            ))}
        </Grid>
      </Container>
    </>
  );
}
