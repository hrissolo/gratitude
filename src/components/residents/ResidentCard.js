import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Table,Button } from 'semantic-ui-react'
import "./Resident.css"

 

export const ResidentCard = ( {residents} ) => {

    
    let one_day=1000*60*60*24;
    const daysSinceIntake = 
        (Math.round((Date.now() - residents.intake_date) / one_day))
    

    return (


        <Table.Row>
            <Table.Cell><Link to={`/residents/${residents.id}`}>{residents.lastName}, {residents.firstName} </Link></Table.Cell>
            <Table.Cell><Button size='mini'>Discharge</Button></Table.Cell>
            <Table.Cell>{residents.houseId}</Table.Cell>
            <Table.Cell>{residents.roomId}</Table.Cell>
            <Table.Cell>{daysSinceIntake}</Table.Cell>
        </Table.Row>
               
        
    )
}