import React, { useContext, useEffect } from "react"
import { ResidentContext} from "../residents/ResidentProvider"
import { ApplicantCard } from "./ApplicantCard"
import {useHistory} from "react-router-dom"
import { Table } from 'semantic-ui-react'


export const ApplicantList = () => {
    const { residents, getResidents } = useContext(ResidentContext)
    const history = useHistory()
    
	//useEffect - reach out to the world for something
    useEffect(() => {
		getResidents()
		
    }, [])

    const allApplicants = ((rezzy) => 
      {
        if (rezzy.applied_date > 1234 && rezzy.accepted_date < 1235 && rezzy.discharge_date < 1235 && rezzy.deny_date < 1235) {
        return ( 
        <ApplicantCard key={rezzy.id} resident={rezzy} /> ) } 
    
        else {
          return null
        }
      })


    return (
      
    <>
    <div className="applicantListcontainer">
      <h1 className="applicantTitle">Pending Applicants</h1>
          
      <div className="applicantContainer">
      
      <Table striped>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Applied Date</Table.HeaderCell>
            <Table.HeaderCell>Current Location</Table.HeaderCell>
            <Table.HeaderCell>Payment Method</Table.HeaderCell>
        </Table.Row>
            </Table.Header>

        <Table.Body>

        
        {
        residents.map(residents => {
          
          return allApplicants(residents)
          })
        }

        </Table.Body>
        </Table>

      </div>
      </div>
    </>
  )
}



