import React, { useState } from "react";

import "./App.css";

import map from './map.png';

function App() {

  const [formEmail, setFormEmail] = useState("");
  const [message, setMessage] = useState("Join the waitlist!")

  const onEmailChange = (event) => {
    setFormEmail(event.target.value)
  }

  const isValidEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email)
  }

  const sendSignupRequest = () => {

    console.log("Sending Form:", formEmail)

    fetch(`https://hooks.zapier.com/hooks/catch/17933864/3lncvgs/?email=${formEmail}`, {
      method: 'POST',
    })

  }

  const onSubmitEmail = () => {

    if (isValidEmail(formEmail)) {
      sendSignupRequest()
      setMessage("You'll be the first to know when we launch!")
    } else {
      setMessage("Please enter a valid email :)")
    }
    setFormEmail("")

  }

  return (
    <div className="landing-page">
      <div className="content-area">
        <div className="left-area">
          <header className="header">
            <h1 className="header-title">Tether</h1>
            <p className="header-subtitle">Let the distance bring you closer.</p>
            <p className="launch-message">
              {message}
            </p>
            <div className="custom-search">
              <input
                type="text"
                className="custom-search-input"
                placeholder="Enter your email"
                onChange={onEmailChange}
                value={formEmail}
              />
              <button className="custom-search-button" onClick={onSubmitEmail}>
                Join
              </button>
            </div>
          </header>
        </div>
        <div className="right-area">
          <img className="mockup" src={map} alt="app mockup"/>
        </div>
      </div>
    </div>
  );
}

export default App;