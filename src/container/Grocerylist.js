import React, { Component } from "react";
import Axios from "axios";

import Auxiliary from "../hoc/Auxiliary";

import List from "../component/List";
import AddInput from "../component/AddInput";

import "./GroceryList.css";

class GroceryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isAdd: false,
      isEdit: false,
      itemName: "",
      itemKey: "",
      itemDetail: ""
    };
  }

  switchToAdd() {
    this.setState({
      isAdd: true,
      isEdit: false
    });
  }

  cancelEdit() {
    this.setState({
      isAdd: false,
      isEdit: false
    });

    this.setState({
      itemName: "",
      itemKey: "",
      itemDetail: ""
    });
  }

  componentDidMount() {
    Axios.get("http://localhost:3004/list").then(res => {
      this.setState({
        items: res.data
      });
    });
  }

  render() {
    return (
      <Auxiliary>
        <header className="App-header">
          <h1 className="App-title">Grocery List</h1>
        </header>

        <button className="add-button" onClick={this.switchToAdd.bind(this)}>
          Add new item
        </button>

        {this.state.isAdd ? (
          <div>
            <AddInput />
            <button onClick={this.cancelEdit.bind(this)} className="cancel-button" >Cancel Add</button>
          </div>
        ) : (
          ""
        )}

        <List items={this.state.items} />
      </Auxiliary>
    );
  }
}

export default GroceryList;
