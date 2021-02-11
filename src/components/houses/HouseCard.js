import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { HouseContext } from "./HouseProvider"
import { Item } from 'semantic-ui-react'
import "./House.css"

export const HouseCard = ( {house} ) => {

const availBeds = 
    `${house.occupiedBeds} / ${house.totalBeds} Beds Full`

     

    
    return (

        <Item>
            <Link to={`/houses/${house.id}`}>
                <img size='tiny' src={house.photo}/>
                    <Item.Content verticalAlign='middle'>
                        <h3 className="houses_Card">{ house.name } </h3> 
                        {availBeds} <br/>
                        {house.gender} Property
                    </Item.Content>
            </Link>
        </Item>    
    )
}
