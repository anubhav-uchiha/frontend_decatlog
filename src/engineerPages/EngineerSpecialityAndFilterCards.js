import React, { useState } from "react";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";
import DropDown from "../commonComponents/DropDown";

export function EngineerSpecialityCards() {
  const [activeSpec, setActiveSpec] = useState("Websites IT & Software");

  const handleClick = (index) => {
    setActiveSpec(index);
  };

  const specialityArray = [
    "Websites IT & Software",
    "Mobile",
    "Writing",
    "Design",
    "Data Entry",
    "Sales & Marketing",
    "Product Sourcing & Manufacturing",
    "Civil",
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


export function EnginnerFilterCards() {
  const [filterImage, setFilterImage] = useState("/images/doctor/filter.svg");

  const filterArray = [
    {
      criterion: "Sort By",
      options: ["Option 1", "Option 2", "Option 3"],
    },
    {
      criterion: "Skills",
      options: ["JavaScript", "Python", "Java", "C++"],
    },
    {
      criterion: "Hourly Rate",
      options: ["$20 - $40", "$41 - $60", "$61 - $80", "$81+"],
    },
    {
      criterion: "Experience",
      options: ["1-2 Years", "3-5 Years", "6-10 Years", "10+ Years"],
    },
    {
      criterion: "Availability",
      options: ["Full-time", "Part-time", "Freelance"],
    },
    {
      criterion: "Type of Service",
      options: ["Development", "Testing", "Consulting"],
    },
    {
      criterion: "Languages Known",
      options: ["English", "Spanish"],
    },
  ];

  return (
    <div
      className={style.filterCardContainer}
      style={{ justifyContent: "space-between" }}
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
          option4={options[3]}
        />
      ))}
    </div>
  );
}
