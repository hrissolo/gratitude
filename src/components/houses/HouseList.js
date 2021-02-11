import React, { useContext, useEffect } from "react"
import { HouseContext} from "./HouseProvider"
import { HouseCard } from "./HouseCard"
import {useHistory} from "react-router-dom"
import { Item } from 'semantic-ui-react'
import "./House.css"

export const HouseList = () => {
    const { houses, getHouses } = useContext(HouseContext)
    const history = useHistory()
    
	//useEffect - reach out to the world for something
    useEffect(() => {
		getHouses()
		
    }, [])

    return (
      
    <>
    <div className="houseListcontainer">
      <h1 className="houseTitle">The Gratitude Houses</h1>
          
        <Item.Group divided>
            {
                houses.map(houses => {
                return <HouseCard key={houses.id} house={houses} />
                })
            }
        </Item.Group>
    </div>  
    </>
  )
}