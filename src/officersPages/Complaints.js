import React from "react";
import style from "./Complaints.module.css";

function Complaints() {
  const complaints = [
    {
      img: "/images/doctor/patient.svg",
      name: "Emily W.",
      time: "2 Months ago",
      review:
        "I would like to raise a complaint regarding the unprofessional behavior of an income tax officer at theIT Department, ABC City. During my recent visit on 03/03/2024, I was treated rudely and my queries were dismissed without proper explanation. This experience has caused significant inconvenience and stress. I urge the concerned authorities to look into this matter and ensure that such behavior is addressed to maintain public trust in the system. ",
    },
    {
      img: "/images/doctor/patient.svg",
      name: "Emily W.",
      time: "2 Months ago",
      review:
        "I would like to raise a complaint regarding the unprofessional behavior of an income tax officer at theIT Department, ABC City. During my recent visit on 03/03/2024, I was treated rudely and my queries were dismissed without proper explanation. This experience has caused significant inconvenience and stress. I urge the concerned authorities to look into this matter and ensure that such behavior is addressed to maintain public trust in the system. ",
    },
    {
      img: "/images/doctor/patient.svg",
      name: "Emily W.",
      time: "2 Months ago",
      review:
        "I would like to raise a complaint regarding the unprofessional behavior of an income tax officer at theIT Department, ABC City. During my recent visit on 03/03/2024, I was treated rudely and my queries were dismissed without proper explanation. This experience has caused significant inconvenience and stress. I urge the concerned authorities to look into this matter and ensure that such behavior is addressed to maintain public trust in the system. ",
    },
    {
      img: "/images/doctor/patient.svg",
      name: "Emily W.",
      time: "2 Months ago",
      review:
        "I would like to raise a complaint regarding the unprofessional behavior of an income tax officer at theIT Department, ABC City. During my recent visit on 03/03/2024, I was treated rudely and my queries were dismissed without proper explanation. This experience has caused significant inconvenience and stress. I urge the concerned authorities to look into this matter and ensure that such behavior is addressed to maintain public trust in the system. ",
    },
    {
      img: "/images/doctor/patient.svg",
      name: "Emily W.",
      time: "2 Months ago",
      review:
        "I would like to raise a complaint regarding the unprofessional behavior of an income tax officer at theIT Department, ABC City. During my recent visit on 03/03/2024, I was treated rudely and my queries were dismissed without proper explanation. This experience has caused significant inconvenience and stress. I urge the concerned authorities to look into this matter and ensure that such behavior is addressed to maintain public trust in the system. ",
    },
  ];
  return (
    <div className={style.complaintOuter}>
      <div className={style.upr}>
        <h1 className={style.complaintHeading}>Complaints</h1>
        <button className={style.view}>View All</button>
      </div>

      <div className={style.cardContainer}>
        {complaints.map((item, index) => (
          <div key={index} className={style.cardOuter}>
            <div className={style.top}>
              <div className={style.details}>
                <img src={item.img} alt="" />
                <div className={style.nameDiv}>
                  <p className={style.name}>{item.name}</p>
                  <p className={style.time}>{item.time}</p>
                </div>
              </div>
              <div className={style.stars}>
                <img src="/images/doctor/reviewStar.svg" alt="" />
              </div>
            </div>
            <p className={style.review}>{item.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Complaints;
