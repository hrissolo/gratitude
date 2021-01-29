import React, { useContext } from "react"
import { ResidentContext } from "./ResidentProvider"
import { useParams, useHistory, Link } from "react-router-dom"



export const ResidentDetail = () => {
    const { getResidentById } = useContext(ResidentContext)
	
	const [resident, setresidents] = useState({})
	
	const {residentId} = useParams();
	const history = useHistory();

    useEffect(() => {
        getResidentById(residentId)
        // .then((response) => {
		// 	setResidents(response)
		// })
			}, [residentId])
            
    return (
        <section className="resident_detail">
            
            <h3 className="resident__name">{resident.username}</h3>
            <div className="resident__species"><b>Species:</b><br/>{resident.species}</div>
            <div className="resident__lookingFor"><b>Looking for:</b><br/> {resident.lookingFor}</div>
            <div className="resident__bio"><b>Bio:</b><br/> {resident.bio}</div>
            <br/>
        
        </section>
    )
}