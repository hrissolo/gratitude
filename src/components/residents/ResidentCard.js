import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ResidentContext } from "./ResidentProvider"
import { Table } from 'semantic-ui-react'

export const ResidentCard = ( {residents} ) => {

    // let daysSinceIntake = () => {Date.now() - {residents.intake_date} }

    return (

        
        <Table.Row>
            <Table.Cell>{residents.lastName}</Table.Cell>
            <Table.Cell>{residents.houseId}</Table.Cell>
            <Table.Cell>{residents.roomId}</Table.Cell>
            <Table.Cell> daysSinceIntake()</Table.Cell>
        </Table.Row>
               
        
    )
}
