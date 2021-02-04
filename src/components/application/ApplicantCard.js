import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ResidentContext } from "../residents/ResidentProvider"
import { Table } from 'semantic-ui-react'


export const ApplicantCard = ( {residents} ) => {

    
    return (
        <Table.Row>
            <Table.Cell>{residents.lastName}, {residents.firstName}</Table.Cell>
            <Table.Cell>{residents.applied_date}</Table.Cell>
            <Table.Cell>{residents.current_location}</Table.Cell>
            <Table.Cell>{residents.payment_method}</Table.Cell>
        </Table.Row>
               
        
    )
}
