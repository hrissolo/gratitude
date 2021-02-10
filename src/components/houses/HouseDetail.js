import React, { useContext, useEffect, useState } from "react"
import { HouseContext } from "./HouseProvider"
import { useParams, useHistory, Link } from "react-router-dom"
import {Button} from "semantic-ui-react"
import "./House.css"

export const HouseDetail = () => {
    const { getHouseById } = useContext(HouseContext)
    
	
	const [house, setHouses] = useState({})
	
	const {houseId} = useParams();
	const history = useHistory();

    useEffect(() => {
        getHouseById(houseId)
        .then((response) => {
			setHouses(response)
		})
			}, [houseId])


    return (
        <section className="house_detail">
            
            <h3 className="house__name">{house.name} </h3>
            <div className="house__bday"><br/>Total Beds: {house.totalBeds}</div>
            <div className="house__tenants">

            </div>
        
        </section>
    )
}
