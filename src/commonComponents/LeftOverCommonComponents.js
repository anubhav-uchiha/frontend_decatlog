import React from "react";
import style from "./LeftOverCommonComponents.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export function Query({ forWhom }) {
  const initialValues = {
    question: "",
  };

  const validationSchema = Yup.object({
    question: Yup.string()
      .required("Required")
      .min(10, "Question must be at least 10 characters"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className={style.queryOuter}>
      <div className={style.topDiv}>
        <img src="/images/doctor/chat.svg" alt="" />
        <div className={style.topRight}>
          <h1 className={style.heading}>Ask a free question</h1>
          <p className={style.subHeading}>
            Get <span className={style.subHeadingSpan}>FREE</span> multiple
            opinions from {forWhom}
          </p>
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={style.fieldContainer}>
              <Field
                type="text"
                name="question"
                placeholder="Enter question for you or someone else."
                className={style.inputField}
              />
              <ErrorMessage
                name="question"
                component="div"
                className={style.errorMessage}
              />
            </div>

            <div className={style.btmDiv}>
              <p className={style.paraBtm}>posted anonymously</p>
              <button
                type="submit"
                className={style.query}
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export function AppointCard({
  rightImg,
  teethImage,
  heading1a,
  heading2a,
  heading3a,
  service1,
  service2,
  service3,
  service4,
  background,
  margin,
}) {
  return (
    <div
      className={style.appointOuter}
      style={{
        background: background,
      }}
    >
      <div
        className={style.appointLeft}
        style={{ background: "url(/images/doctor/starBcg.svg)" }}
      >
        <div className={style.topLeft}>
          {teethImage && (
            <img src={teethImage} alt="" className={style.teethImageS} />
          )}
          <h1
            className={style.heading1}
            style={teethImage ? {} : { marginTop: "18px" }}
          >
            {heading1a}
          </h1>
          <p className={style.heading2}>{heading2a}</p>
          {heading3a && <p className={style.about}>{heading3a}</p>}
        </div>

        <div className={style.services}>
          <h1 className={style.servicesHeading}>Our Services:</h1>
          <ul className={style.listContainer}>
            <li className={style.service}>{service1}</li>
            <li className={style.service}>{service2}</li>
            <li className={style.service}>{service3}</li>
            {service4 && <li className={style.service}>{service4}</li>}
          </ul>
        </div>

        <div
          className={style.btmDivAppoint}
          style={margin ? { marginTop: "10.79px" } : {}}
        >
          <p className={style.detail}>Contact Us:</p>
          <p className={style.detail}>+91-9876543213</p>
          <p className={style.detail}>
            125, Somewhere in the city Lakeview, 123456
          </p>
        </div>
      </div>
      <div className={style.appointRight}>
        <img src={rightImg} alt="" className={style.rightImage} />
      </div>
    </div>
  );
}

export function AdvertisementCard({ img }) {
  return (
    <div className={style.appointLabOuter}>
      <img src={img} alt="" />
      {/*
      <div className={style.appointLabLeft}>
        <div className={style.needRoofing}>
          <p className={style.company}>Salford Company</p>
          <p className={style.service}>
            Need <span className={style.serviceSpan}>Roofing?</span>
          </p>
        </div>

        <p className={style.labNeed}>
          Enhancing Your Home’s Protection & Aesthetics
        </p>

        <div className={style.appointLabContact}>
          <div className={style.contactDiv}>
            <div className={style.iconDiv}>
              <img
                src="/images/ca/call.svg"
                alt=""
                className={style.callIcon}
              />
            </div>
            <p className={style.contactNo}>+91 9876543211</p>
          </div>
          <div className={style.contactDiv}>
            <div className={style.iconDiv}>
              <img src="/images/ca/web.svg" alt="" className={style.webIcon} />
            </div>
              <p className={style.webAddress}>www.englishclass.com</p>
          </div>
        </div>
      </div>

      <div className={style.appointLabRight}>
        <img src="/images/ca/labImage.svg" alt="" />
      </div>
      */}
    </div>
  );
}
