import React, { useState, useEffect, useRef } from "react";
import style from "./SearchBar.module.css";
import SuggestionsDiv from "../homePageComponents/SuggestionsDiv";

function SearchBar({ userDashboard, placeholderProp }) {
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchBarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      setShowSuggestion(false);
    }
  };

  const handleSearchIconClick = () => {
    setShowSuggestion(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={searchBarRef}
      className={`${style.upperDiv} relative`}
      style={userDashboard ? { height: "fit-content" } : {}}
    >
      {!userDashboard && (
        <div className={style.topUpper}>
          <h1 className={style.paraTopUpper}>
            Lorem Ipsum Dolor Sit Amet,
            <span className={style.paraSpanTopUpper}>
              {" "}
              Consectetur Adipiscing Elit
            </span>
          </h1>
        </div>
      )}

      <div className={`${style.btmUpper}`}>
        <div
          className={`${style.leftBtmUpper}`}
          onClick={handleSearchIconClick}
        >
          <div className={style.iconDiv}>
            <img src="/images/services/locationIcon.svg" alt="" />
          </div>

          <div className={`${style.inputIconDiv}`}>
            <input
              type="text"
              name=""
              id=""
              placeholder="Location"
              className={`${style.inputBtm} box-border cursor-pointer  outline-none`}
            />
            <img
              src="/images/services/downArrow.svg"
              alt=""
              className={style.downIcon}
            />
          </div>
        </div>
        <div
          className={`${style.midBtmUpper} relative`}
          onClick={() => {
            setShowSuggestion(!showSuggestion);
          }}
        >
          <input
            type="text"
            name=""
            id=""
            className={`${style.input2} cursor-pointer outline-none`}
            placeholder={placeholderProp}
          />
        </div>

        <div className={style.rightBtmUpper} onClick={handleSearchIconClick}>
          <img src="/images/services/Search.svg" alt="" />
        </div>
      </div>
      {showSuggestion && <SuggestionsDiv />}
    </div>
  );
}

export default SearchBar;
