import React, { useState } from "react";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";
import DropDown from "../commonComponents/DropDown";
export function DoctorSpecialityCards() {
  const [activeSpec, setActiveSpec] = useState("Dentist");

  const handleClick = (index) => {
    setActiveSpec(index);
  };

  const specialityArray = [
    "Dentist",
    "Pediatrician",
    "Cardiologist",
    "Psychiatrist",
    "Dermatologist",
    "Endocrinologist",
    "Gynecologist",
    "Neurologist",
    "chiropractor",
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

export function DoctorFilterCards() {
  const [filterImage, setFilterImage] = useState("/images/doctor/filter.svg");

  const filterArray = [
    "Sort By",
    "Available Now",
    "Top Rated",
    "Popular",
    "Ratings",
    "Distance",
    "Quick Response",
    "Relevance",
    "Liked",
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
      {filterArray.map((criterion, index) => (
        <React.Fragment key={index}>
          {criterion === "Sort By" && (
            <DropDown
              filterHeading={criterion}
              option1="abc"
              option2="def"
              option3="ghi"
            />
          )}
          {criterion === "Top Rated" && (
            <div className={style.specOuter4}>
              <p className={style.criterion}>{criterion}</p>
              <img src="/images/doctor/star.svg" alt="Star" />
            </div>
          )}
          {criterion !== "Sort By" && criterion !== "Top Rated" && (
            <div className={style.specOuter2}>
              <p className={style.criterion}>{criterion}</p>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
