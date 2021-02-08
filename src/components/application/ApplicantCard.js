import React, { useContext, useEffect, useState } from "react"
import { Link, useHistory,useParams } from "react-router-dom"
import { ResidentContext } from "../residents/ResidentProvider"
import { Table, Button } from 'semantic-ui-react'


export const ApplicantCard = ( {resident} ) => {

    const { getResidentById, editResident } = useContext(ResidentContext)
	
	
	
	const history = useHistory();

    // useEffect(() => {
    //     getResidentById(residentId)
    //     .then((response) => {
	// 		setResident(response)
	// 	})
	// 		}, [residentId])
            

    const acceptButton = (() => {
        let updatedResident = {...resident}
        updatedResident["accepted_date"] = Date.now()
        editResident(updatedResident)
    })


    const denyButton = (() => {
        let updatedResident = {...resident}
        updatedResident["deny_date"] = Date.now()
        editResident(updatedResident)
    })


    return (
        <Table.Row>
            <Table.Cell>{resident.lastName}, {resident.firstName}</Table.Cell>
            <Table.Cell>
                <Button.Group>
                <Button onClick={()=> acceptButton()}>Accept</Button>
                <Button.Or />
                <Button onClick={()=> denyButton()}>Deny</Button>
                </Button.Group>
            </Table.Cell>
            <Table.Cell>{new Date(resident.applied_date).toLocaleDateString('en-US')}</Table.Cell>
            <Table.Cell>{resident.current_location}</Table.Cell>
            <Table.Cell>{resident.payment_method}</Table.Cell>
        </Table.Row>
               
        
    )
}
