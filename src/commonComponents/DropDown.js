import React, { useState, useEffect, useRef } from "react";
import style from "./DropDown.module.css";

function DropDown({ option1, option2, option3,option4,filterHeading }) {
  const [showDropDown, setShowDropDown] = useState(false);
  const [downArrow, setDownArrow] = useState("/images/doctor/downArrow.svg");
  const dropdownRef = useRef(null);
  
  console.log(showDropDown)
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropDown(false);
    }
  };

  useEffect(() => {
    if (showDropDown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropDown]);

  return (
    <div className={style.dropdownContainer} ref={dropdownRef}>
      <div
        className={style.specOuter2}
        onMouseEnter={() => setDownArrow("/images/doctor/hoverDownArrow.svg")}
        onMouseLeave={() => setDownArrow("/images/doctor/downArrow.svg")}
        onClick={() => setShowDropDown(!showDropDown)}
      >
        <p className={style.criterion}>{filterHeading}</p>
        <img src={downArrow} alt="" className={style.downImage} />
      </div>
      {showDropDown && (
        <div className={style.dropDown}>
          <p className={style.optionDropDown}>{option1}</p>
          <p className={style.optionDropDown}>{option2}</p>
          <p className={style.optionDropDown}>{option3}</p>
          <p className={style.optionDropDown}>{option4}</p>
        </div>
      )}
    </div>
  );
}

export default DropDown;
