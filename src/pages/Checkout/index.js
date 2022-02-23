import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import { postOrder } from "../../services/purchase.service";
import { getUserCart } from "../../services/cart.service";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit">MyManga-Store </Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Shipping address", "Payment details", "Review your order"];

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [cart, setCart] = useState([]);
  const [didLoad, setDidLoad] = useState(false);
  const [buyer, setBuyer] = useState({
    address1: null,
    phone: 0,
    cardName: null,
    cardNumber: null,
    cardType: null,
    city: null,
    country: null,
    expDate: null,
    issuer: null,
    lastname: null,
    name: null,
    state: null,
    zip: null,
    total: null,
    products: null,
  });

  useEffect(() => {
    async function getData() {
      return await getUserCart();
    }
    function calculateTotal(cart) {
      const total = cart.reduce(
        (previousValue, currentValue) => previousValue + currentValue.price,
        0
      );
      return total;
    }
    if (!didLoad) {
      getData().then((response) => {
        setCart(response.data.products);
        setBuyer({ ...buyer, products: cart });
        const totalSpent = calculateTotal(response.data.products);
        let updatedUser = { ...buyer, total: totalSpent };
        updatedUser = { ...updatedUser, products: response.data.products };
        setBuyer(updatedUser);
        setDidLoad(!didLoad);
      });
    }
  }, [didLoad]);

  const handleNext = async () => {
    setActiveStep(activeStep + 1);
    console.log(activeStep);
    if (activeStep === 2) {
      console.log("entre");
      await postOrder(buyer);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm buyer={buyer} setBuyer={setBuyer} />;
      case 1:
        return <PaymentForm buyer={buyer} setBuyer={setBuyer} />;
      case 2:
        return <Review buyer={buyer} />;
      default:
        throw new Error("Unknown step");
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  We have received your order. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
