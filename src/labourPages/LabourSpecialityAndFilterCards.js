import React, { useState } from "react";
import DropDown from "../commonComponents/DropDown";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";
export function LabourSpecialityCards() {
  const [activeSpec, setActiveSpec] = useState("Maid");

  const handleClick = (index) => {
    setActiveSpec(index);
  };

  const specialityArray = [
    "Maid",
    "Electrician",
    "Plumber",
    "Carpenter",
    "Gardner",
    "Nursing Care",
    "Mason",
    "Pest Control",
    "Driver",
    "AC Repair",
  ];

  return (
    <div className={style.specCardWrapper}>
      <div className={style.specCardContainer} style={{ gap: "15px" }}>
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



export function LabourFilterCards() {
  const [filterImage, setFilterImage] = useState("/images/doctor/filter.svg");

  const filterArray = [
    {
      criterion: "Sort By",
      options: ["Option 1", "Option 2", "Option 3"],
    },
    {
      criterion: "Price",
      options: ["$10 - $20", "$21 - $30", "$31 - $40", "$41+"],
    },
    {
      criterion: "Gender",
      options: ["Male", "Female", "Other"],
    },
    {
      criterion: "Age",
      options: ["18-25", "26-35", "36-45", "46+"],
    },
    {
      criterion: "Experience",
      options: ["1-2 Years", "3-5 Years", "6-10 Years", "10+ Years"],
    },
    {
      criterion: "Availability",
      options: ["Full-time", "Part-time", "Temporary", "Contract"],
    },
    {
      criterion: "Type of Service",
      options: ["Construction", "Cleaning", "Maintenance", "Other"],
    },
    {
      criterion: "Languages Known",
      options: ["English", "Spanish", "French", "Mandarin"],
    },
  ];

  return (
    <div className={style.filterCardContainer}>
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
