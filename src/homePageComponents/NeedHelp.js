import React from "react";
import style from "../styles/NeedHelp.module.css";
function NeedHelp() {
  return (
    <div className={style.needHelpOuterContainer}>
      <div className={style.needHelpContainer}>
        <div className={style.leftDiv}>
          <h1 className={style.heading}>
            NEED <span className={style.headingSpan}>HELP & SUPPORT</span>
          </h1>
          <p className={style.para}>
            Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
            Dolor
          </p>
          <div className={style.detailContainer}>
            <div className={style.envelopIconDiv}>
              <img src="images/services/mail.svg" alt="" />
            </div>
            <p className={style.emailPara}>info@companyname.com</p>
          </div>

          <div className={style.detailContainer}>
            <div className={style.phoneIconDiv}>
              <img src="images/services/phone.svg" alt="" />
            </div>
            <p className={style.phonePara}>+ 91 1234567891</p>
          </div>
        </div>

        <div className={style.rightDiv}>
          <div className={style.topDiv}>
            <div className={style.topLeft}>
              <label htmlFor="" className={style.firstNameLabel}>
                First Name
              </label>
              <input type="text" value="" className={style.firstNameInput} />
            </div>

            <div className={style.topRight}>
              <label htmlFor="" className={style.lastNameLabel}>
                Last Name
              </label>
              <input type="text" value="" className={style.lastNameInput} />
            </div>
          </div>

          <div className={style.middleDiv}>
            <div className={style.midLeft}>
              <label htmlFor="" className={style.emailLabel}>
                Email
              </label>
              <input type="text" value="" className={style.emailInput} />
            </div>

            <div className={style.midRight}>
              <label htmlFor="" className={style.numberLabel}>
                Phone Number
              </label>
              <input type="text" value="" className={style.numberInput} />
            </div>
          </div>

          <div className={style.btmDiv}>
            <label htmlFor="" className={style.messageLabel}>
              Message
            </label>
            <textarea
              rows={8}
              type="text"
              value=""
              className={style.messageInput}
            />
          </div>

          <button
            className={`${style.btn}`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default NeedHelp;
