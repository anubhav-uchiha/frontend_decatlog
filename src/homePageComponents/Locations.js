import React from "react";
import LocationsCard from "./LocationsCard";
import style from "../styles/Locations.module.css";

function Locations() {
  return (
    <div className={style.outermostLocationsContainer}>
      <div className={style.locationsContainer}>
        <div className={style.leftDiv}>
          <img src="/images/map.svg" alt="" className={style.image} />
        </div>

        <div className={style.rightDiv}>
          <h1 className={style.heading}>
            FEATURES <span className={style.headingSpan}>LOCATIONS</span>
          </h1>

          <p className={style.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
            condimentum lectus. Etiam dignissim nisl sem, eu laoreet ex
            vestibulum ac.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed posuere condimentum lectus.
          </p>

          <div className={style.divContainer}>
            <div className={style.div1}>
              <LocationsCard
                img={"/images/location.svg"}
                location="Jammu & Kashmir"
              />
              <LocationsCard img={"/images/location.svg"} location="Delhi" />
              <LocationsCard img={"/images/location.svg"} location="Punjab" />
            </div>

            <div className={style.div2}>
              <LocationsCard img={"/images/location.svg"} location="Haryana" />
              <LocationsCard
                img={"/images/location.svg"}
                location="Madhya Pradesh"
              />
              <LocationsCard
                img={"/images/location.svg"}
                location="uttar Pradesh"
              />
            </div>

            <div className={style.div3}>
              <LocationsCard
                img={"/images/location.svg"}
                location="Maharastra"
              />
              <LocationsCard img={"/images/location.svg"} location="Gujrat" />
              <LocationsCard
                img={"/images/location.svg"}
                location="Rajasthan"
              />
            </div>

            <div className={style.div4}>
              <LocationsCard
                img={"/images/location.svg"}
                location="Chattisgarh"
              />
              <LocationsCard img={"/images/location.svg"} location="Bihar" />
              <LocationsCard img={"/images/location.svg"} location="Kerala" />
            </div>

            <div className={style.div5}>
              <LocationsCard
                img={"/images/location.svg"}
                location="Arunachal Pradesh"
              />
              <LocationsCard img={"/images/location.svg"} location="Assam" />
              <LocationsCard
                img={"/images/location.svg"}
                location="Andhra Pradesh"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Locations;
