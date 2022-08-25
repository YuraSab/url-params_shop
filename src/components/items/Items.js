import React from 'react';
import {Item} from "../item";

const Items = (props) => {

    const {items} = props;

  return (
    <div>
        {
            items.map(value => {
                return(
                    <Item
                        key = {value.id}
                        item = {value}
                    />
                )
            })
        }
    </div>
  )
}

export { Items }