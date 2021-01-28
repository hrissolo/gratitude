//same setup as ReptiRomance ApplicationViews.js

import React from "react";
import { Route } from "react-router-dom"
import { HouseList } from "./components/houses/HouseList";
import { HouseProvider } from "./components/houses/HouseProvider";

//import all of the providers + lists here// 

export const ApplicationViews = props => {
  return (
    <>

      <HouseProvider>
        <Route exact path="/">
          <HouseList/>
        </Route>
      </HouseProvider>

    </>
  )
}