import React from 'react';

const Item = (props) => {

    const {item} = props;
    // id
    // title
    // price
    // description
    // category
    // image
    // rating



  return (
    <div>
        <h2>{item.title}</h2>
    </div>
  )
}

export { Item }