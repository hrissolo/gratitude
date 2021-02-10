import React, { useContext } from "react"
import { Table } from 'semantic-ui-react'


export const DeniedCard = ( {residents} ) => {

    
    return (
        <Table.Row>
            <Table.Cell>{residents.lastName}, {residents.firstName}</Table.Cell>
            <Table.Cell>{new Date(residents.applied_date).toLocaleDateString('en-US')}</Table.Cell>
            <Table.Cell>{residents.notes}</Table.Cell>
        </Table.Row>
               
        
    )
}
