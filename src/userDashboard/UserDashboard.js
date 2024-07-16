import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SearchBar from "../commonComponents/SearchBar";
import PersonalInfo from "./PersonalInfo";
import ManageAddress from "./ManageAddress";
import Header from "../commonComponents/Header";
import Footer from "../commonComponents/Footer";
import Reviews from "./ReviewsAndRating";
import style from "./UserDashboard.module.css";
import API_BASE_URL from "../apiConfig";

function UserDashboard() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("personalInfo");
  const [rightDivOption, setRightDivOption] = useState("personalInfo");
  const [deleteIcon, setDeleteIcon] = useState("/images/blogs/delete.svg");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setRightDivOption(option);
    if (option === "logout") {
      // navigate("/");
      logoutUser();
    }
  };

  const logoutUser = async () => {
    try {
      const userId = JSON.parse(localStorage.getItem("user"))._id;
      console.log(userId);
      await axios.put(`${API_BASE_URL}/users/logoutUser/${userId}`);
      localStorage.removeItem("user");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header userDashboard="true" />
      <div className={style.outerSection}>
        <div className={style.innerSection}>
          <div className={style.searchContainer}>
            <SearchBar userDashboard="true" />
          </div>
          <div className={style.contentContainer}>
            <div className={style.left}>
              <div className={style.leftTop}>
                <div className={style.imgDiv}>
                  <img
                    src="/images/blogs/user.svg"
                    alt=""
                    className={style.img}
                  />
                </div>

                <div className={style.nameDiv}>
                  <h1 className={style.greeting}>Hello,</h1>
                  <h1 className={style.name}>Jenny Wilson</h1>
                </div>
              </div>

              <div className={style.leftBtm}>
                <div
                  className={`${style.btmDiv1} ${
                    selectedOption === "appointments" ? style.selected : ""
                  }`}
                  onClick={() => handleOptionClick("appointments")}
                >
                  <img src="/images/blogs/appoint.svg" alt="" />
                  <p className={style.para1}>MY APPOINTMENTS</p>
                </div>

                <div className={style.btmDiv4}>
                  <div className={style.btmDiv2A}>
                    <img src="/images/blogs/setting.svg" alt="" />
                    <p className={style.para1}>ACCOUNT SETTINGS</p>
                  </div>

                  <div
                    className={`${style.option1} ${
                      selectedOption === "personalInfo" ? style.selected : ""
                    }`}
                    onClick={() => handleOptionClick("personalInfo")}
                  >
                    <p className={style.para2}>Profile Information</p>
                  </div>
                  <div
                    className={`${style.option1} ${
                      selectedOption === "manageAddresses" ? style.selected : ""
                    }`}
                    onClick={() => handleOptionClick("manageAddresses")}
                  >
                    <p className={style.para3}>Manage Addresses</p>
                  </div>
                </div>

                <div className={style.btmDiv5}>
                  <div className={style.btmDiv2A}>
                    <img src="/images/blogs/other.svg" alt="" />
                    <p className={style.para1}>OTHER</p>
                  </div>

                  <div
                    className={`${style.option1} ${
                      selectedOption === "reviews" ? style.selected : ""
                    }`}
                    onClick={() => handleOptionClick("reviews")}
                  >
                    <p className={style.para2}>Reviews & Ratings</p>
                  </div>
                  <div
                    className={`${style.option1} ${
                      selectedOption === "favourites" ? style.selected : ""
                    }`}
                    onClick={() => handleOptionClick("favourites")}
                  >
                    <p className={style.para3}>Favourites</p>
                  </div>
                  <div
                    className={`${style.option1} ${
                      selectedOption === "support" ? style.selected : ""
                    }`}
                    onClick={() => handleOptionClick("support")}
                  >
                    <p className={style.para3}>Customer Support</p>
                  </div>
                </div>

                <div
                  className={`${style.btmDiv2} ${
                    selectedOption === "logout" ? style.selected : ""
                  }`}
                  onClick={() => handleOptionClick("logout")}
                >
                  <img src="/images/blogs/logout.svg" alt="" />
                  <p className={style.para1}>LOGOUT</p>
                </div>

                <div
                  className={`${style.btmDiv3} ${
                    selectedOption === "delete" ? style.selected : ""
                  }`}
                  onClick={() => handleOptionClick("delete")}
                >
                  <img src={deleteIcon} alt="" />
                  <p
                    className={style.paraDelete}
                    onMouseEnter={() => {
                      setDeleteIcon("/images/blogs/hoverDelete.svg");
                    }}
                    onMouseLeave={() => {
                      setDeleteIcon("/images/blogs/delete.svg");
                    }}
                  >
                    Delete Account
                  </p>
                </div>
              </div>
            </div>
            <div className={style.right}>
              {rightDivOption === "personalInfo" && <PersonalInfo />}
              {rightDivOption === "manageAddresses" && <ManageAddress />}
              {rightDivOption === "reviews" && <Reviews />}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default UserDashboard;
