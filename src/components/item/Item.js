import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Item.module.css";

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
        <Link className={styles.divLink} to={`${item.id}`}>
            <div className={styles.mainDiv}>
                {item.title}
            </div>
        </Link>
    )
}

export {Item}