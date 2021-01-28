import React from "react";
import { Route } from "react-router-dom"
import { HouseList } from "./components/houses/HouseList";
import { HouseProvider } from "./components/houses/HouseProvider";
import { ResidentProvider } from "./components/residents/ResidentProvider"
import { ResidentList } from "./components/residents/ResidentList"

//import all of the providers + lists here// 

export const ApplicationViews = props => {
  return (
    <>

      <HouseProvider>
        <Route exact path="/">
          <HouseList/>
        </Route>
      </HouseProvider>

      <ResidentProvider>
        <Route exact path="/residents">
          <ResidentList/>
        </Route>
      </ResidentProvider>

    </>
  )
}