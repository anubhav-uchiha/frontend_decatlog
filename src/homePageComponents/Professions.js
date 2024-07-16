import React from "react";
import ProfessionCard from "./ProfessionCard";
import style from "../styles/Professions.module.css";

function Professions() {
  return (
    <div className={style.outermostSectionContainer}>
      <div className={style.innerContainer2}>
        <div className={style.topDiv}>
          <div className={style.topLeft}>
            <h1 className={style.heading}>
              EXPLORE DIVERSE{" "}
              <span className={style.headingSpan}>PROFESSIONS</span>
            </h1>
            <p className={style.para}>
              Discover the Range of Expertise Available at Your Fingertips
            </p>
          </div>
          <div className={`${style.topRight}`}>
            <button className={style.view}>VIEW ALL</button>
          </div>
        </div>

        <div className={style.btmDiv}>
          <div className={style.btm1}>
            <div className={style.leftBtm1}>
              <ProfessionCard
                img={"/images/profession/ayurvedic1.svg"}
                title={"Ayurvedic Doctors"}
              />

              <ProfessionCard
                img={"/images/profession/civil1.svg"}
                title={"Civil Engineers"}
              />
            </div>
            <div className={style.rightBtm1}>
              <ProfessionCard
                img={"/images/profession/chemistry1.svg"}
                title={"Chemistry Teachers"}
              />

              <ProfessionCard
                img={"/images/profession/lawyer1.svg"}
                title={"Criminal Lawyers"}
              />
            </div>
          </div>

          <div className={style.btm2}>
            <div className={style.leftBtm2}>
              <ProfessionCard
                img={"/images/profession/soft.svg"}
                title={"Software Engineers"}
              />
              <ProfessionCard
                img={"/images/profession/child.svg"}
                title={"Child Specialists"}
              />
            </div>
            <div className={style.rightBtm2}>
              <ProfessionCard
                img={"/images/profession/auditor.svg"}
                title={"Auditors"}
              />

              <ProfessionCard
                img={"/images/profession/neuro.svg"}
                title={"Neurologists"}
              />
            </div>
          </div>

          <div className={style.btm3}>
            <div className={style.leftBtm3}>
              <ProfessionCard
                img={"/images/profession/english.svg"}
                title={"English Teachers"}
              />
              <ProfessionCard
                img={"/images/profession/dcp.svg"}
                title={"DCP"}
              />
            </div>
            <div className={style.rightBtm3}>
              <ProfessionCard
                img={"/images/profession/dentists.svg"}
                title={"Dentists"}
              />

              <ProfessionCard
                img={"/images/profession/physics.svg"}
                title={"Physics Teachers"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Professions;
