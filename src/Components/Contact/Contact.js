import React from "react";
import "./styles.scss";

function Contact({ ref }) {
  const handleClick = (event) => {
    event.preventDefault();
  };
  return (
    <div id="contact" ref={ref} className="contact">
      <h1>CONNECT WITH ME</h1>
      <div className="contact__content">
        <h3>LET'S TALK</h3>
        <div className="contact__content__form">
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
              <input
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
          <button className="button" onClick={(event) => handleClick(event)}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
