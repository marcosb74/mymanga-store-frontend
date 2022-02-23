import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

export default function Review(buyer) {
  const [cardEnding, setCardEnding] = useState(buyer.buyer.cardNumber);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {buyer.buyer.products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} />
            <Typography variant="body2">$ {product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $ {buyer.buyer.total} TOTAL
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            {buyer.buyer.name} {buyer.buyer.lastName}
          </Typography>
          <Typography gutterBottom>
            {buyer.buyer.address1}, {buyer.buyer.address2},{buyer.buyer.state},{" "}
            {buyer.buyer.country}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>
                  Card Issuer {buyer.buyer.issuer}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography gutterBottom>
                  Card Holder {buyer.buyer.cardName}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography gutterBottom>
                  Card Number {cardEnding.substr(cardEnding.length - 4)}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography gutterBottom>
                  Expiring Date {buyer.buyer.expDate}
                </Typography>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
