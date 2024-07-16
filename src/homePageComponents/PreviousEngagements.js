import React, { useState } from "react";
import style from "../styles/PreviousEngagements.module.css";
import PreviousEngagementsChild from "./PreviousEngagementsChild";
function PreviousEngagements() {
  const [activeCategory, setActiveCategory] = useState("Doctors");

  const categories = [
    "Doctors",
    "Engineers",
    "CA's",
    "Advocates",
    "Teachers",
    "Labours",
    "Officers",
    "Govt. Officials",
  ];

  return (
    <div className={style.outermostPreviousContainer}>
      <div className={style.innerPreviousContainer}>
        <div className={style.topDiv}>
          <div className={style.upperDiv}>
            <h1 className={style.heading}>
              Previous <span className={style.headingSpan}>Engagements</span>
            </h1>
            <p className={style.para}>Review your previous interactions</p>
          </div>
          <div className={style.rightDiv}>
            <button className={`${style.viewBtn}`}>VIEW ALL</button>
          </div>
        </div>

        <div className={`${style.midDiv} border-b border-grayish`}>
          {categories.map((category) => (
            <div
              key={category}
              className={`${style.midDivPara} ${
                activeCategory === category ? style.active : ""
              } cursor-pointer`}
            >
              <p
                className={`${style.midDivPara2} hover:text-appGreen cursor-pointer`}
                onClick={() => setActiveCategory(category)}
                style={
                  activeCategory === category
                    ? {
                        color: "#47e0c9",
                      }
                    : {}
                }
              >
                {category}
              </p>
            </div>
          ))}
        </div>
        <PreviousEngagementsChild activeCategory={activeCategory} />
      </div>
    </div>
  );
}

export default PreviousEngagements;
