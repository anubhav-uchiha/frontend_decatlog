import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./Appointment.module.css";

const Appointment = () => {
  const initialValues = {
    name: "",
    phone: "",
    city: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    phone: Yup.string().required(" Required"),
    city: Yup.string().required("Required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log("Form data", values);
    setSubmitting(false);
  };

  return (
    <div className={style.appointmentOuter}>
      <h1 className={style.heading}>
        Book Appointment for Dental Consultation
      </h1>
      <p className={style.para}>Get Callback from best Dentists</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={style.formDiv}>
              <div className="relative">
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                  className={style.inputField}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={style.error}
                />
              </div>
              <div className="relative">
                <Field
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className={style.inputField}
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className={style.error}
                />
              </div>
              <div className={style.cityDiv}>
                <Field
                  type="text"
                  name="city"
                  placeholder="City"
                  className={style.inputField2}
                />
                <ErrorMessage
                  name="city"
                  component="div"
                  className={style.error2}
                />
                <img
                  src="/images/doctor/cityArrow.svg"
                  alt=""
                  className={style.cityIcon}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={style.submitButton}
              >
                Book Free Appointment
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Appointment;
