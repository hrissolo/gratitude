import React, { useContext } from "react"
import { Button, Table } from 'semantic-ui-react'
import { ResidentContext } from "../residents/ResidentProvider"
import { Link } from "react-router-dom"

export const AcceptedCard = ( {residents} ) => {

    const { editResident } = useContext(ResidentContext)


    const intakeButton = (() => {
        let updatedResident = {...residents}
        updatedResident["intake_date"] = Date.now()
        editResident(updatedResident)
    })



    return (
        <Table.Row>
            <Table.Cell>{residents.lastName}, {residents.firstName}</Table.Cell>
            <Table.Cell><Link to={`/residents/edit/${residents.id}`}><Button onClick={() => intakeButton()}>Intake</Button></Link></Table.Cell>
            <Table.Cell>{new Date(residents.applied_date).toLocaleDateString('en-US')}</Table.Cell>
            <Table.Cell>{residents.desired_intake_date}</Table.Cell>
        </Table.Row>
               
        
    )
}


