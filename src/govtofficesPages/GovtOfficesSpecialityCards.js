import React, { useState } from "react";
import style from "./GovtOfficesSpeciality.module.css";

function GovtOfficesSpecialityCards() {
  const [activeSpec, setActiveSpec] = useState("Executive Branch Offices");

  const handleClick = (index) => {
    setActiveSpec(index);
  };

  const specialityArray = [
    "Executive Branch Offices",
    "Legislative Branch Offices",
    "Judicial Branch Offices",
    "Administrative",
    "Law Enforcement and Public Safety",
    "others",
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

export default GovtOfficesSpecialityCards;
