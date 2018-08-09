import React, { Component } from "react";

import axios from "axios";

import "./Input.css";

class EditInput extends Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      name: "",
      detail: ""
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
      console.log('update?')
    return nextProps !== this.state.name;
  }

  componentWillMount() {
    this.setState({
      name: this.props.itemName,
      detail: this.props.itemDetail
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      name: this.props.itemName,
      detail: this.props.itemDetail
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

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state.name);

    axios
      .patch(`http://localhost:3004/list/${this.props.itemId}`, {
        name: this.state.name,
        detail: this.state.detail
      })
      .then(() => {
        window.location.reload();
      });
  }

  render() {
    return (
      <div className="inputBox">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <span>Item title to edit</span>
          <input
            type="text"
            value={this.state.name}
            placeholder="Title"
            onChange={this.onChangeNameHandler.bind(this)}
            className="text-input"
          />

          <span>Item detail to edit</span>
          <input
            type="text"
            value={this.state.detail}
            placeholder="Detail"
            onChange={this.onChangeDetailHandler.bind(this)}
            className="text-input"
          />

          <br />

          <input
            type="submit"
            value="Submit Changes!"
            className="form-button"
          />

          {this.props.children}
        </form>
      </div>
    );
  }
}

export default EditInput;
