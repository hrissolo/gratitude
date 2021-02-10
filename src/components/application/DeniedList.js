import React, { useContext, useEffect } from "react"
import { ResidentContext} from "../residents/ResidentProvider"
import { DeniedCard } from "./DeniedCard"
import {useHistory} from "react-router-dom"
import { Table } from 'semantic-ui-react'
import "./Application.css"

export const DeniedList = () => {
    const { residents, getResidents } = useContext(ResidentContext)
    const history = useHistory()
    
	//useEffect - reach out to the world for something
    useEffect(() => {
		getResidents()
		
    }, [])

    const deniedApplicants = ((rezzy) => 
      {
        if (rezzy.accepted_date < 1235 && rezzy.deny_date > 1234 ) {
        return ( 
        <DeniedCard key={rezzy.id} residents={rezzy} /> ) } 
    
        else {
          return null
        }
      })


    return (
      
    <>
    <div className="deniedListcontainer">
      <h1 className="deniedTitle">Denied Applicants</h1>
          
      <div className="deniedContainer">
      
      <Table striped>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Applied Date</Table.HeaderCell>
            <Table.HeaderCell>Notes</Table.HeaderCell>
        </Table.Row>
            </Table.Header>

        <Table.Body>

        
        {
        residents.map(residents => {
          
          return deniedApplicants(residents)
          })
        }

        </Table.Body>
        </Table>

      </div>
      </div>
    </>
  )
}



