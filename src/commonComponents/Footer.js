import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import FooterChild from "./FooterChild";
import style from "../styles/Footer.module.css";

function Footer({ shadow }) {
  return (
    <div
      className={style.outermostSectionContainer}
      style={
        shadow
          ? {
              boxShadow: "0px -1px 12.4px 0px rgba(150, 150, 150, 0.05)",
              backgroundImage: "url(/images/Bcg.svg)",
            }
          : { backgroundImage: "url(/images/Bcg.svg)" }
      }
    >
      <div className={style.topDiv}>
        <div className={style.leftDiv}>
          <div className={style.imgContainer}>
            <img src="/images/logo.svg" alt="" className={style.logo} />
            <p className={style.para}>
              Empowering communities through seamless access to professional
              services and fundraising opportunities
            </p>
          </div>

          <div className={style.infoContainer}>
            <div className={style.detailAddress}>
              <FontAwesomeIcon
                icon={faLocationDot}
                className={style.locationDot}
              />
              <p className="">
                70 Washington Square South, New York, NY 10012, US
              </p>
            </div>

            <div className={style.detailContact}>
              <FontAwesomeIcon icon={faPhone} className={style.phoneIcon} />
              <p className="">+91-9876543214</p>
            </div>

            <div className={style.detailEmail}>
              <FontAwesomeIcon
                icon={faEnvelope}
                className={style.envelopeIcon}
              />
              <p className="">info@companyname.com</p>
            </div>
          </div>

          <div className={style.allIcons}>
            <img src="/images/fb.svg" alt="" className={style.facebookIcon} />
            <img
              src="/images/insta.svg"
              alt=""
              className={style.instagramIcon}
            />
            <img
              src="/images/linkedin.svg"
              alt=""
              className={style.linkedInIcon}
            />
            <img
              src="/images/youtube.svg"
              alt=""
              className={style.youtubeIcon}
            />
            <img
              src="/images/twitter.svg"
              alt=""
              className={style.twitterIcon}
            />
          </div>
        </div>

        <div className={style.rightDiv}>
          <div className={style.rightTopDiv}>
            <p className="">Locations</p>
            <FontAwesomeIcon icon={faAngleDown} className={style.arrowIcon} />
          </div>
          <div className={style.footerChildContainer}>
            <FooterChild
              heading="Quick Links"
              link1="About Us"
              link2="Investor Relations"
              link3="We're hiring"
              link4="Customer Care"
              link5="Free Listing"
              link6="What's New"
              link7="Report A Bug"
              link8="B2B Sitemap"
            />

            <FooterChild
              heading="Popular Categories"
              link1="Doctor's"
              link2="Engineer's"
              link3="CA's"
              link4="Advocates"
              link5="Teachers"
              link6="Labourers"
              link7="Officers"
              link8="Govt. Officials"
            />

            <FooterChild
              heading="Popular Cities"
              link1="New Delhi"
              link2="Pune"
              link3="Surat"
              link4="Mumbai"
              link5="Panaji"
              link6="Banglore"
              link7="Chandigarh"
              link8="Srinagar"
            />
          </div>
        </div>
      </div>

      <h1 className={style.headingFooter}>
        Copyrights 2008-24. All Rights Reserved.
      </h1>
    </div>
  );
}

export default Footer;
