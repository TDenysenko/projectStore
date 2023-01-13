import React from "react";
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

function FormOrder({ onAddToCart, products }) {
  return (
    <Formik
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
      <Form className="form">
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

        {/* onClick={() => onAddToCart(product.id, "delete")} */}

        <button type="submit">Checkout</button>
      </Form>
    </Formik>
  );
}

export default FormOrder;
