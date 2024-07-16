import React from "react";
import style from "../styles/CustomerStories.module.css";
import CustomerCard1 from "./CustomerCard1";
import CustomerCard3 from "./CustomerCard3";
import CustomerCard4 from "./CustomerCard4";

function CustomerStories() {
  return (
    <div className={style.outerContainer}>
      <div className={style.innerContainer}>
        <div className={style.topDiv}>
          <div className={style.leftDiv}>
            <h1 className={style.heading}>
              CUSTOMER <span className={style.headingSpan}>STORIES</span>
            </h1>
            <p className={style.paraTopDiv}>
              Read What Our Users Have to Say About Their Experiences
            </p>
          </div>
          <div className={`${style.rightDiv}`}>
            <button className={`${style.viewBtn}`}>VIEW ALL</button>
          </div>
        </div>
        <div className={style.btmDiv}>
          <div className={style.btmChild1}>
            <CustomerCard1 />
            <CustomerCard4
              name="John Walter"
              img="/images/miss/card2.svg"
              width="263px"
              height="243px"
              paddingTop="18.23px"
              paddingLeft="9.67px"
              para="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam"
              paraMarginLeft="0px"
              paraWidth="183px"
              paraHeight="137px"
            />
          </div>

          <div className={style.btmChild2}>
            <CustomerCard3 />
            <CustomerCard4
              name="Mahesh"
              img="/images/miss/card4.svg"
              height="185px"
              width="540px"
              paddingTop="23.03px"
              paddingLeft="47px"
              para="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              paraMarginLeft="0px"
              paraWidth="438.81px"
              paraHeight="60.49px"
            />
            <CustomerCard4
              name="Sahiba"
              img="/images/miss/card5.svg"
              height="215px"
              width="540px"
              paddingTop="23.03px"
              paddingLeft="47px"
              para="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              paraMarginLeft="0px"
              paraWidth="438.81px"
              paraHeight="60.49px"
            />
          </div>

          <div className={style.btmChild3}>
            <CustomerCard4
              name="Alia Sahani"
              img="/images/miss/card6.svg"
              width="289px"
              height="241px"
              paddingTop="13px"
              paddingLeft="15px"
              para="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt "
              paraMarginLeft="50px"
              paraWidth="200.68px"
              paraHeight="133.47px"
            />

            <CustomerCard4
              name="Alia Sahani"
              img="/images/miss/card6.svg"
              width="289px"
              height="432px"
              paddingTop="20px"
              paddingLeft="15px"
              para="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat suntAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat suntAmet minim mollit non deserunt ullamco est sit."
              paraMarginLeft="50px"
              paraWidth="201px"
              paraHeight="295px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerStories;
