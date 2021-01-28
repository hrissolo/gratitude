import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { HouseContext } from "./HouseProvider"


export const HouseCard = ( {houses} ) => {


    return (


    <section className="gratitudeHouses" id={`${houses.id}`}>

        
        <h3 className="houses_Card">
        { houses.name } </h3>
        
        <div className="houses_info">is this working</div>
        
        
    </section>
    )
}