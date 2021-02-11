import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { HouseContext } from "./HouseProvider"
import { Item } from 'semantic-ui-react'
import "./House.css"

export const HouseCard = ( {house} ) => {

const availBeds = 
    `${house.occupiedBeds} / ${house.totalBeds} Beds Full`

     

    
    return (

        <Item className="flexonthehouses">
            <Link to={`/houses/${house.id}`}>
                <img className="houseIcon" size='tiny' src={house.photo} />
                    <Item.Content className="houseTxt" verticalAlign='middle'>
                        <h3 className="houses_Card">{ house.name } </h3> 
                        {availBeds} <br/>
                        {house.gender} Property
                    </Item.Content>
            </Link>
        </Item>    
    )
}
