import React from "react";
import Navigation from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import SignIn from "./pages/SignIn";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
