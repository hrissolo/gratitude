import React, { useState, createContext } from "react"
import { useParams } from "react-router-dom"

export const ResidentContext = createContext()


export const ResidentProvider = (props) => {
    const [residents, setResidents] = useState([])
    
    const addResident = applicant => {
        return fetch("http://localhost:8088/residents", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(applicant)
        })
        .then(response => response.json())
    }

    const getResidents = () => {
        return fetch("http://localhost:8088/residents")
            .then(res => res.json())
            .then(setResidents)
    }


    const getResidentPerHouse = (id) => {
        return fetch(`http://localhost:8088/residents?houseId=house.${id}`)
            .then(res => res.json())
    }



    const getResidentById = (id) => {
        return fetch(`http://localhost:8088/residents/${id}`)
            .then(res => res.json())
    }

    const editResident = resident => {
        return fetch(`http://localhost:8088/residents/${resident.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(resident)
        })
            .then(getResidents)
    }
    
    return (
        <ResidentContext.Provider value={{
            residents, getResidents, getResidentById, editResident, addResident, getResidentPerHouse
        }}>
            {props.children}
        </ResidentContext.Provider>
    )
}