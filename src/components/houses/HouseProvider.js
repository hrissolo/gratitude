import React, { useState, createContext } from "react"

export const HouseContext = createContext()


export const HouseProvider = (props) => {
    const [houses, setHouses] = useState([])


    const getHouses = () => {
        return fetch("http://localhost:8088/houses")
            .then(res => res.json())
            .then(setHouses)
    }

    // const getReptileById = (id) => {
    //     return fetch(`http://localhost:8088/reptiles/${id}`)
    //         .then(res => res.json())
    // }

    // const editReptile = reptile => {
    //     return fetch(`http://localhost:8088/reptiles/${reptile.id}`, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(reptile)
    //     })
    //         .then(getReptiles)
    // }
    
    return (
        <HouseContext.Provider value={{
            houses, getHouses
        }}>
            {props.children}
        </HouseContext.Provider>
    )
}