import React, { useState } from "react";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";
import DropDown from "../commonComponents/DropDown";
export function AdvocateSpecialityCards() {
  const [activeSpec, setActiveSpec] = useState("Family Law");

  const handleClick = (index) => {
    setActiveSpec(index);
  };

  const specialityArray = [
    "Family Law",
    "Criminal Law",
    "Property Law",
    "Civil Law",
    "Business Law",
    "Taxation",
    "Labour",
    "Intellectual Property",
    "Constitutional Law",
  ];

  return (
    <div className={style.specCardWrapper}>
      <div className={style.specCardContainer} style={{ gap: "17px" }}>
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

export function AdvocateFilterCards() {
  const [filterImage, setFilterImage] = useState("/images/doctor/filter.svg");

  const filterArray = [
    {
      criterion: "Sort By",
      options: ["Option 1", "Option 2", "Option 3"],
    },
    {
      criterion: "Practice Area",
      options: ["India", "Germany", "Nepal"],
    },
    {
      criterion: "Gender  ",
      options: ["Male", "Female", "Other"],
    },
    {
      criterion: "Experience",
      options: ["Beginner", "Intermediate", "Advanced"],
    },
    {
      criterion: "State",
      options: ["Mathematics", "Science", "English", "History"],
    },
    {
      criterion: "City",
      options: ["English", "Spanish", "French", "German"],
    },
    {
      criterion: "Court",
      options: ["Hindi", "English", "German"],
    },
    {
      criterion: "Languages Known",
      options: ["Hindi", "English", "German"],
    },
  ];

  return (
    <div className={style.filterCardContainer}
    style={{gap:"15px"}}
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