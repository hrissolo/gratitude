import React, { useState, createContext } from "react"

export const ResidentContext = createContext()


export const ResidentProvider = (props) => {
    const [residents, setResidents] = useState([])


    const getResidents = () => {
        return fetch("http://localhost:8088/residents")
            .then(res => res.json())
            .then(setResidents)
    }

    // const getReptileById = (id) => {
    //     return fetch(`http://localhost:8088/reptiles/${id}`)
    //         .then(res => res.json())
    // }

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
            residents, getResidents, editResident
        }}>
            {props.children}
        </ResidentContext.Provider>
    )
}