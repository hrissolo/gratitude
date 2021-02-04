import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./App.js";
// import { Login } from "./components/auth/Login";
// import { Register } from "./components/auth/Register";
import { NavBar } from "./components/navbar/NavBar"



export const GratitudeHouses = () => (

   <>
        <NavBar />

            <ApplicationViews />
    </>

);