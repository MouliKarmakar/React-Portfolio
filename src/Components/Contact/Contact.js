import React, { useState } from "react";
import "./styles.scss";
import { Modal } from "antd";
// import SnackbarContent from "@mui/material/SnackbarContent";

function Contact({ ref }) {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "cf1b2f7e-5849-4057-82dd-422975f84cff");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  return (
    <div id="contact" ref={ref} className="contact">
      <h1>CONNECT WITH ME</h1>
      <div className="contact__content">
        <h3>LET'S TALK</h3>
        <form className="contact__content__form" onSubmit={onSubmit}>
          <div className="contact__content__form__control">
            <div>
              <input required type="text" className="inputName" name="name" />
              <label htmlFor="name" className="nameLabel">
                Name
              </label>
            </div>
            <div>
              <input
                required
                type="email"
                className="inputEmail"
                name="email"
              />
              <label htmlFor="email" className="emailLabel">
                Email
              </label>
            </div>
            <div>
              <textarea
                required
                type="text"
                className="inputDescription"
                name="description"
              />
              <label htmlFor="description" className="descriptionLabel">
                Description
              </label>
            </div>
          </div>
          <button className="button">Submit</button>
        </form>
      </div>
      <div className="contact__social">
        <section>
          <img
            src="https://pbs.twimg.com/profile_images/1539035017346617344/QZ-SKLML_400x400.jpg"
            alt="what's-app"
          />
          <span>
            You can also find me on: <strong>7596-9766-14</strong>
          </span>
        </section>
        <section>
          <img
            src="https://www.shutterstock.com/image-vector/google-gmail-vector-icon-logo-260nw-2322729115.jpg"
            alt="Email"
          />
          <span>
            Else, Email me on: <strong>moulikarmakar7596@gmail.com</strong>
          </span>
        </section>
      </div>
    </div>
  );
}

export default Contact;
