import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function AddressForm({ buyer, setBuyer }) {
  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="name"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastname"
            name="lastname"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="phone"
            name="phone"
            label="Phone Number ( Please add +Country Code )"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
