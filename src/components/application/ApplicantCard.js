import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ResidentContext } from "../residents/ResidentProvider"
import { Table, Button } from 'semantic-ui-react'


export const ApplicantCard = ( {residents} ) => {

    
    return (
        <Table.Row>
            <Table.Cell>{residents.lastName}, {residents.firstName}</Table.Cell>
            <Table.Cell>
                <Button.Group>
                <Button>Accept</Button>
                <Button.Or />
                <Button>Deny</Button>
                </Button.Group>
            </Table.Cell>
            <Table.Cell>{new Date(residents.applied_date).toLocaleDateString('en-US')}</Table.Cell>
            <Table.Cell>{residents.current_location}</Table.Cell>
            <Table.Cell>{residents.payment_method}</Table.Cell>
        </Table.Row>
               
        
    )
}
