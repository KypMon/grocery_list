import React from 'react'

import Item from './Item';

import './List.css';

export const List = (props) => {

    const items = props.items.map((item, index) => {
        return <Item name={item.name} key={item.id} index={item.id} completed={item.purchased} detail={item.detail}/>
    })


    return(
        <div className="App-intro">
            {items}
        </div>
    )
}

export default List