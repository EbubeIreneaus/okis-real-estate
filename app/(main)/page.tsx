/* eslint-disable @next/next/no-img-element */
import HeroSection from "@/component/main/HeroSection";
import PropertyListingSection from "@/component/main/PropertyListingSection";
import PropertyTypeSection from "@/component/main/OurServiceSection";
import SearchComponent from "@/component/main/SearchComponent";
import React from "react";
import MiniBookMeComponent from "@/component/main/MiniBookMeComponent";
import CounterComponent from "@/component/main/CounterComponent";
import CustomerReviewSection from "@/component/main/CustomerReviewSection";
import GrowingAgentsSection from "@/component/main/GrowingAgentsSection";

function Home() {
  return (
    <>
      <HeroSection />
      <SearchComponent />
      <PropertyTypeSection />
      <PropertyListingSection />
      <MiniBookMeComponent />
      <CounterComponent />
      <CustomerReviewSection />
      <GrowingAgentsSection />
    </>
  );
}

export default Home;
