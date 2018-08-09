import React, { Component } from "react";
import Axios from "axios";

import Auxiliary from "../hoc/Auxiliary";

import List from "../component/List";

import './GroceryList.css';

class GroceryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
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

        <List items={this.state.items} />
      </Auxiliary>
    );
  }
}

export default GroceryList;
