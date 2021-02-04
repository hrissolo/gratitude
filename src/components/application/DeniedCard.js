import React, { useContext } from "react"
import { Table } from 'semantic-ui-react'


export const DeniedCard = ( {residents} ) => {

    
    return (
        <Table.Row>
            <Table.Cell>{residents.lastName}, {residents.firstName}</Table.Cell>
            <Table.Cell>{residents.applied_date}</Table.Cell>
            <Table.Cell>{residents.notes}</Table.Cell>
        </Table.Row>
               
        
    )
}
