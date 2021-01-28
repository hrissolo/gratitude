import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ResidentContext } from "./ResidentProvider"


export const ResidentCard = ( {residents} ) => {


    return (


    <section className="residentCards" id={`${residents.id}`}>

        
        <h3 className="residents_card">
        { residents.firstName } </h3>
        
        <div className="residents_detail">click</div>
        
        
    </section>
    )
}