import React from "react";
import style from "../styles/Locations.module.css";
function LocationsCard({ img, location }) {
  return (
    <div className={style.locationCardOuter}>
      <div className={style.imageDiv}>
        <img src={img} alt="" className={style.locationCardImage} />
      </div>
      <p className={style.locationCardPara}>{location}</p>
    </div>
  );
}

export default LocationsCard;
