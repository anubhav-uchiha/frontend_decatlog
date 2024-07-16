import React, { useState } from "react";
import style from "./GovtDetailOfficeSubheadingCard.module.css";

function GovtDetailOfficeSubheadingCard({
  component,
  setComponent,
  detail1,
  detail2,
  detail3,
  detail4,
  detail5,
}) {
  const [activeCriterion, setActiveCriterion] = useState(
    "State Department of Finance"
  );
  const filterArray = [detail1, detail2, detail3, detail4, detail5].filter(
    Boolean
  );

  const handleClick = (criterion) => {
    setActiveCriterion(criterion);
    setComponent(criterion);
  };

  return (
    <div className={style.filterCardContainer}>
      {filterArray.map((criterion, index) => (
        <div
          key={index}
          className={`${style.criterionContainer} ${
            activeCriterion === criterion ? style.activeSpec : ""
          }`}
          onClick={() => handleClick(criterion)}
        >
          <p className={style.criterion}>{criterion}</p>
        </div>
      ))}
    </div>
  );
}

export default GovtDetailOfficeSubheadingCard;
