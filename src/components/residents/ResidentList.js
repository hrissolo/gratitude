import React, { useContext, useEffect } from "react"
import { ResidentContext} from "./ResidentProvider"
import { ResidentCard } from "./ResidentCard"
import {useHistory} from "react-router-dom"
import { Table } from 'semantic-ui-react'


export const ResidentList = () => {
    const { residents, getResidents } = useContext(ResidentContext)
    const history = useHistory()
    
	//useEffect - reach out to the world for something
    useEffect(() => {
		getResidents()
		
    }, [])

    return (
      

    <>
    <div className="residentListcontainer">
      <h1 className="residentTitle">Residents</h1>
          
      <div className="residentContainer">
      
      <Table striped>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>House</Table.HeaderCell>
            <Table.HeaderCell>Room</Table.HeaderCell>
            <Table.HeaderCell>Days since intake</Table.HeaderCell>
        </Table.Row>
            </Table.Header>

        <Table.Body>

        {
        residents.map(residents => {
          return <ResidentCard key={residents.id} residents={residents} />
          })
        }

        </Table.Body>
        </Table>

      </div>
      </div>
    </>
  )
}



