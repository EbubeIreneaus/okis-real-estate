import MiniHeroSection from "@/component/main/MiniHeroSection";
import React from "react";
import OurServiceSection from "@/component/main/OurServiceSection";
import CounterComponent from "@/component/main/CounterComponent";
import SearchComponent from "@/component/main/SearchComponent";
import MiniBookMeComponent from "@/component/main/MiniBookMeComponent";
import CustomerReviewSection from "@/component/main/CustomerReviewSection";
import GrowingAgentsSection from "@/component/main/GrowingAgentsSection";

function ServicePage() {
  return (
    <div>
      <MiniHeroSection crumbs={["Home", "Service"]} title="Our Service" />
      <SearchComponent />
      <OurServiceSection />
      <MiniBookMeComponent />
      <CounterComponent />
      <CustomerReviewSection />
      <GrowingAgentsSection />
    </div>
  );
}

export default ServicePage
