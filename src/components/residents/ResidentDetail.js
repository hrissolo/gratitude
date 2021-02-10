import React, { useContext, useEffect, useState } from "react"
import { ResidentContext } from "./ResidentProvider"
import { useParams, useHistory, Link } from "react-router-dom"
import {Button} from "semantic-ui-react"
import "./Resident.css"

export const ResidentDetail = () => {
    const { getResidentById } = useContext(ResidentContext)
	
	const [resident, setResidents] = useState({})
	
	const {residentId} = useParams();
	const history = useHistory();

    useEffect(() => {
        getResidentById(residentId)
        .then((response) => {
			setResidents(response)
		})
			}, [residentId])
            

    const editButton = (() => {
        return (
            <>
                <Button color="olive" onClick={() => {
                    history.push(`/residents/edit/${resident.id}`)
                }}>Edit Resident
                </Button>
            </>
        )
    })

    const housePlacementButton = (() => {

        if (resident.houseId === 1234 && resident.roomId === 1234) {
            return (
                <>
                    <Button onClick={() => {
                        history.push(`/residents/${resident.id}`)
                    }}>Choose house/room 
                    </Button>
                </>
            )}
            else {
                return (
                    <>
              <div className="resident__house"><b>House:</b><br/> {resident.houseId}</div>
              <div className="resident__room"><b>Room:</b><br/>{resident.roomId}</div> 
              </>
                )
                
            }
    })


            // const showHouseNRoom = (() => 
            // {
            //   if (resident.houseId === 1235 && resident.roomId === 1235) {
            //   return ( 
            //     housePlacementButton() ) } 
          
            //   else {
            //       return 
            //       <>
            //     <div className="resident__house"><b>House:</b><br/> {resident.houseId}</div>
            //     <div className="resident__room"><b>Room:</b><br/>{resident.roomId}</div> 
            //     </>
            //   }
            // })


    return (
        <section className="resident_detail">
            
            <h3 className="resident__name">{resident.firstName} {resident.lastName}</h3>
            <div className="resident__bday"><br/>Birthdate: {resident.birthdate}</div>
            <div className="resident__gender"><br/>{resident.gender}</div>
            {housePlacementButton()}
            <div className="resident__applied"><br/>Applied Date: {new Date(resident.applied_date).toLocaleDateString('en-US')}</div>
            <div className="resident__intake"><br/>Intake Date: {new Date(resident.intake_date).toLocaleDateString('en-US')}</div>
            {/* <div className="resident__discharge"><br/>Discharge Date: {new Date(resident.discharge_date).toLocaleDateString('en-US')}</div> */}
            <div className="resident__notes"><b>Notes:</b><br/> {resident.notes}</div>
            <br/>
        {editButton()}
        
        </section>
    )
}
