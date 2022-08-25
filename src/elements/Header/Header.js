import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {

  return (
    <div className={styles.rowDivka}>
        <Link
            to={'/'}
            className={styles.lina}
        >
            <div className={styles.divka}>Posts</div>
        </Link>
        <Link
            to={'/about'}
            className={styles.lina}
        >
            <div className={styles.divka}>About</div>
        </Link>

    </div>
  )
}

export { Header }