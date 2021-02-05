import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Table } from 'semantic-ui-react'

export const AlumniCard = ( {residents} ) => {


    return (


        <Table.Row>
            <Table.Cell><Link to={`/residents/${residents.id}`}>{residents.lastName}</Link></Table.Cell>
            <Table.Cell>{new Date(residents.discharge_date).toLocaleDateString('en-US')}</Table.Cell>
            <Table.Cell>{residents.notes}</Table.Cell>
        </Table.Row>
               
        
    )
}
