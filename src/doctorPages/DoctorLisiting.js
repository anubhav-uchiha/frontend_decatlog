import React from "react";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";
import SearchBar from "../commonComponents/SearchBar";
import CommonCard from "../commonComponents/CommonCard";
import Faq from "../commonComponents/Faq";
import Appointment from "./Appointment";
import {
  AppointCard,
  Query,
} from "../commonComponents/LeftOverCommonComponents";
import Pagination from "../commonComponents/Pagination";
import {
  DoctorFilterCards,
  DoctorSpecialityCards,
} from "./DoctorSpecialityAndFilterCards";
import Header from "../commonComponents/Header";
import Footer from "../commonComponents/Footer";
function DoctorLisiting() {
  const docCardData = [
    {
      img: "/images/reviews/reviewImg.svg",
      name: "Dr. Ronald Richards",
      title: "Dental Surgeon",
      qual1: " BDS, PhD - Orthodontics & Dentofacial Orthopaedics",
      qual2: "34 years of experience in speciality",
      address: "Sweet Smile Dental Clinic",
    },
    {
      img: "/images/reviews/reviewImg.svg",
      name: "Dr. Ronald Richards",
      title: "Dental Surgeon",
      qual1: " BDS, PhD - Orthodontics & Dentofacial Orthopaedics",
      qual2: "34 years of experience in speciality",
      address: "Sweet Smile Dental Clinic",
    },
    {
      img: "/images/reviews/reviewImg.svg",
      name: "Dr. Ronald Richards",
      title: "Dental Surgeon",
      qual1: " BDS, PhD - Orthodontics & Dentofacial Orthopaedics",
      qual2: "34 years of experience in speciality",
      address: "Sweet Smile Dental Clinic",
    },
    {
      img: "/images/reviews/reviewImg.svg",
      name: "Dr. Ronald Richards",
      title: "Dental Surgeon",
      qual1: " BDS, PhD - Orthodontics & Dentofacial Orthopaedics",
      qual2: "34 years of experience in speciality",
      address: "Sweet Smile Dental Clinic",
    },
    {
      img: "/images/reviews/reviewImg.svg",
      name: "Dr. Ronald Richards",
      title: "Dental Surgeon",
      qual1: " BDS, PhD - Orthodontics & Dentofacial Orthopaedics",
      qual2: "34 years of experience in speciality",
      address: "Sweet Smile Dental Clinic",
    },
  ];
  return (
    <>
      <Header userDashboard="true" />
      <div
        className={style.listingOuter}
        style={{ background: "url(/images/Backgrounds.svg)" }}
      >
        <div className={style.listingInner}>
          <div className={style.searchContainer}>
            <SearchBar
              userDashboard="true"
              placeholderProp="Search doctors, advocates, teachers and many more....."
            />
          </div>

          <DoctorSpecialityCards />
        </div>

        <div className={style.bannerContainer}>
          <img src="/images/doctor/banner.svg" alt="" />
        </div>

        <div className={style.listingInner2}>
          <div className={style.locationFilterPara}>
            <p className={style.para}>Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Allopathic Doctors in Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Dentists in Bangalore</p>
          </div>

          <h1 className={style.heading}>Best Dentists in HSR Layout</h1>
          <DoctorFilterCards />
          <div className={style.btmContainer} style={{ marginTop: "10px" }}>
            <div className={style.btmLeft}>
              {docCardData.map((data) => (
                <CommonCard
                  doctorListing="Book Appointment"
                  img={data.img}
                  name={data.name}
                  title={data.title}
                  qual1={data.qual1}
                  qual2={data.qual2}
                  address={data.address}
                />
              ))}
              <Pagination />
            </div>
            <div className={style.btmRight}>
              <Appointment />
              <Query forWhom="Dentists" />
              <AppointCard
                background="linear-gradient(76.05deg, #337f8c 1.21%, #6ab1a5 99.58%)"
                rightImg="/images/doctor/appointImg.svg"
                teethImage="/images/doctor/teeth.svg"
                heading1a="DENTAL"
                heading2a="Health Clinic"
                heading3a="Treat your teeth with us"
                service1="Dental Surgeries"
                service2="Dental Radiography"
                service3="Implant Dentistry"
                service4="Cavity Protection"
              />
            </div>
          </div>
        </div>
      </div>
      <Faq docListing="true" />
      <Footer shadow="true" />
    </>
  );
}
export default DoctorLisiting;
