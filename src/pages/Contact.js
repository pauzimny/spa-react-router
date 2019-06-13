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
    const host = process.env.REACT_APP_URL || 3004;

    e.preventDefault();
    axios({
      method: "POST",
      url: host,
      data: {
        message: this.state.value
      }
    }).then(response => {
      console.log(response);
      if (response.data === "success") {
        alert("Message Sent.");
        this.setState({ value: "" });
      } else if (response.data === "fail") {
        alert("Message failed to send.");
      }
    });
  };
  render() {
    return (
      <div className="contact">
        <form className="contact__form" onSubmit={this.handleSubmit}>
          <h3 className="contact__header">Give me a message!</h3>
          <textarea
            className="contact__textarea"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Please write your message here..."
          />
          <button>Send</button>
        </form>
        <Prompt
          when={this.state.value}
          message="The form is empty, are you sure you want to quit?"
        />
      </div>
    );
  }
}

export default Contact;
