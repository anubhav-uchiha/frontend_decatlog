import React from "react";
import Header from "../commonComponents/Header";
import Footer from "../commonComponents/Footer";
import Faq from "../commonComponents/Faq";
import SearchBar from "../commonComponents/SearchBar";
import CommonCard from "../commonComponents/CommonCard";
import Pagination from "../commonComponents/Pagination";
import {
  Query,
  AppointCard,
} from "../commonComponents/LeftOverCommonComponents";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";
import { TeacherSpecialityCards } from "./TeacherSpecialityCards";
import TeacherFiterCards from "./TeacherFilterCards";
function TeacherListing() {
  const docCardData = [
    {
      img: "/images/teacher/eng.svg",
      name: "Jenny Wilson",
      title: "English Teacher (F)",
      qual1: "BA in English Literature, BEd",
      qual2: "Speaks Hindi (Native), English (Proficient)",
      qual3: "290 Lessons",
      qual4: "5 years of experience in speciality",
    },
    {
      img: "/images/teacher/eng.svg",
      name: "Jenny Wilson",
      title: "English Teacher (F)",
      qual1: "BA in English Literature, BEd",
      qual2: "Speaks Hindi (Native), English (Proficient)",
      qual3: "290 Lessons",
      qual4: "5 years of experience in speciality",
    },
    {
      img: "/images/teacher/eng.svg",
      name: "Jenny Wilson",
      title: "English Teacher (F)",
      qual1: "BA in English Literature, BEd",
      qual2: "Speaks Hindi (Native), English (Proficient)",
      qual3: "290 Lessons",
      qual4: "5 years of experience in speciality",
    },
    {
      img: "/images/teacher/eng.svg",
      name: "Jenny Wilson",
      title: "English Teacher (F)",
      qual1: "BA in English Literature, BEd",
      qual2: "Speaks Hindi (Native), English (Proficient)",
      qual3: "290 Lessons",
      qual4: "5 years of experience in speciality",
    },
    {
      img: "/images/teacher/eng.svg",
      name: "Jenny Wilson",
      title: "English Teacher (F)",
      qual1: "BA in English Literature, BEd",
      qual2: "Speaks Hindi (Native), English (Proficient)",
      qual3: "290 Lessons",
      qual4: "5 years of experience in speciality",
    },
  ];
  return (
    <>
      <Header userDashboard="true" />
      <div className={style.listingOuter}>
        <div className={style.listingInner}>
          <div className={style.searchContainer}>
            <SearchBar
              userDashboard="true"
              placeholderProp="Search Speciality, English, Mathematics, Physics......."
            />
          </div>

          <TeacherSpecialityCards />
        </div>

        <div className={style.bannerContainer}>
          <img src="/images/teacher/Banner.png" alt="" />
        </div>

        <div className={style.listingInner2}>
          <div className={style.locationFilterPara}>
            <p className={style.para}>Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Teachers in Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>English Teachers in Bangalore</p>
          </div>

          <h1 className={style.heading}>Best English Teachers in HSR Layout</h1>
          <TeacherFiterCards />
          <div className={style.btmContainer}>
            <div className={style.btmLeft}>
              {docCardData.map((data) => (
                <CommonCard
                  teacherListing="Book Trial Lesson"
                  img={data.img}
                  name={data.name}
                  title={data.title}
                  qual1={data.qual1}
                  qual2={data.qual2}
                  qual3={data.qual3}
                  qual4={data.qual4}
                />
              ))}
              <Pagination />
            </div>
            <div className={style.btmRight}>
              <Query forWhom="English Teachers" />
              <AppointCard
                background="linear-gradient(76.05deg, #D67849 1.21%, #E3CD27 99.58%)"
                rightImg="/images/teacher/student.png"
                heading1a="English"
                heading2a="Speaking Clases"
                service1="One-to-One Tutoring"
                service2="Exam Preparation"
                service3="Advanced Learning"
              />
            </div>
          </div>
        </div>
      </div>
      <Faq teacherListing="true" />
      <Footer shadow="true" />
    </>
  );
}

export default TeacherListing;
