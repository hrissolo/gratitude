import React, { useContext } from "react"
import { Table, Button } from 'semantic-ui-react'


export const AcceptedCard = ( {residents} ) => {

    
    return (
        <Table.Row>
            <Table.Cell>{residents.lastName}, {residents.firstName}</Table.Cell>
            <Table.Cell><Button>Intake</Button></Table.Cell>
            <Table.Cell>{new Date(residents.applied_date).toLocaleDateString('en-US')}</Table.Cell>
            <Table.Cell>{residents.desired_intake_date}</Table.Cell>
        </Table.Row>
               
        
    )
}
