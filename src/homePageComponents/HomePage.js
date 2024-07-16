import React from "react";
import Downloadsection from "./Downloadsection";
import Locations from "./Locations";
import NeedHelp from "./NeedHelp";
import PreviousEngagements from "./PreviousEngagements";
import Professions from "./Professions";
import Searches from "./Searches";
import Services from "./Services";
import Campaigns from "./Campaigns";
import LatestBlogs from "./LatestBlogs";
import FAQ from "./FAQ";
import CustomerStories from "./CustomerStories";
import Header from "../commonComponents/Header";
import Footer from "../commonComponents/Footer";
function HomePage({ userDashboard }) {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header userDashboard={userDashboard} />
      <Services />
      <Professions />
      <Campaigns />
      <PreviousEngagements />
      <Searches />
      <CustomerStories />
      <FAQ />
      <Locations />
      
      <NeedHelp />
      <LatestBlogs />
      <Downloadsection />
      <Footer />
    </div>
  );
}

export default HomePage;
