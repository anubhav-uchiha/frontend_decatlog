import React, { useState } from "react";
import style from "./TeacherFilterCards.module.css";
import DropDown from "../commonComponents/DropDown";

export default function TeacherFilterCards() {
  const [filterImage, setFilterImage] = useState("/images/doctor/filter.svg");

  const filterArray = [
    {
      criterion: "Sort By",
      options: ["Option 1", "Option 2", "Option 3"],
    },
    {
      criterion: "Level",
      options: ["Beginner", "Intermediate", "Advanced"],
    },
    {
      criterion: "Gender",
      options: ["Male", "Female", "Other"],
    },
    {
      criterion: "Price per lesson",
      options: ["$20 - $50", "$51 - $100", "$101 - $150", "$150+"],
    },
    {
      criterion: "Specialities",
      options: ["Mathematics", "Science", "English", "History"],
    },
    {
      criterion: "Languages Known",
      options: ["English", "Spanish", "French", "German"],
    },
    {
      criterion: "Mode of Teaching",
      options: ["Online", "In-Person", "Hybrid"],
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
