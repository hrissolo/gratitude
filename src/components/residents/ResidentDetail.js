import React, { useContext, useEffect, useState } from "react"
import { ResidentContext } from "./ResidentProvider"
import { HouseContext} from "../houses/HouseProvider"
import { useParams, useHistory, Link } from "react-router-dom"
import {Button} from "semantic-ui-react"
import "./Resident.css"

export const ResidentDetail = () => {
    const { getResidentById, housesWithAllResidents } = useContext(ResidentContext)
    const { editResident } = useContext(ResidentContext)

    // const [ house, setHouses] = useState()
	const [resident, setResidents] = useState({})
    const [newHouseArray, setNewHouseArray] = useState({})
	
	const {residentId} = useParams();
	const history = useHistory();

    useEffect(() => {
        getResidentById(residentId)
        .then((response) => {
			setResidents(response)  
		})
			}, [residentId])
            
    useEffect(() => {
            housesWithAllResidents()
            .then((houseResponse) => { 
                parseHouseResidents(houseResponse)} 
            )
    })

    // const dischargeButton = (() => {
    //     let updatedResident = {...resident}
    //     updatedResident["discharge_date"] = Date.now()
    //     editResident(updatedResident)
    // })


    const parseHouseResidents = (houseResponse) => {
        const newHouseArray = houseResponse.map(singlehouse => {
            const currentResidents = singlehouse.residents.filter(onePerson => {
                return onePerson.discharge_date === 1234
            } )
            singlehouse["currentResidents"] = currentResidents 
            return singlehouse 
        })
            console.log(newHouseArray)

        console.log(newHouseArray[0].totalBeds, newHouseArray[0].currentResidents.length)
    }    
    


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

    // const housePlacementButton = (() => {

    //     if (resident.houseId === 1234 && resident.roomId === 1234) {
    //         return (
    //             <>
    //                 <Button onClick={() => {
    //                     history.push(`/residents/${resident.id}`)
    //                 }}>Choose house/room 
    //                 </Button>
    //             </>
    //         )}
    //         else {
    //             return (
    //                 <>
    //           <div className="resident__house"><b>House:</b><br/> {resident.houseId}</div>
    //           <div className="resident__room"><b>Room:</b><br/>{resident.roomId}</div> 
    //           </>
    //             )
                
    //         }
    // })


    return (
        <section className="resident_detail">
            
            <h3 className="resident__name">{resident.firstName} {resident.lastName}</h3>
            <div className="resident__bday"><br/>Birthdate: {resident.birthdate}</div>
            <div className="resident__gender"><br/>{resident.gender}</div>
            <div className="resident__house"><b>House:</b><br/> {resident.houseId}</div>
            <div className="resident__room"><b>Room:</b><br/>{resident.roomId}</div> 
            <div className="resident__applied"><br/>Applied Date: {new Date(resident.applied_date).toLocaleDateString('en-US')}</div>
            <div className="resident__intake"><br/>Intake Date: {new Date(resident.intake_date).toLocaleDateString('en-US')}</div>
            {/* <div className="resident__discharge"><br/>Discharge Date: {new Date(resident.discharge_date).toLocaleDateString('en-US')}</div> */}
            <div className="resident__notes"><b>Notes:</b><br/> {resident.notes}</div>
            <br/>
        {editButton()}
        {/* <Button onClick={dischargeButton()}>Discharge</Button> */}
        </section>
    )
}
