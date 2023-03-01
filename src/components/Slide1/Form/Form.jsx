import React from "react";

import { Formik } from "formik";
import { validationSchema } from "./validation";
import Input from "./Input";
import Button from "../../Button"

import "./Form.scss";

const Form = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        postcode: ""
      }}
      validationSchema={validationSchema}
      onSubmit={(values, {resetForm}) => {console.log(values); resetForm()}}
    >
      {({ errors,touched, handleSubmit }) => (
        <form className="contact-form" onSubmit={handleSubmit}>
          <Input
            name="firstName"
            placeholder="Voornaam"
            className="contact-form__naam"
            label="Naam"
            error={touched.firstName && errors.firstName}
          />
          <Input
            name="lastName"
            placeholder="Achternaam"
            className="contact-form__field"
            error={touched.lastName && errors.lastName}
          />
          <Input
            name="phone"
            type="number"
            placeholder="Telefoonnummer"
            className="contact-form__contact"
            label="Contact"
            error={touched.phone && errors.phone}
          />
          <Input
            name="email"
            type="email"
            placeholder="E-mail"
            className="contact-form__field"
            error={touched.email && errors.email}
          />
          <Input
            name="address"
            placeholder="Straatnaam + huisnr."
            label="Adres"
            className="contact-form__adres"
            error={touched.address && errors.address}
          />
          <div className="contact-form__row">
            <Input
              name="postcode"
              placeholder="Postcode"
              className="contact-form__row-short"
              error={touched.postcode && errors.postcode}
            />
            <Input
              name="city"
              placeholder="Plaats"
              className="contact-form__row-long"
              error={touched.city && errors.city}
            />
          </div>
          <div className="contact-form__links">
            <Button className="contact-form__links-checkout" text="Direct betalen" type={"submit"}/>
            <p>
                <a
                href="https://www.bluecurrent.nl"
                target="_blank"
                rel="noreferrer"
                className="contact-form__links-link"
                >
                Stuur een offerte
                </a>
            </p>
            
          </div>
          <p className="contact-form__footer">
            Betalen via iDEAL, Creditcard… etc.
          </p>
        </form>
      )}
    </Formik>
  );
};

export default Form;
