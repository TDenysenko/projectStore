import React, { useState } from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

import "./Form.scss";

const Schema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  phoneNumber: Yup.number().positive().integer().required(),
  adress: Yup.string().required(),
  email: Yup.string().email("Invalid email address").required(),
});

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name} className="labels">
        {label}
      </label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const initalFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  address: "",
};

function FormOrder({ onAddToCart, products }) {
  const [formData, setFormData] = useState(initalFormValues);
  const [isError, setIsError] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (formData.firstName === "") {
      return setIsError(true);
    }

    setFormData(initalFormValues);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  console.log(formData);
  return (
    /* <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "+380",
        adress: "",
      }}
      validationSchema={Schema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <div>
          <Input label="First Name" name="firstName" type="text" />
        </div>
        <div>
          <Input label="Last Name" name="lastName" type="text" />
        </div>
        <div>
          <Input label="Email Address" name="email" type="email" />
        </div>
        <div>
          <Input label="Phone Number" name="phoneNumber" type="tel" />
        </div>
        <div>
          <Input label="Adress" name="adress" type="text" />
        </div>

        <button type="submit" className="form__button">
          Checkout
        </button>
      </Form>
    </Formik>
 */
    <form onSubmit={handleFormSubmit}>
      <label>
        First Name
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={(event) => {
            setIsError(false);
            setFormData((prev) => {
              return { ...prev, firstName: event.target.value };
            });
          }}
        />
        {isError && <p className="error">Your name is required!</p>}
      </label>
      <label>
        Last Name
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={(event) =>
            setFormData((prev) => {
              return { ...prev, lastName: event.target.value };
            })
          }
        />
      </label>
      <label>
        Email
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={(event) =>
            setFormData((prev) => {
              return { ...prev, email: event.target.value };
            })
          }
        />
      </label>
      <button type="submit">Order</button>
    </form>
  );
}

export default FormOrder;
