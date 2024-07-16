import React from "react";
import style from "../styles/Footer.module.css";
import { useNavigate } from "react-router-dom";

function FooterChild({
  heading,
  link1,
  link2,
  link3,
  link4,
  link5,
  link6,
  link7,
  link8,
}) {
  const navigate = useNavigate();
  return (
    <div className={style.footerChildOuter}>
      <h1 className={style.footerChildheading}>{heading}</h1>
      <div className={style.footerChildParaContainer}>
        <p
          className={`${style.footerChildPara} hover:text-appGreen cursor-pointer`}
        >
          {link1}
        </p>
        <p
          className={`${style.footerChildPara} hover:text-appGreen cursor-pointer`}
        >
          {link2}
        </p>
        <p
          className={`${style.footerChildPara} hover:text-appGreen cursor-pointer`}
        >
          {link3}
        </p>
        <p
          className={`${style.footerChildPara} hover:text-appGreen cursor-pointer`}
        >
          {link4}
        </p>
        <p
          className={`${style.footerChildPara} hover:text-appGreen cursor-pointer`}
          onClick={() => {
            if (link5 === "Free Listing") {
              navigate("/list-yourself");
            }
          }}
        >
          {link5}
        </p>
        <p
          className={`${style.footerChildPara} hover:text-appGreen cursor-pointer`}
        >
          {link6}
        </p>
        <p
          className={`${style.footerChildPara} hover:text-appGreen cursor-pointer`}
        >
          {link7}
        </p>
        <p
          className={`${style.footerChildPara} hover:text-appGreen cursor-pointer`}
        >
          {link8}
        </p>
      </div>
    </div>
  );
}

export default FooterChild;
