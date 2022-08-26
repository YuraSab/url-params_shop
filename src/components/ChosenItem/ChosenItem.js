import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import styles from "./ChosenItem.module.css";

const ChosenItem = () => {

    const params = useParams();
    const {id} = params;

    const [item, setItem] = useState('');


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(value => value.json())
            .then(value => setItem(value))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div>
            <div className={styles.mainDiv}>
                <h1>
                    {item.title}
                </h1>
            </div>
            <div className={styles.bodyDiv}>
                <h3>
                    {item.body}
                </h3>
            </div>


        </div>
    )
}

export {ChosenItem}