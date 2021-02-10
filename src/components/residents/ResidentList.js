import React, { useContext, useEffect, useState } from "react"
import { ResidentContext} from "./ResidentProvider"
import { ResidentCard } from "./ResidentCard"
import { useHistory, useParams } from "react-router-dom"
import { Table } from 'semantic-ui-react'
import "./Resident.css"

export const ResidentList = () => {
    const { residents, getResidents } = useContext(ResidentContext)
    const { houses, getRezPerHouse } = useContext(ResidentContext)
    const history = useHistory()
    const {houseId} = useParams() || ""
    const { houseResidents, setHouseResidents } = useState([]) 
    
	//useEffect - reach out to the world for something
    useEffect(() => {
      if (houseId) {
        getRezPerHouse(houseId)
      } else {
        getResidents()
      }
    }, [])


    const justCurrentResidents = ((rezzy) => 
      {
        if (rezzy.intake_date > 1234 && rezzy.applied_date > 1234 && rezzy.discharge_date < 1235) {
        return ( 
        <ResidentCard key={rezzy.id} residents={rezzy} /> )
        } else {
          return null
        }
      })

      let cResidents = []
      const determineResidents = () => {
        if (houseId) {
          let whichOne = "houseObj" 
          if (houses.residents) {
            cResidents = houses.residents 
          } else {
            cResidents = []
          }
        } else {
          let whichOne = "resArray" 
          cResidents = residents
        }
      }

    return (
      
    <>
    <div className="residentListcontainer">
      <h1 className="residentTitle">Residents</h1>
          
      <div className="residentContainer">
      
      {determineResidents()}
        


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
          cResidents.map(person => {
          
          return justCurrentResidents(person)
          })
        }



        </Table.Body>
        </Table>

      </div>
      </div>
    </>
  )
}



