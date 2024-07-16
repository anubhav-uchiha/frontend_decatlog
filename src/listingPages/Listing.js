import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../commonComponents/Header";
import Footer from "../commonComponents/Footer";
import style from "./Listing.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Listing() {
  const navigate = useNavigate();
  const [selectedProfession, setSelectedProfession] = useState(null);

  const initialValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    phoneNumber: Yup.string()
      .required("Required")
      .min(8, "Phone Number Too Short"),
  });

  const handleProfessionClick = (profession) => {
    setSelectedProfession(profession);
  };

  return (
    <>
      <Header professionalListing="true" signup="true" />

      <div className={style.midSectionOuter}>
        <div className={style.midSection}>
          <div className={style.imageDiv}>
            <img
              src="/images/listingProfessional/listingProfessional.png"
              alt=""
              className={style.listingProfessional}
            />
          </div>
          <div className={style.detailContainer}>
            <div className={style.detialsHeading}>
              <h1 className={style.heading}>
                List yourself as a{" "}
                <span className={style.headingSpan}>Professional</span>
              </h1>
              <p className={style.headingPara}>
                Join our community of professionals and reach more clients. Fill
                out the form below to get started.
              </p>
            </div>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                navigate("/enter-otp");
              }}
            >
              <Form>
                <div className={`${style.signupInputDiv} relative`}>
                  <Field
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    className={`${style.inputNameSignup} outline-none hover:border-appGreen cursor-pointer`}
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="error absolute top-[47px] text-center w-full text-red-500"
                  />

                  <Field
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    className={`${style.inputEmailSignup} outline-none hover:border-appGreen cursor-pointer`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error absolute top-[122px] text-center w-full text-red-500"
                  />

                  <Field
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className={`${style.inputPhoneNumberSignup} outline-none hover:border-appGreen cursor-pointer`}
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="error absolute top-[200px] text-center  w-full text-red-500"
                  />

                  <div className={style.professionContainer}>
                    <div className={style.professionContainerRow}>
                      <div
                        className={`${style.profession} ${
                          selectedProfession === "doctor"
                            ? style.professionClicked
                            : ""
                        }`}
                        onClick={() => handleProfessionClick("doctor")}
                      >
                        <img
                          src={
                            selectedProfession === "doctor"
                              ? "/images/listingProfessional/doctorClicked.svg"
                              : "/images/listingProfessional/doctor.svg"
                          }
                          alt=""
                          className={style.image}
                        />
                        <p className={style.title}>Doctor</p>
                      </div>

                      <div
                        className={`${style.profession} ${
                          selectedProfession === "engineer"
                            ? style.professionClicked
                            : ""
                        }`}
                        onClick={() => handleProfessionClick("engineer")}
                      >
                        <img
                          src={
                            selectedProfession === "engineer"
                              ? "/images/listingProfessional/engineerClicked.svg"
                              : "/images/listingProfessional/engineer.svg"
                          }
                          alt=""
                          className={style.image}
                        />
                        <p className={style.title}>Engineer</p>
                      </div>

                      <div
                        className={`${style.profession} ${
                          selectedProfession === "advocate"
                            ? style.professionClicked
                            : ""
                        }`}
                        onClick={() => handleProfessionClick("advocate")}
                      >
                        <img
                          src={
                            selectedProfession === "advocate"
                              ? "/images/listingProfessional/advocateClicked.svg"
                              : "/images/listingProfessional/advocate.svg"
                          }
                          alt=""
                          className={style.image}
                        />
                        <p className={style.title}>Advocate</p>
                      </div>
                    </div>

                    <div className={style.professionContainerRow}>
                      <div
                        className={`${style.profession} ${
                          selectedProfession === "teacher"
                            ? style.professionClicked
                            : ""
                        }`}
                        onClick={() => handleProfessionClick("teacher")}
                      >
                        <img
                          src={
                            selectedProfession === "teacher"
                              ? "/images/listingProfessional/teacherClicked.svg"
                              : "/images/listingProfessional/teacher.svg"
                          }
                          alt=""
                          className={style.image}
                        />
                        <p className={style.title}>Teacher</p>
                      </div>

                      <div
                        className={`${style.profession} ${
                          selectedProfession === "labour"
                            ? style.professionClicked
                            : ""
                        }`}
                        onClick={() => handleProfessionClick("labour")}
                      >
                        <img
                          src={
                            selectedProfession === "labour"
                              ? "/images/listingProfessional/labourClicked.svg"
                              : "/images/listingProfessional/labour.svg"
                          }
                          alt=""
                          className={style.image}
                        />
                        <p className={style.title}>Labour</p>
                      </div>

                      <div
                        className={`${style.profession} ${
                          selectedProfession === "ca"
                            ? style.professionClicked
                            : ""
                        }`}
                        onClick={() => handleProfessionClick("ca")}
                      >
                        <img
                          src={
                            selectedProfession === "ca"
                              ? "/images/listingProfessional/caClicked.svg"
                              : "/images/listingProfessional/ca.svg"
                          }
                          alt=""
                          className={style.image}
                        />
                        <p className={style.title}>Chartered Accountant</p>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`${style.buttonSignup} ${
                      !selectedProfession ? style.buttonDisabled : ""
                    }`}
                    disabled={!selectedProfession}
                  >
                    Get Started
                  </button>
                </div>
              </Form>
            </Formik>
            <p className={style.bottomPara}>
              By using Decatlog, you agree to our{" "}
              <span className={style.spanPrivacy}>privacy policy</span>, and our
              <span className={style.spanPrivacy}> terms and conditions</span>
            </p>
          </div>
        </div>
      </div>
      <Footer shadow="true" />
    </>
  );
}

export default Listing;
