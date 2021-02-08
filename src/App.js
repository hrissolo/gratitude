import React from "react";
import { Route } from "react-router-dom"
import { HouseList } from "./components/houses/HouseList";
import { HouseProvider } from "./components/houses/HouseProvider";
import { HouseDetail } from "./components/houses/HouseDetail"
import { ResidentProvider } from "./components/residents/ResidentProvider"
import { ResidentList } from "./components/residents/ResidentList"
import { AlumniList } from "./components/alumni/AlumniList"
import { ResidentDetail } from "./components/residents/ResidentDetail"
import { ResidentForm } from "./components/residents/ResidentForm"
import { ApplicantTabs } from "./components/application/ApplicantTabs"
import { ApplicantForm } from "./components/application/ApplicantForm";


//import all of the providers + lists here// 

export const ApplicationViews = props => {
  return (
    <>

      <HouseProvider>
        <Route exact path="/">
          <HouseList/>
        </Route>
      </HouseProvider>

      <HouseProvider>
        <ResidentProvider>
          <Route exact path="/houses/:houseId(\d+)">
            <HouseDetail/>
          </Route>
        </ResidentProvider>
      </HouseProvider>

      <ResidentProvider>
        <Route exact path="/residents">
          <ResidentList/>
        </Route>
      </ResidentProvider>

      <ResidentProvider>
        <Route exact path="/alumni">
          <AlumniList/>
        </Route>
      </ResidentProvider>

      <ResidentProvider>
        <Route exact path="/residents/:residentId(\d+)">
          <ResidentDetail />
        </Route>
      </ResidentProvider>

      <ResidentProvider>
        <Route exact path="/residents/edit/:residentId(\d+)">
          <ResidentForm />
        </Route>
      </ResidentProvider>

      <ResidentProvider>
        <Route exact path="/application">
          <ApplicantForm/>
        </Route>
      </ResidentProvider>

      <ResidentProvider>
        <Route exact path="/applicants">
          <ApplicantTabs/>
        </Route>
      </ResidentProvider>
    </>
  )
}