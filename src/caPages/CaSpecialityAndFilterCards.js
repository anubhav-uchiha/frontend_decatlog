import React, { useState } from "react";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";
import DropDown from "../commonComponents/DropDown";
export function CaSpecialityCards() {
  const [activeSpec, setActiveSpec] = useState("Income Tax");

  const handleClick = (index) => {
    setActiveSpec(index);
  };
  const specialityArray = [
    "Income Tax",
    "Service Tax",
    "Property Tax",
    "Capital Gains Tax",
    "Corporate Tax",
    "Professional Tax",
    "GST",
    "VAT",
    "Audit",
  ];
  return (
    <div className={style.specCardWrapper}>
      <div className={style.specCardContainer}>
        {specialityArray.map((speciality, index) => (
          <div
            key={index}
            className={`${style.specOuter} ${
              activeSpec === speciality ? style.activeSpec : ""
            }`}
            onClick={() => handleClick(speciality)}
          >
            <p className={style.title}>{speciality}</p>
          </div>
        ))}
      </div>
      <div className={style.arrowContainer}>
        <img src="/images/doctor/specArrow.svg" alt="" />
      </div>
    </div>
  );
}

export function CaFilterCards() {
  const [filterImage, setFilterImage] = useState("/images/doctor/filter.svg");

  const filterArray = [
    {
      criterion: "Sort By",
      options: ["Option 1", "Option 2", "Option 3"],
    },
    {
      criterion: "Practice Area",
      options: ["Taxation", "Audit", "Consulting", "Legal"],
    },
    {
      criterion: "Gender",
      options: ["Male", "Female", "Other"],
    },
    {
      criterion: "Experience",
      options: ["1-3 Years", "4-6 Years", "7-10 Years", "10+ Years"],
    },
    {
      criterion: "State",
      options: ["California", "New York", "Texas", "Florida"],
    },
    {
      criterion: "City",
      options: ["San Francisco", "Los Angeles", "New York City", "Miami"],
    },
    {
      criterion: "Court",
      options: ["Supreme Court", "District Court", "Family Court"],
    },
    {
      criterion: "Languages Known",
      options: ["English", "Spanish", "Mandarin", "French"],
    },
  ];

  return (
    <div
      className={style.filterCardContainer}
      style={{ justifyContent: "space-evenly" }}
    >
      <div
        className={style.specOuter1}
        onMouseEnter={() => setFilterImage("/images/doctor/hoverFilter.svg")}
        onMouseLeave={() => setFilterImage("/images/doctor/filter.svg")}
      >
        <img src={filterImage} alt="Filter Icon" />
      </div>
      {filterArray.map(({ criterion, options }) => (
        <DropDown
          key={criterion}
          filterHeading={criterion}
          option1={options[0]}
          option2={options[1]}
          option3={options[2]}
        />
      ))}
    </div>
  );
}
