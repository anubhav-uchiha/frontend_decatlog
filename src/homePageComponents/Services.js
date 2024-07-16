import React from "react";
import style from "../styles/Services.module.css";
import ServicesCard from "./ServicesCard";
import ServiceCard2 from "./ServiceCard2";
import ServicesCard3 from "./ServicesCard3";
import ServiceCard2A from "./ServiceCard2A";
import CarouselComp2 from "./CarouselComp2";
import SearchBar from "../commonComponents/SearchBar";

function Services() {
  return (
    <div className={`${style.outermostSectionContainer} `}>
      <div className={`${style.sectionContainer} `}>
        <SearchBar placeholderProp="Search doctors, advocates, teachers and many more....." />
        <div className={style.midDiv}>
          <div className={style.leftMid}>
            <CarouselComp2 />
          </div>
          <div className={style.rightMid}>
            <div className={style.topRight}>
              {" "}
              <ServicesCard
                img="/images/services/doc.svg"
                title="Doctors"
                bcg="radial-gradient(50% 52.82% at 50% 50%, #FFFFFF 28.4%, #D7E6F4 63.9%, #A7C7E7 100%)"
              />
              <ServicesCard
                img="/images/services/engg.svg"
                title="Engineers"
                bcg="radial-gradient(50% 52.82% at 50% 50%, #FFFFFF 28.4%, rgba(254, 152, 50, 0.4) 63.9%, rgba(255, 141, 34, 0.6) 100%)"
              />
              <ServicesCard
                img="/images/services/ca.png"
                title="CA's"
                bcg="radial-gradient(50% 52.82% at 50% 50%, #FFFFFF 28.4%, rgba(11, 219, 182, 0.36) 63.9%, rgba(11, 219, 182, 0.9) 100%) "
              />
              <ServicesCard
                img="/images/services/adv.svg"
                title="Advocates"
                bcg="radial-gradient(50% 52.82% at 50% 50%, #FFFFFF 28.4%, rgba(189, 178, 255, 0.5) 63.9%, rgba(189, 178, 255, 0.8) 100%)"
              />
            </div>
            <div className={style.btmRight}>
              <ServicesCard
                img="/images/services/teacher.svg"
                title="Teachers"
                bcg="radial-gradient(50% 52.82% at 50% 50%, #FFFFFF 28.4%,rgba(253, 255, 182, 0.5) 63.9%, rgba(253, 255, 182, 0.8) 100%)"
              />
              <ServicesCard
                img="/images/services/lab.svg"
                title="Labours"
                bcg="radial-gradient(50% 52.82% at 50% 50%, #FFFFFF 28.4%, rgba(255, 173, 173, 0.5) 63.9%, #FFADAD 100%)"
              />
              <ServicesCard
                img="/images/services/off.svg"
                title="Officers"
                bcg="radial-gradient(50% 52.82% at 50% 50%, #FFFFFF 28.4%, rgba(255, 198, 255, 0.8) 63.9%, #FFC6FF 100%)"
              />
              <ServicesCard
                img="/images/services/govt off.svg"
                title="Govt. Officers"
                bcg="radial-gradient(50% 52.82% at 50% 50%, #FFFFFF 28.4%, rgba(155, 246, 255, 0.5) 63.9%, rgba(155, 246, 255, 0.8) 100%)"
              />
            </div>
          </div>
        </div>
        <div className={style.btmDiv}>
          <ServiceCard2
            title1="START FUNDRAISING"
            img="/images/services/fund.png"
            bcg="rgba(0, 134, 110, 1)"
          />
          <ServiceCard2A
            title1="DONATE NOW"
            img="/images/services/donate.png"
            bcg="rgba(36, 54, 94, 1)"
          />
          <ServicesCard3 />
        </div>
      </div>
    </div>
  );
}

export default Services;
