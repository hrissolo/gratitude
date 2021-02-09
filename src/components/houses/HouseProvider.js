import React, { useState, createContext } from "react"

export const HouseContext = createContext()


export const HouseProvider = (props) => {
    const [houses, setHouses] = useState([])


    const getHouses = () => {
        return fetch("http://localhost:8088/houses")
            .then(res => res.json())
            .then(setHouses)
    }

    const getHouseById = (id) => {
        return fetch(`http://localhost:8088/houses/${id}`)
            .then(res => res.json())
    }


    
    return (
        <HouseContext.Provider value={{
            houses, getHouses, getHouseById
        }}>
            {props.children}
        </HouseContext.Provider>
    )
}