import React from "react";
import "../styles/Contact.css";
import { Prompt } from "react-router-dom";
import axios from "axios";

class Contact extends React.Component {
  state = {
    value: ""
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  handleSubmit = e => {
    const url = process.env.REACT_APP_URL;

    e.preventDefault();
    axios({
      method: "POST",
      url,
      data: {
        message: this.state.value
      }
    }).then(response => {
      if (response.data === "success") {
        alert("Message Sent");
        this.setState({ value: "" });
      } else if (response.data === "fail") {
        alert("Message failed to send.");
      }
    });
  };
  render() {
    return (
      <>
        <h3 className="contact__header">
          Hello, here you can give me your feedback
        </h3>
        <div className="contact">
          <form className="contact__form" onSubmit={this.handleSubmit}>
            <textarea
              className="contact__textarea"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Write your message here, if you expect an answer, please include your email address"
            />
            <button type="submit">Send</button>
          </form>
          <Prompt
            when={this.state.value}
            message="The form is not empty, are you sure you want to quit?"
          />
        </div>
      </>
    );
  }
}

export default Contact;
