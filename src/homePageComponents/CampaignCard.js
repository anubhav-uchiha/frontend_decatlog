import React from "react";
import style from "../styles/Campaigns.module.css";

function CampaignCard() {
  return (
    <div className={`${style.cardOuterContainer} hover:scale-110`}>
      <div className={`${style.cardInnerContainer} relative`}>
        <div className={style.topDiv}>
          <img
            src="/images/girlEducation.svg"
            alt=""
            className={style.topDivImg}
          />
        </div>

        <div className={style.btmDiv}>
          <div className={style.infoDiv}>
            <div className={style.uprDiv}>
              <h1 className={style.headingCard}>Help Girl Education</h1>
              <div className={style.paraDiv}>
                <div className={style.imgDiv}>
                  <img src="/images/book.svg" alt="" className={style.image} />
                </div>
                <p className={style.para}>Education</p>
              </div>
              <p className={style.empower}>
                Empower girls worldwide through education and unlock limitless
                potential for change.
              </p>
            </div>

            <div className={style.lwrDiv}>
              <div className={style.topLwr}>
                <p className={style.raised}>
                  Raised: <span className={style.spanLwrDiv}>Rs 72,000</span>
                </p>
                <p className={style.goal}>
                  Goal: <span className={style.spanLwrDiv}>Rs 100,000</span>
                </p>
              </div>
              <div className={style.midLwr}>
                <img
                  src="/images/progress.svg"
                  alt=""
                  className={style.raisedByImage}
                />
              </div>
              <p className={style.raisedBy}>Raised by 84 people in 12 days</p>
            </div>
          </div>

          <button
            className={`${style.donate}`}
            onMouseEnter={(e) => {
              e.stopPropagation();
            }}
          >
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CampaignCard;
