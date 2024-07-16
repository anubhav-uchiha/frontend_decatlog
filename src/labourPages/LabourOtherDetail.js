import React from "react";
import style from "../commonComponents/FeeStructure.module.css";

function LabourOtherDetail() {
  return (
    <div className={style.caOuter} style={{ height: "150px" }}>
      <h1 className={style.caFeeHeading}>Others Details</h1>
      <div className={style.caFeeDetails} style={{ height: "98px",gap:"50px" }}>
        <div className={style.type}>
          <p className={style.criterion2}>Salary</p>
          <p className={style.criterion2}>Accomodation</p>
          <p className={style.criterion2}>Day Off</p>
        </div>
        <div className={style.type}>
          <p className={style.criterion2}>$625/Month</p>
          <p className={style.criterion2}>Live in- Separate Room</p>
          <p className={style.criterion2}>Sunday</p>
        </div>
      </div>
    </div>
  );
}

export default LabourOtherDetail;
