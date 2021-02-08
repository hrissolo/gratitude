import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ResidentContext } from "./ResidentProvider"
import { Table } from 'semantic-ui-react'


 

export const ResidentCard = ( {residents} ) => {

    
    let one_day=1000*60*60*24;
    const daysSinceIntake = 
        (Math.round((Date.now() - residents.intake_date) / one_day))
    

    return (


        <Table.Row>
            <Table.Cell><Link to={`/residents/${residents.id}`}>{residents.firstName} {residents.lastName}</Link></Table.Cell>
            <Table.Cell>{residents.houseId}</Table.Cell>
            <Table.Cell>{residents.roomId}</Table.Cell>
            <Table.Cell>{daysSinceIntake}</Table.Cell>
        </Table.Row>
               
        
    )
}