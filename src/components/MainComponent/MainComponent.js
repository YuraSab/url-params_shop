import React from 'react';
import {Outlet} from "react-router-dom";

const MainComponent = () => {
 
  return (
    <div>
        <Outlet></Outlet>
    </div>
  )
}

export { MainComponent }