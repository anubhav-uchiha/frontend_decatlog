import React from "react";
import PreviousEngagementCard from "./PreviousEngagementCard";
import style from "../styles/PreviousEngagements.module.css";

function PreviousEngagementsChild({ activeCategory }) {
  const medicalService = [
    {
      img: "/images/prev.svg",
      name: "Dr. John Smith",
      service: "Medical Services",
      about: "Top Paediatrician in Delhi",
      date: "12/12/2022",
      stars: "5",
      rating: "4.5",
    },
    {
      img: "/images/prev.svg",
      name: "Dr. John Smith",
      service: "Medical Services",
      about: "Top Paediatrician in Delhi",
      date: "12/12/2022",
      stars: "5",
      rating: "4.5",
    },
  ];

  const enggService = [
    {
      img: "/images/prev.svg",
      name: "Dr. John Smith",
      service: "Engg Services",
      about: "Top Engineer in Delhi",
      date: "12/12/2022",
      stars: "5",
      rating: "4.5",
    },
    {
      img: "/images/prev.svg",
      name: "Dr. John Smith",
      service: "Engg Services",
      about: "Top Engineer in Delhi",
      date: "12/12/2022",
      stars: "5",
      rating: "4.5",
    },
  ];

  const caService = [
    {
      img: "/images/prev.svg",
      name: "Dr. John Smith",
      service: "Legal Services",
      about: "Top Lawyer in Delhi",
      date: "12/12/2022",
      stars: "5",
      rating: "4.5",
    },
    {
      img: "/images/prev.svg",
      name: "Dr. John Smith",
      service: "Tax Services",
      about: "Top CA in Delhi",
      date: "12/12/2022",
      stars: "5",
      rating: "4.5",
    },
  ];

  const advService = [
    {
      img: "/images/prev.svg",
      name: "Dr. John Smith",
      service: "Legal Services",
      about: "Top Lawyer in Delhi",
      date: "12/12/2022",
      stars: "5",
      rating: "4.5",
    },
    {
      img: "/images/prev.svg",
      name: "Dr. John Smith",
      service: "Legal Services",
      about: "Top Lawyer in Delhi",
      date: "12/12/2022",
      stars: "5",
      rating: "4.5",
    },
  ];

  const teacherService = [
    {
      img: "/images/prev.svg",
      name: "Dr. John Smith",
      service: "Edu. Services",
      about: "Best Teacher in Delhi",
      date: "12/12/2022",
      stars: "5",
      rating: "4.5",
    },
    {
      img: "/images/prev.svg",
      name: "Dr. John Smith",
      service: "Edu. Services",
      about: "Best Teacher in Delhi",
      date: "12/12/2022",
      stars: "5",
      rating: "4.5",
    },
  ];

  const labService = [
    {
      img: "/images/prev.svg",
      name: "Dr. John Smith",
      service: "Labour Services",
      about: "Top Mason in Delhi",
      date: "12/12/2022",
      stars: "5",
      rating: "4.5",
    },
    {
      img: "/images/prev.svg",
      name: "Dr. John Smith",
      service: "Labour Services",
      about: "Top Mason in Delhi",
      date: "12/12/2022",
      stars: "5",
      rating: "4.5",
    },
  ];

  const offService = [
    {
      img: "/images/prev.svg",
      name: "Dr. John Smith",
      service: "Officer",
      about: "Top Officer in Delhi",
      date: "12/12/2022",
      stars: "5",
      rating: "4.5",
    },
    {
      img: "/images/prev.svg",
      name: "Dr. John Smith",
      service: "Officer",
      about: "Top Officer in Delhi",
      date: "12/12/2022",
      stars: "5",
      rating: "4.5",
    },
  ];

  const govtService = [
    {
      img: "/images/prev.svg",
      name: "Dr. John Smith",
      service: "Govt Officer",
      about: "Top Officer in Delhi",
      date: "12/12/2022",
      stars: "5",
      rating: "4.5",
    },
    {
      img: "/images/prev.svg",
      name: "Dr. John Smith",
      service: "Govt Officer",
      about: "Top Officer in Delhi",
      date: "12/12/2022",
      stars: "5",
      rating: "4.5",
    },
  ];

  const getActiveCategoryArray = () => {
    switch (activeCategory) {
      case "Doctors":
        return medicalService;
      case "Engineers":
        return enggService;
      case "CA's":
        return caService;
      case "Advocates":
        return advService;
      case "Teachers":
        return teacherService;
      case "Labours":
        return labService;
      case "Officers":
        return offService;
      case "Govt. Officials":
        return govtService;
      default:
        return [];
    }
  };

  const services = getActiveCategoryArray();

  return (
    <div className={style.btmDiv}>
      <div className={style.uprDiv}>
        <div className={style.leftTopBtm}>
          {services.map((service, index) => (
            <PreviousEngagementCard
              key={index}
              img={service.img}
              name={service.name}
              service={service.service}
              about={service.about}
              date={service.date}
              stars={service.stars}
              rating={service.rating}
            />
          ))}
        </div>

        <div className={style.rightTopBtm}>
          {services.map((service, index) => (
            <PreviousEngagementCard
              key={index}
              img={service.img}
              name={service.name}
              service={service.service}
              about={service.about}
              date={service.date}
              stars={service.stars}
              rating={service.rating}
            />
          ))}
        </div>
      </div>
      <div className={style.lwrDiv}>
        <div className={style.leftLwrBtm}>
          {services.map((service, index) => (
            <PreviousEngagementCard
              key={index}
              img={service.img}
              name={service.name}
              service={service.service}
              about={service.about}
              date={service.date}
              stars={service.stars}
              rating={service.rating}
            />
          ))}
        </div>
        <div className={style.rightLwrBtm}>
          {services.map((service, index) => (
            <PreviousEngagementCard
              key={index}
              img={service.img}
              name={service.name}
              service={service.service}
              about={service.about}
              date={service.date}
              stars={service.stars}
              rating={service.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PreviousEngagementsChild;
