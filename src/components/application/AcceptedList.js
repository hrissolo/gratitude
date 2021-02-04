import React, { useContext, useEffect } from "react"
import { ResidentContext} from "../residents/ResidentProvider"
import { AcceptedCard } from "./AcceptedCard"
import {useHistory} from "react-router-dom"
import { Table } from 'semantic-ui-react'


export const AcceptedList = () => {
    const { residents, getResidents } = useContext(ResidentContext)
    const history = useHistory()
    
	//useEffect - reach out to the world for something
    useEffect(() => {
		getResidents()
		
    }, [])

    const acceptedApplicants = ((rezzy) => 
      {
        if (rezzy.discharge_date === null && rezzy.intake_date === null) {
        return ( 
        <AcceptedCard key={rezzy.id} residents={rezzy} /> ) } 
    
        else {
          return null
        }
      })


    return (
      
    <>
    <div className="acceptedListcontainer">
      <h1 className="acceptedTitle">Accepted Applicants</h1>
          
      <div className="acceptedContainer">
      
      <Table striped>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Applied Date</Table.HeaderCell>
            <Table.HeaderCell>Desired Intake Date</Table.HeaderCell>
        </Table.Row>
            </Table.Header>

        <Table.Body>

        
        {
        residents.map(residents => {
          
          return acceptedApplicants(residents)
          })
        }

        </Table.Body>
        </Table>

      </div>
      </div>
    </>
  )
}



