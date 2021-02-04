import React, { useContext } from "react"
import { Table } from 'semantic-ui-react'


export const AcceptedCard = ( {residents} ) => {

    
    return (
        <Table.Row>
            <Table.Cell>{residents.lastName}, {residents.firstName}</Table.Cell>
            <Table.Cell>{residents.applied_date}</Table.Cell>
            <Table.Cell>{residents.desired_intake_date}</Table.Cell>
        </Table.Row>
               
        
    )
}
