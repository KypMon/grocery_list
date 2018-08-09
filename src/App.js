import React, { Component } from "react";
import "./App.css";

import Layout from "./hoc/Layout";

import GroceryList from "./container/Grocerylist";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <GroceryList />
        </Layout>
      </div>
    );
  }
}

export default App;
