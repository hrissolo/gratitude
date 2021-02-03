import React, { useContext, useEffect, useState, useRef } from "react"
import { ResidentContext } from "../residents/ResidentProvider"
import { useHistory, useParams } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react'


export const ApplicantForm = () => {
    const { resident, addResident, getResidents } = useContext(ResidentContext)

    const history = useHistory();

    const [residents, setResident] = useState({});

    // const firstName = useRef(null)
    // const lastName = useRef(null)
    // const birthdate = useRef(null)
    // const gender = useRef(null)
    // const houseId = useRef(null)
    // const roomId = useRef(null)
    // const notes = useRef(null)
    // const intake_date= useRef(null)
    // const applied_date = useRef(null)
    // const discharge_date = useRef(null)
    // const payment_method = useRef(null)
    // const current_location = useRef(null)
    // const desired_intake_date = useRef(null)



    useEffect(() => {
      getResidents()
    }, [])

    const handleInputChange = (event) => {
      const newResident = { ...residents }
      newResident[event.target.id] = event.target.value
      setResident(newResident)
    }


    const handleAddResident = (event) => {
      // event.preventDefault() 
        const newResident = { ...residents }
        
        newResident.applied_date = Date.now()
        newResident.roomId = null
        newResident.houseId = null

        addResident(resident)
        .then(() => history.push("/applicants"))
      }
    

    return (
      <Form className="form--login" onSubmit={handleInputChange}>
             <div className="register-form-align">
             <h1 className="form-register-txt">
               Apply to Gratitude Houses 
             </h1>
               <Form.Group><Form.Field>
               <div className="registerLabel">First Name</div>
      
            <input
                
                ref={firstName}
                type="text"
                name="firstName"
                width={5}
                className="form-control"
                placeholder="First Name"
                required
                autoFocus
              /></Form.Field>
              <Form.Field>
      
              <div className="registerLabel">Last Name</div>
                <input
                ref={lastName}
                width={5}
                type="text"
                name="lastName"
                className="form-control"
                placeholder="Last Name"
                required
              />
              
              </Form.Field></Form.Group>
          
          <Form.Field>
      
          <div className="registerLabel">Birth Date</div>
      <input
                
                ref={birthdate}
                width={16}
                type="text"
                name="birthdate"
                className="form-control"
                placeholder="Birthdate"
                required/>
          </Form.Field>
              <div className="registerLabel">Gender</div>
      
              <Form.Field><input
                ref={gender}
                width={8}
                type="text"
                name="gender"
                className="form-control"
                placeholder="Gender"
                required
              /></Form.Field>
              
              <div className="registerLabel"> Payment method: </div>
              <Form.Field><input
                ref={payment_method}
                type="text"
                name="payment_method"
                className="form-control"
                placeholder="Payment Method"
                required
              /></Form.Field>
            
            
            <Form.Field>
            <div className="registerLabel">Current Location</div>
            <input
                ref={current_location}
                type="text"
                name="current_location"
                className="form-control"
                placeholder="Current Location"
                required
              /></Form.Field>
      
              <div className="registerLabel"> Desired Intake Date</div>
              <Form.Field><input
                ref={desired_intake_date}
                type="text"
                name="desired_intake_date"
                className="form-control"
                placeholder="Desired Intake Date"
                required
              /></Form.Field>
            
              <Button color="olive" type="submit" onClick={handleAddResident}>Submit Application </Button>
              </div>
          </Form>
      
    )
}