import React from "react";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";

function MostViewed2({ category }) {
  const mostViewedData = {
    dentist: [
      {
        img: "/images/doctor/mostViewed.svg",
        name: "Theresa Webb",
        speciality: "Dental Surgeon",
        qualification: "BDS, PhD",
        experience: "34 years of experience in speciality",
      },
      {
        img: "/images/doctor/mostViewed.svg",
        name: "Theresa Webb",
        speciality: "Dental Surgeon",
        qualification: "BDS, PhD",
        experience: "34 years of experience in speciality",
      },
      {
        img: "/images/doctor/mostViewed.svg",
        name: "Theresa Webb",
        speciality: "Dental Surgeon",
        qualification: "BDS, PhD",
        experience: "34 years of experience in speciality",
      },
    ],
    "english teachers": [
      {
        img: "/images/doctor/mostViewed.svg",
        name: "Theresa Webb",
        speciality: "Dental Surgeon",
        qualification: "BA, BEd",
        experience: "34 years of experience in speciality",
      },
      {
        img: "/images/doctor/mostViewed.svg",
        name: "Theresa Webb",
        speciality: "Dental Surgeon",
        qualification: "BA, BEd",
        experience: "34 years of experience in speciality",
      },
      {
        img: "/images/doctor/mostViewed.svg",
        name: "Theresa Webb",
        speciality: "Dental Surgeon",
        qualification: "BA, BEd",
        experience: "34 years of experience in speciality",
      },
    ],
    cas: [
      {
        img: "/images/doctor/mostViewed.svg",
        name: "Theresa Webb",
        speciality: "CA",
        qualification: "BCom, CA",
        Consultations: "911 Consultations",
        experience: "Licensed for 10 Years",
      },
      {
        img: "/images/doctor/mostViewed.svg",
        name: "Theresa Webb",
        speciality: "CA",
        qualification: "BCom, CA",
        Consultations: "911 Consultations",
        experience: "Licensed for 10 Years",
      },
      {
        img: "/images/doctor/mostViewed.svg",
        name: "Theresa Webb",
        speciality: "CA",
        qualification: "BCom, CA",
        Consultations: "911 Consultations",
        experience: "Licensed for 10 Years",
      },
      {
        img: "/images/doctor/mostViewed.svg",
        name: "Theresa Webb",
        speciality: "CA",
        qualification: "BCom, CA",
        Consultations: "911 Consultations",
        experience: "Licensed for 10 Years",
      },
    ],
    maids: [
      {
        img: "/images/doctor/mostViewed.svg",
        name: "Theresa Webb",
        speciality: "Immediate Availability",
        qualification: "Fluent in Hindi, English",
        Consultations: "30 Years Old (F)",
        experience: "3 Years of Experience ",
      },
      {
        img: "/images/doctor/mostViewed.svg",
        name: "Theresa Webb",
        speciality: "Immediate Availability",
        qualification: "Fluent in Hindi, English",
        Consultations: "30 Years Old (F)",
        experience: "3 Years of Experience ",
      },
      {
        img: "/images/doctor/mostViewed.svg",
        name: "Theresa Webb",
        speciality: "Immediate Availability",
        qualification: "Fluent in Hindi, English",
        Consultations: "30 Years Old (F)",
        experience: "3 Years of Experience ",
      },
      {
        img: "/images/doctor/mostViewed.svg",
        name: "Theresa Webb",
        speciality: "Immediate Availability",
        qualification: "Fluent in Hindi, English",
        Consultations: "30 Years Old (F)",
        experience: "3 Years of Experience ",
      },
    ],

    engineers: [
      {
        img: "/images/doctor/mostViewed.svg",
        name: "Theresa Webb",
        speciality: "ARCHITECTURE",
        qualification: "Fluent in Hindi, English",
        Consultations: "30 Years Old (F)",
        experience: "3 Years of Experience ",
      },
      {
        img: "/images/doctor/mostViewed.svg",
        name: "Theresa Webb",
        speciality: "ARCHITECTURE",
        qualification: "Fluent in Hindi, English",
        Consultations: "30 Years Old (F)",
        experience: "3 Years of Experience ",
      },
      {
        img: "/images/doctor/mostViewed.svg",
        name: "Theresa Webb",
        speciality: "ARCHITECTURE",
        qualification: "Fluent in Hindi, English",
        Consultations: "30 Years Old (F)",
        experience: "3 Years of Experience ",
      },
      {
        img: "/images/doctor/mostViewed.svg",
        name: "Theresa Webb",
        speciality: "ARCHITECTURE",
        qualification: "Fluent in Hindi, English",
        Consultations: "30 Years Old (F)",
        experience: "3 Years of Experience ",
      },
    ],
    advocates: [
      {
        img: "/images/doctor/mostViewed.svg",
        name: "Theresa Webb",
        speciality: "Family Law",
        qualification: "LLB, LLM",
        Consultations: "911 Consultations",
        experience: "Licensed for 10 Years",
      },
      {
        img: "/images/doctor/mostViewed.svg",
        name: "Theresa Webb",
        speciality: "Family Law",
        qualification: "LLB, LLM",
        Consultations: "911 Consultations",
        experience: "Licensed for 10 Years",
      },
      {
        img: "/images/doctor/mostViewed.svg",
        name: "Theresa Webb",
        speciality: "Family Law",
        qualification: "LLB, LLM",
        Consultations: "911 Consultations",
        experience: "Licensed for 10 Years",
      },
      {
        img: "/images/doctor/mostViewed.svg",
        name: "Theresa Webb",
        speciality: "Family Law",
        qualification: "LLB, LLM",
        Consultations: "911 Consultations",
        experience: "Licensed for 10 Years",
      },
    ],
  };

  const selectedCategoryData = mostViewedData[category.toLowerCase()] || [];

  return (
    <div className={style.viewedOuter}>
      <h1 className={style.viewedHeading}>
        Most viewed {category} in Bangalore
      </h1>
      <div className={style.imgContainer}>
        <div className={style.allCardContainer}>
          {selectedCategoryData.map((item, index) => (
            <div
              key={index}
              className={style.viewedCardContainer}
              style={
                category === "CAs"
                  ? { width: "301.75px" }
                  : category === "maids"
                  ? { width: "311px" }
                  : category === "engineers"
                  ? { width: "307.75px" }
                  : category === "advocates"
                  ? { width: "301.75px" }
                  : {}
              }
            >
              <img src={item.img} alt="" className={style.viewedImg} />
              <div className={style.detailsContainer}>
                <h1 className={style.detail1}>{item.name}</h1>
                <p
                  className={`${style.detail}
                ${category === "engineers" ? style.specialityEngineer : ""}`}
                >
                  {item.speciality}
                </p>

                <p className={style.detail2}>{item.qualification}</p>

                <p
                  className={`${style.detail2}
                ${
                  category === "engineers"
                    ? style.specialityEngineerDetail2
                    : ""
                }`}
                >
                  {item.Consultations}
                </p>

                <p className={style.detail2}>{item.experience}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={style.imgContainerView}>
          <img
            src="/images/doctor/specArrow.svg"
            alt=""
            className={style.imageView}
          />
        </div>
      </div>
    </div>
  );
}

export default MostViewed2;
