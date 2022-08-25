import React from 'react';
import {Header} from "../Header";
import {Footer} from "../Footer";
import styles from "./MainOverlay.module.css";
import {MainRoutes} from "../../Routing/MainRoutes";

const MainOverLay = () => {

    return (
        <div className={styles.mainOverlay}>
            <header>
                <Header/>
            </header>

            <main>
                <MainRoutes/>
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export {MainOverLay}