import React, { useState } from "react";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";
import DropDown from "../commonComponents/DropDown";

export function OfficersSpecialityCards() {
  const [activeSpec, setActiveSpec] = useState("Service-related");

  const handleClick = (index) => {
    setActiveSpec(index);
  };

  const specialityArray = [
    "Service-related",
    "Contractual and Financial",
    "Data and Security-related",
    "Behavioral and Ethical",
    "Product-related",
    "Healthcare Related",
  ];

  return (
    <div className={style.specCardWrapper}>
      <div className={style.specCardContainer}
      style={{gap:"17px"}}>
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
