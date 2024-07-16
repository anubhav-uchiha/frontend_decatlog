import React, { useState } from "react";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";
export function TeacherSpecialityCards() {
  const [activeSpec, setActiveSpec] = useState("English");

  const handleClick = (index) => {
    setActiveSpec(index);
  };
  const specialityArray = [
    "English",
    "Maths",
    "Physics",
    "Hindi",
    "History",
    "Biology",
    "Chemistry",
    "Geography",
    "Economics",
    "Political Science",
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
