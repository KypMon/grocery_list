import React, { Component } from 'react';

import './Item.css';

class Item extends Component {
    constructor(props) {
        super(props);


        this.state = {
            showDetail: false
        }

    }

    render() {

        return (
            <div className='item'>
                {this.props.completed ? <span><s>{this.props.name}</s></span> : <span>{this.props.name}</span>}
            </div>
        )

    }
}

export default Item;