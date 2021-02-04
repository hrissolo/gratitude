import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { HouseContext } from "./HouseProvider"
import { Item } from 'semantic-ui-react'

export const HouseCard = ( {houses} ) => {

    return (

        <Item>
            <Link to="/">
                <Item.Image size='tiny' src={houses.photo}/>
                    <Item.Content verticalAlign='middle'><h3 className="houses_Card">
                        { houses.name } </h3> 3/3 rooms filled 
                    </Item.Content>
            </Link>
        </Item>    
    )
}



  