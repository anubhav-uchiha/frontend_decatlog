import React from "react";
import Header from "./Header";
import Services from "../homePageComponents/Services";
import Professions from "../homePageComponents/Professions";
import Campaigns from "../homePageComponents/Campaigns";
import PreviousEngagements from "../homePageComponents/PreviousEngagements";
import Searches from "../homePageComponents/Searches";

function Professions2() {
  return (
    <div style={{ overflow: "hidden" }}>
      {/*
      <Header />
      <Services />
      <Professions />
      <Campaigns />
      <PreviousEngagements />
      */}
      <Searches />
    </div>
  );
}

export default Professions2;
