import React from "react";
import style from "./StateDepartmentOfFinance.module.css";
function StateDepartmentOfFinance() {
  return (
    <div className={style.outer}>
      <h1 className={style.heading}>State Department of Finance</h1>
      <div className={style.details}>
        <div className={style.numbers}>
          <div className={style.left}>
            <p className={style.detail}>Phone</p>
            <p className={style.detail}>Email</p>
            <p className={style.detail}>Address</p>
            <p className={style.detail}>Office Timings</p>
            <p className={style.detail}>Official Website</p>
          </div>
          <div className={style.right}>
            <p className={style.detailRight}>(555) 123-4567 </p>
            <p
              className={style.detailRight}
              style={{ color: "rgba(11, 219, 182, 1)" }}
            >
              info@statefinance.gov{" "}
            </p>
            <p className={style.detailRight}>
              State Department of Finance, 123 Main Street, Capital City, State,
              ZIP
            </p>
            <p className={style.detail}>Monday to Friday (9 am to 5 pm)</p>
            <p
              className={style.detail}
              style={{ color: "rgba(11, 219, 182, 1)" }}
            >
              www.statefinance.gov
            </p>
          </div>
        </div>

        <div className={style.keyPersonnel}>
          <div className={style.topDiv}>
            <h1 className={style.headingPersonnel}>Key Personnel</h1>
            <button className={style.view}>View All</button>
          </div>
          <div className={style.btmDiv}>
            <div className={style.name}>
              <h1 className={style.nameHeading}>Name</h1>
              <p className={style.detailRight}>Cody Fisher</p>
              <p className={style.detailRight}>Jane Cooper</p>
              <p className={style.detailRight}>Wade Warren</p>
              <p className={style.detailRight}>Floyd Miles</p>
              <p className={style.detailRight}>Albert Flores</p>
            </div>

            <div className={style.designation}>
              <h1 className={style.nameHeading}>Designation</h1>
              <p className={style.detailRight}>Finance Minister</p>
              <p className={style.detailRight}>Principal Secretary (Finance)</p>
              <p className={style.detailRight}>Secretary (Budget)</p>
              <p className={style.detailRight}>Secretary (Expenditure)</p>
              <p className={style.detailRight}>
                Director of Treasuries and Accounts
              </p>
            </div>

            <div className={style.email}>
              <h1 className={style.nameHeading}>Email ID</h1>
              <p className={style.detailRight}>tim.jennings@example.com</p>
              <p className={style.detailRight}>alma.lawson@example.com</p>
              <p className={style.detailRight}>felicia.reid@example.com</p>
              <p className={style.detailRight}>deanna.curtis@example.com</p>
              <p className={style.detailRight}>tanya.hill@example.com</p>
            </div>

            <div className={style.officeNumber}>
              <h1 className={style.nameHeading}>Office Number</h1>
              <p className={style.detailRight}>83192199</p>
              <p className={style.detailRight}>40127246</p>
              <p className={style.detailRight}>53727567</p>
              <p className={style.detailRight}>90587089</p>
              <p className={style.detailRight}>53845987</p>
            </div>
          </div>
        </div>

        <div className={style.card}>
          <h1 className={style.cardHeading}>Public Meetings and Hearings</h1>
          <p className={style.cardAbout}>
            Notice: Join us for the upcoming public hearing on the state budget
            on 02/02/2022 at ABC City Hall.
          </p>
          <p className={style.cardAbout}>
            Schedule:{" "}
            <span className={style.cardAboutSpan}>View the schedule</span> of
            public meetings and hearings on our website.
          </p>
        </div>

        <div className={style.card}>
          <h1 className={style.cardHeading}>Public Records and Documents</h1>
          <p className={style.cardAbout}>
            Budget Documents:{" "}
            <span className={style.cardAboutSpan}>
              Access the latest state budget proposal
            </span>{" "}
            and financial reports.
          </p>
          <p className={style.cardAbout}>
            Transparency Portal:{" "}
            <span className={style.cardAboutSpan}>
              Explore our transparency portal{" "}
            </span>
            to review government spending and contracts.
          </p>
        </div>

        <div className={style.card}>
          <h1 className={style.cardHeading}>
            Policy Initiatives and Executive Orders
          </h1>
          <p className={style.cardAbout}>
            Policy Priorities:{" "}
            <span className={style.cardAboutSpan}>
              Learn about our department's current policy
            </span>
            initiatives and legislative priorities.
          </p>
          <p className={style.cardAbout}>
            Executive Orders:{" "}
            <span className={style.cardAboutSpan}>
              View recent executive orders
            </span>{" "}
            issued by the state government related to finance and taxation.
          </p>
        </div>

        <div className={style.card}>
          <h1 className={style.cardHeading}>Citizen Services and Assistance</h1>
          <p className={style.cardAbout}>
            Services:{" "}
            <span className={style.cardAboutSpan}>
              Discover the services and programs
            </span>{" "}
            we offer, including tax assistance and financial aid programs.
          </p>
          <p className={style.cardAbout}>
            Assistance: Contact our citizen services hotline at (080) 987-6543
            for assistance with tax questions or financial matters.
          </p>
        </div>
      </div>
    </div>
  );
}

export default StateDepartmentOfFinance;
