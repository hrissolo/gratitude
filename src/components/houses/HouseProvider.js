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

    const editHouse = house => {
        return fetch(`http://localhost:8088/houses/${house.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(house)
        })
            .then(getHouses)
    }

    
    return (
        <HouseContext.Provider value={{
            houses, getHouses, getHouseById, editHouse
        }}>
            {props.children}
        </HouseContext.Provider>
    )
}