import style from "./FeeStructure.module.css";
function TeacherFee() {
  return (
    <div className={style.feeOuter}>
      <h1 className={style.heading}>Fee Details</h1>
      <div className={style.detailContainer}>
        <div className={style.leftDiv}>
          <p className={style.category}>20 Min free trial lesson</p>
          <p className={style.category}>1 Lesson</p>
          <p className={style.category}>5 Lessons</p>
          <p className={style.category}>10 Lessons</p>
        </div>
        <div className={style.rightDiv}>
          <p className={style.category}>$0</p>
          <p className={style.category}>$22</p>
          <p className={style.category}>
            <span className={style.span}>$110</span>$100
          </p>
          <p className={style.category}>
            <span className={style.span}>$220</span>$195
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeacherFee;

export function CaFee() {
  return (
    <div className={style.caOuter}>
      <h1 className={style.caFeeHeading}>Fee Details*</h1>
      <div className={style.caFeeDetails}>
        <div className={style.type}>
          <p className={style.criterion1}>Type</p>
          <p className={style.criterion}>Individual Tax Consultation</p>
          <p className={style.criterion}>Small Business Financial Advisory</p>
          <p className={style.criterion}>Corporate Tax Planning</p>
          <p className={style.criterion}>Start-up Business Consultation</p>
          <p className={style.criterion}>Estate Planning Consultation</p>
          <p className={style.criterion}>Financial Audit Services</p>
        </div>
        <div className={style.type}>
          <p className={style.criterion1}>Fee</p>
          <p className={style.criterion}>$150/hr</p>
          <p className={style.criterion}>$200/hr</p>
          <p className={style.criterion}>$250/hr</p>
          <p className={style.criterion}>$300/hr</p>
          <p className={style.criterion}>$200/hr</p>
          <p className={style.criterion}>$200/hr</p>
        </div>
        <div className={style.type}>
          <p className={style.criterion1}>Duration</p>
          <p className={style.criterion}>1 hour</p>
          <p className={style.criterion}>2 hour</p>
          <p className={style.criterion}>3 hour</p>
          <p className={style.criterion}>1.5 hour</p>
          <p className={style.criterion}>2.5 hour</p>
          <p className={style.criterion}>4 hour</p>
        </div>
        <div className={style.type}>
          <p className={style.criterion1}>Total Fee</p>
          <p className={style.criterion}>$150</p>
          <p className={style.criterion}>$400</p>
          <p className={style.criterion}>$750</p>
          <p className={style.criterion}>$450</p>
          <p className={style.criterion}>$520</p>
          <p className={style.criterion}>$1200</p>
        </div>
      </div>
      <p className={style.note}>
        *Please note that our fee structure is subject to change. Contact us for
        the most up-to-date information on our pricing and service offerings
      </p>
    </div>
  );
}
