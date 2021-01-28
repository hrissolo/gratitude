import React, { useContext, useEffect } from "react"
import { ResidentContext} from "./ResidentProvider"
import { ResidentCard } from "./ResidentCard"
import {useHistory} from "react-router-dom"


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
      
        {
        residents.map(residents => {
          return <ResidentCard key={residents.id} residents={residents} />
          })
        }
      </div>
      </div>
    </>
  )
}