import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { HouseContext } from "./HouseProvider"
import { Item } from 'semantic-ui-react'
import "./House.css"

export const HouseCard = ( {house} ) => {

    return (

        <Item>
            <Link to={`/houses/${house.id}`}>
                <Item.Image size='tiny' src={house.photo}/>
                    <Item.Content verticalAlign='middle'><h3 className="houses_Card">
                        { house.name } </h3> Available Beds: ___ / {house.totalBeds}
                    </Item.Content>
            </Link>
        </Item>    
    )
}



  