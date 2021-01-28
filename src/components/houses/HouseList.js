import React, { useContext, useEffect } from "react"
import { HouseContext} from "./HouseProvider"
import { HouseCard } from "./HouseCard"
import {useHistory} from "react-router-dom"


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
      <h1 className="houseTitle">G Houses</h1>
          
      <div className="container">
      
        {
        houses.map(houses => {
          return <HouseCard key={houses.id} houses={houses} />
          })
        }
      </div>
      </div>
    </>
  )
}