import React, { useState } from "react";
import style from "./PersonalInfoAndManageAddress.module.css";

function PersonalInfo() {
  const [isEditable, setIsEditable] = useState({
    name: false,
    email: false,
    mobile: false,
  });

  const handleEditClick = (field) => {
    setIsEditable((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <div className={style.personalInfoOuter}>
      <div className={style.commonDiv}>
        <div className={style.topDiv}>
          <p className={style.para}>Personal Information</p>
          <button
            className={style.edit}
            onClick={() => handleEditClick("name")}
          >
            {isEditable.name ? "Save" : "Edit"}
          </button>
        </div>
        <div className={style.btmDiv}>
          <input
            type="text"
            className={style.input1}
            placeholder="Jenny"
            readOnly={!isEditable.name}
          />
          <input
            type="text"
            className={style.input1}
            placeholder="Wilson"
            readOnly={!isEditable.name}
          />
        </div>
      </div>

      <div className={style.genderDiv}>
        <p className={style.paraGender}>Your Gender</p>

        <div className={style.topDiv}>
          <label>
            <input type="radio" name="gender" value="male" disabled /> Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" checked /> Female
          </label>
        </div>
      </div>

      <div className={style.commonDiv}>
        <div className={style.topDiv}>
          <p className={style.para}>Email Address</p>
          <button
            className={style.edit}
            onClick={() => handleEditClick("email")}
          >
            {isEditable.email ? "Save" : "Edit"}
          </button>
        </div>
        <input
          type="text"
          className={style.input1}
          placeholder="willie.jennings@example.com"
          readOnly={!isEditable.email}
        />
      </div>
      <div className={style.commonDiv}>
        <div className={style.topDiv}>
          <p className={style.para}>Mobile Number</p>
          <button
            className={style.edit}
            onClick={() => handleEditClick("mobile")}
          >
            {isEditable.mobile ? "Save" : "Edit"}
          </button>
        </div>
        <input
          type="text"
          className={style.input1}
          placeholder="629.555.0129"
          readOnly={!isEditable.mobile}
        />
      </div>
    </div>
  );
}

export default PersonalInfo;
