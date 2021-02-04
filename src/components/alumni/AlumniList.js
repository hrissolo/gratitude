import React, { useContext, useEffect } from "react"
import { ResidentContext} from "../residents/ResidentProvider"
import {ResidentCard} from "../residents/ResidentCard"
import {AlumniCard} from "./AlumniCard"
import {useHistory} from "react-router-dom"
import { Table } from 'semantic-ui-react'


export const AlumniList = () => {
    const { residents, getResidents } = useContext(ResidentContext)
    const history = useHistory()
    
	//useEffect - reach out to the world for something
    useEffect(() => {
		getResidents()
		
    }, [])

    const justCurrentAlumni = ((alumni) => 
      {
        if (alumni.discharge_date !== null) {
        return ( 
        <AlumniCard key={alumni.id} residents={alumni} /> )
        } else {
          return null
        }
      })


    return (
      
    <>
    <div className="alumniListcontainer">
      <h1 className="alumniTitle">Alumni</h1>
          
      <div className="alumniContainer">
      
      <Table striped>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Discharge Date</Table.HeaderCell>
            <Table.HeaderCell>Discharge Notes</Table.HeaderCell>
        </Table.Row>
        </Table.Header>

        <Table.Body>

        
        {
        residents.map(alumni => {
          
          return justCurrentAlumni(alumni)
          })
        }

        </Table.Body>
        </Table>

      </div>
      </div>
    </>
  )
}

