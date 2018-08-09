import React, { Component } from "react";

import Auxiliary from "./Auxiliary";

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Auxiliary>
        <main>   
        {this.props.children} 
         </main>
      </Auxiliary>
    );
  }
}

export default Layout;