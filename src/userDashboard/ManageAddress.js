import React, { useState } from "react";
import style from "./PersonalInfoAndManageAddress.module.css";

function ManageAddress() {
  const [isAddNewClicked, setIsAddNewClicked] = useState(false);

  const handleAddNewClick = () => {
    setIsAddNewClicked(true);
  };
  return (
    <div className={style.addContainer}>
      <div className={style.topDivAdd}>
        <p className={style.manageAdd}>Manage Addresses</p>
        <button
          className={`${style.newAdd} ${
            isAddNewClicked ? style.newAddClicked : ""
          }`}
          onClick={handleAddNewClick}
        >
          + Add a new Address
        </button>
      </div>

      <div className={style.midDivAdd}>
        <p className={style.defaultAdd}>Default Address</p>
        <div className={style.defaultInnerDiv}>
          <div className={style.defaultAddContainer}>
            <h1 className={style.name}>Jenny Wilson</h1>
            <p className={style.addLineOne}>
              2118 Thornridge Cir. Syracuse, Connecticut 35624
            </p>
            <p className={style.addLineOne}>Mobile: 629.555.0129</p>
          </div>
          <div className={style.btnDiv}>
            <button className={style.editBtn}>EDIT</button>
            <button className={style.removeBtn}>REMOVE</button>
          </div>
        </div>
      </div>

      <div className={style.btmDivAdd}>
        <p className={style.defaultAdd}>Other Address</p>
        <div className={style.defaultInnerDiv}>
          <div className={style.defaultAddContainer}>
            <h1 className={style.name}>Jenny Wilson</h1>
            <p className={style.addLineOne}>
              2118 Thornridge Cir. Syracuse, Connecticut 35624
            </p>
            <p className={style.addLineTwo}>Mobile: 629.555.0129</p>
          </div>
        </div>

        <div className={style.defaultInnerDiv}>
          <div className={style.defaultAddContainer}>
            <h1 className={style.name}>Jenny Wilson</h1>
            <p className={style.addLineOne}>
              2118 Thornridge Cir. Syracuse, Connecticut 35624
            </p>
            <p className={style.addLineTwo}>Mobile: 629.555.0129</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageAddress;
