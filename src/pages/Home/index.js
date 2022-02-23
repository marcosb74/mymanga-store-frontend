import React from "react";
import ProductCategories from "../../components/LandingCmp/ProductCategories";
import ProductSmokingHero from "../../components/LandingCmp/ProductSmokingHero";
import ProductHero from "../../components/LandingCmp/ProductHero";
import ProductValues from "../../components/LandingCmp/ProductValues";
import ProductHowItWorks from "../../components/LandingCmp/ProductHowItWorks";
import ProductCTA from "../../components/LandingCmp/ProductCTA";
import AppFooter from "../../components/LandingCmp/AppFooter";
const Home = () => {
  return (
    <>
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </>
  );
};

export default Home;
