import React, { Component } from "react";

import axios from "axios";

import "./Input.css";

class AddInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      detail: ""
    };
  }

  onAddNewItemHandler() {
    axios
      .post("http://localhost:3004/list", {
        name: this.state.name,
        purchased: false,
        id: Date.now(),
        detail: this.state.detail
      })
      .then(() => {
        window.location.reload();
      });
  }

  onChangeNameHandler(event) {
    this.setState({
      name: event.target.value
    });
  }

  onChangeDetailHandler(event) {
    this.setState({
      detail: event.target.value
    });
  }

  render() {
    return (
      <div className="inputBox">
        <span>Item Title</span>

        <input
          type="text"
          value={this.state.name}
          onChange={this.onChangeNameHandler.bind(this)}
          placeholder="item title"
          className="text-input"
        />

        <span>Item detail</span>
        <input
          type="text"
          value={this.state.detail}
          onChange={this.onChangeDetailHandler.bind(this)}
          placeholder="Detail"
          className="text-input"
        />

        <br />

        <button onClick={this.onAddNewItemHandler.bind(this)} className="form-button">Add!</button>

        {this.props.children}
      </div>
    );
  }
}

export default AddInput;