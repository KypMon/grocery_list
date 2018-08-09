import React, { Component } from "react";

import "./Item.css";

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetail: false
    };
  }

  switchDetail() {
      
    this.setState(prevState => {

        console.log(prevState)
      return { showDetail: !prevState.showDetail };
    });
  }

  render() {
    return (
      <div className="item">
        {this.props.completed ? (
          <span>
            <s>{this.props.name}</s>
          </span>
        ) : (
          <span>{this.props.name}</span>
        )}

        <span>
          <button
            className="button button-complete"
            onClick={this.props.toComplete.bind(
              this,
              this.props.index,
              this.props.completed
            )}
          >
            Complete
          </button>
        </span>

        <span>
          <button
            className="button button-detail"
            onClick={this.switchDetail.bind(this)}
          >
            View Detail
          </button>
        </span>

        {this.state.showDetail ? (
          <p>
            {this.props.detail}
            <span>
              <button
                className="button button-edit"
                onClick={this.props.toEdit.bind(
                  this,
                  this.props.index,
                  this.props.name,
                  this.props.detail
                )}
              >
                Edit
              </button>
            </span>

            <span>
              <button
                className="button button-delete"
                onClick={this.props.toDelete.bind(
                  this,
                  this.props.name,
                  this.props.index
                )}
              >
                Delete
              </button>
            </span>
          </p>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Item;
