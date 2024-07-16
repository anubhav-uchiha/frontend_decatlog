import React, { useState } from "react";
import style from "../doctorPages/DoctorDetail.module.css";

function BookAppointment({divHeading, btnHeading}) {
  const [visibleSection, setVisibleSection] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const toggleVisibility = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  return (
    <>
      <h1 className={style.appointmentHeading}>{divHeading}</h1>
      <div className={style.outer}>
        <div className={style.workingHours}>
          <div className={style.div1}>
            <p className={style.headingHours}>Working Hours</p>
            <p className={style.lunchTime}>(Lunch break- 2pm to 4pm)</p>
          </div>
          <div className={style.div2}>
            <p className={style.day}>Monday to Friday</p>
            <p className={style.time}>10am to 8pm</p>
          </div>
          <div className={style.div2}>
            <p className={style.day}>Saturday & Sunday</p>
            <p className={style.time}>11am to 6pm</p>
          </div>
        </div>

        <div className={style.selectTime}>
          <h1 className={style.timeHeading}>Select Time</h1>

          <div className={style.timeContainer}>
            <div
              className={style.mrng}
              onClick={() => toggleVisibility("morning")}
            >
              <p className={style.mrngPara}>Morning</p>
              <img
                src={
                  visibleSection === "morning"
                    ? "/images/teacher/upArrow.svg"
                    : "/images/teacher/downArrow.svg"
                }
                alt=""
                style={
                  visibleSection === "morning" ? {} : { marginRight: "3px" }
                }
              />
            </div>
            {visibleSection === "morning" && (
              <div className={style.selectTimeDiv}>
                <p
                  className={`${style.mrngTime} ${
                    selectedTime === "10:00 am" ? style.selectedTime : ""
                  }`}
                  onClick={() => handleTimeClick("10:00 am")}
                >
                  10:00 am
                </p>
                <p
                  className={`${style.mrngTime} ${
                    selectedTime === "10:30 am" ? style.selectedTime : ""
                  }`}
                  onClick={() => handleTimeClick("10:30 am")}
                >
                  10:30 am
                </p>
                <p
                  className={`${style.mrngTime} ${
                    selectedTime === "11:00 am" ? style.selectedTime : ""
                  }`}
                  onClick={() => handleTimeClick("11:00 am")}
                >
                  11:00 am
                </p>
                <p
                  className={`${style.mrngTime} ${
                    selectedTime === "11:30 am" ? style.selectedTime : ""
                  }`}
                  onClick={() => handleTimeClick("11:30 am")}
                >
                  11:30 am
                </p>
              </div>
            )}

            <div
              className={style.mrng}
              onClick={() => toggleVisibility("afternoon")}
            >
              <p className={style.mrngPara}>Afternoon</p>
              <img
                src={
                  visibleSection === "afternoon"
                    ? "/images/teacher/upArrow.svg"
                    : "/images/teacher/downArrow.svg"
                }
                alt=""
                style={
                  visibleSection === "afternoon" ? {} : { marginRight: "3px" }
                }
              />
            </div>
            {visibleSection === "afternoon" && (
              <div className={style.selectTimeDiv}>
                <p
                  className={`${style.mrngTime} ${
                    selectedTime === "2:00 pm" ? style.selectedTime : ""
                  }`}
                  onClick={() => handleTimeClick("2:00 pm")}
                >
                  2:00 pm
                </p>
                <p
                  className={`${style.mrngTime} ${
                    selectedTime === "2:30 pm" ? style.selectedTime : ""
                  }`}
                  onClick={() => handleTimeClick("2:30 pm")}
                >
                  2:30 pm
                </p>
                <p
                  className={`${style.mrngTime} ${
                    selectedTime === "3:00 pm" ? style.selectedTime : ""
                  }`}
                  onClick={() => handleTimeClick("3:00 pm")}
                >
                  3:00 pm
                </p>
                <p
                  className={`${style.mrngTime} ${
                    selectedTime === "3:30 pm" ? style.selectedTime : ""
                  }`}
                  onClick={() => handleTimeClick("3:30 pm")}
                >
                  3:30 pm
                </p>
              </div>
            )}

            <div
              className={style.mrng}
              onClick={() => toggleVisibility("evening")}
            >
              <p className={style.mrngPara}>Evening</p>
              <img
                src={
                  visibleSection === "evening"
                    ? "/images/teacher/upArrow.svg"
                    : "/images/teacher/downArrow.svg"
                }
                alt=""
                style={
                  visibleSection === "evening" ? {} : { marginRight: "3px" }
                }
              />
            </div>
            {visibleSection === "evening" && (
              <div className={style.selectTimeDiv}>
                <p
                  className={`${style.mrngTime} ${
                    selectedTime === "5:00 pm" ? style.selectedTime : ""
                  }`}
                  onClick={() => handleTimeClick("5:00 pm")}
                >
                  5:00 pm
                </p>
                <p
                  className={`${style.mrngTime} ${
                    selectedTime === "5:30 pm" ? style.selectedTime : ""
                  }`}
                  onClick={() => handleTimeClick("5:30 pm")}
                >
                  5:30 pm
                </p>
                <p
                  className={`${style.mrngTime} ${
                    selectedTime === "6:00 pm" ? style.selectedTime : ""
                  }`}
                  onClick={() => handleTimeClick("6:00 pm")}
                >
                  6:00 pm
                </p>
                <p
                  className={`${style.mrngTime} ${
                    selectedTime === "6:30 pm" ? style.selectedTime : ""
                  }`}
                  onClick={() => handleTimeClick("6:30 pm")}
                >
                  6:30 pm
                </p>
              </div>
            )}
          </div>
        </div>
        <button className={style.book}>{btnHeading}</button>
      </div>
    </>
  );
}

export default BookAppointment;
