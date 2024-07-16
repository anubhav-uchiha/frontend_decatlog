import React, { useState } from "react";
import style from "./GovtOfficeDetailCard.module.css";
import DropDown from "../commonComponents/DropDown";

export default function GovtOfficeDetailCard() {
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
    "Health and Human Services",
    "Economic Development and Business Services",
    "Natural Resources and Environmental",
    "Education",
    "Revenue and Taxation",
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
