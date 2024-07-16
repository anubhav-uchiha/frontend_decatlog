import React from "react";
import style from "../styles/Campaigns.module.css";
import CampaignCard from "./CampaignCard";
function Campaigns() {
  return (
    <div
      className={style.campaignOutermostContainer}
      style={{
        background: "url(/images/Backgrounds.svg)",
        backgroundPosition: "30% 10%",
      }}
    >
      <div className={style.campaignInnerContainer}>
        <div className={style.campaingTopDiv}>
          <div className={style.topLeft}>
            <h1 className={style.heading}>
              ONGOING <span className={style.headingSpan}>CAMPAIGNS</span>
            </h1>
            <p className={style.paraCard}>
              Join us in making a difference. Your support fuels change.
            </p>
          </div>
          <div className={`${style.topRight}`}>
            <button className={style.view}>VIEW ALL</button>
          </div>
        </div>

        <div className={style.campaignBtmDiv}>
          <div className={style.leftBtmDiv}>
            <CampaignCard />
            <CampaignCard />
            <CampaignCard />
            <CampaignCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Campaigns;
