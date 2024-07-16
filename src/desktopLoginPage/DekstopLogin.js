import React, { useState } from "react";
import style from "./DesktopLogin.module.css";
import { userLogin, checkServer } from "../axios/Axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../commonComponents/Header";
import Footer from "../commonComponents/Footer";
import API_BASE_URL from "../apiConfig";

function DesktopLogin() {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema1 = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required").min(8, "Password Too Short"),
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values, { setSubmitting }) => {
    axios
      .post(`${API_BASE_URL}/users/loginUser`, values)
      .then((response) => {
        const { _id, token, fullName } = response.data;
        const userData = {
          _id,
          token,
          fullName,
          email: values.email,
        };
        localStorage.setItem("user", JSON.stringify(userData));
        navigate("/homepage", { state: { email: values.email } });
      })
      .catch((error) => {
        console.error("There was an error!", error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <>
      <Header dekstopLogin="true" />
      <div
        className={style.outerContainer}
        style={{
          backgroundImage: "url(/images/miss/background.svg)",
          backgroundPosition: "10px -90px",
        }}
      >
        <div className={style.innerDiv}>
          <div className={style.leftDiv}>
            <img
              src="/images/miss/doc.svg"
              alt=""
              className={style.leftDivImage}
            />
          </div>
          <div className={style.rightDiv}>
            <div className={style.rightTop}>
              <h1 className={style.heading}>Login to your Account</h1>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema1}
                // onSubmit={(values) => {
                //   navigate("/homepage");
                //   console.log(values);
                //   checkServer(values);
                //   localStorage.setItem("userDetails", JSON.stringify(values));
                // }}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="relative">
                    <Field
                      type="text"
                      name="email"
                      placeholder="Email Address"
                      className={`${style.inputEmail} outline-none hover:border-appGreen cursor-pointer`}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error absolute text-center w-full text-red-500"
                    />

                    <div
                      className={`${style.inputPassword} flex justify-between outline-none hover:border-appGreen cursor-pointer`}
                    >
                      <Field
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        className="bg-transparent outline-none"
                      />

                      {!showPassword && (
                        <img
                          src="/images/miss/password.svg"
                          alt=""
                          onClick={() => setShowPassword(!showPassword)}
                          className=""
                        />
                      )}
                      {/*
                      {showPassword && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-5 text-gray-500 font-bold hover:ring-2 ring-offset-4 hover:ring-appGreen"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      )}
 */}
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="error absolute text-center w-full text-red-500"
                    />
                    <p
                      className={`${style.para} hover:text-footerColor cursor-pointer`}
                    >
                      Forgot Password?
                    </p>

                    <button
                      type="submit"
                      className={`${style.button}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Logging in..." : "Login"}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>

            <div className={style.rightBtm}>
              <div className={style.segregationDiv}>
                <div className={style.segLeft}></div>
                <p className={style.segPara}>OR</p>
                <div className={style.segRight}></div>
              </div>

              <div className={style.iconDiv}>
                <div className={`${style.icon1}`}>
                  <img
                    src="/images/miss/google.svg"
                    alt=""
                    className={style.iconImg1}
                  />
                </div>

                <div className={`${style.icon2}`}>
                  <img
                    src="/images/miss/fb.svg"
                    alt=""
                    className={style.iconImg2}
                  />
                </div>

                <div className={`${style.icon3}`}>
                  <img
                    src="/images/miss/apple.svg"
                    alt=""
                    className={style.iconImg3}
                  />
                </div>
              </div>
            </div>
            <p className={style.terms}>
              By using Decatlog, you agree to our privacy policy, and our terms
              and conditions
            </p>
          </div>
        </div>
      </div>
      <Footer shadow="true" />
    </>
  );
}

export default DesktopLogin;
