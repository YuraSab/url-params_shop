import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MainComponent} from "../../components/MainComponent";
import {MainPage} from "../../pages/MainPage";
import {ChosenItem} from "../../components/ChosenItem";
import {About} from "../../pages/About";

const MainRoutes = () => {

  return (
    <div style={{paddingLeft: 75, paddingRight: 75, paddingTop: 50, paddingBottom: 50}}>
        <Routes>
            <Route path={'/'} element={<MainComponent/>} >
                <Route index element={<MainPage/>} />
                <Route path={':id'} element={<ChosenItem/>} />
                <Route path={'about'} element={<About/>} />
                <Route path={'*'} element={<MainPage/>}/>
            </Route>
        </Routes>
    </div>
  )
}

export { MainRoutes }