import React, { useContext, useEffect, useState, useRef } from "react"
import { ResidentContext } from "../residents/ResidentProvider"
import { useHistory, useParams } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react'


export const ApplicantForm = () => {
    const { addResident, getResidents } = useContext(ResidentContext)

    const history = useHistory();

    const [resident, setResident] = useState({
      firstName: "",
      lastName: "",
      birthdate: "",
      gender: "",
      houseId: null,
      roomId: null,
      intake_date: null,
      applied_date: Date.now(),
      discharge_date: null,
      notes: null,
      payment_method: "",
      current_location: "",
      desired_intake_date: ""
    });


    useEffect(() => {
      getResidents()
    }, [])

    const handleInputChange = (event) => {
      const newResident = { ...resident }
      newResident[event.target.id] = event.target.value
      setResident(newResident)

    }


    const handleAddResident = (event) => {
        addResident(resident)
        .then(() => history.push("/applicants"))
    }
    

    return (
      <Form className="form--login">
             <div className="register-form-align">
             <h1 className="form-register-txt">
               Apply to Gratitude Houses 
             </h1>
               <Form.Group><Form.Field>
               <div className="registerLabel">First Name</div>
      
            <input
                
                id="firstName"
                type="text"
                name="firstName"
                width={5}
                className="form-control"
                placeholder="First Name"
                required
                autoFocus
                onChange={handleInputChange}
              /></Form.Field>
              <Form.Field>
      
              <div className="registerLabel">Last Name</div>
                <input
                id="lastName"
                width={5}
                type="text"
                name="lastName"
                className="form-control"
                placeholder="Last Name"
                required
                onChange={handleInputChange}
              />
              
              </Form.Field></Form.Group>
          
          <Form.Field>
      
          <div className="registerLabel">Birth Date</div>
            <input
                
                id="birthdate"
                width={16}
                type="text"
                name="birthdate"
                className="form-control"
                placeholder="Birthdate"
                onChange={handleInputChange}
                required/>
          </Form.Field>
              <div className="registerLabel">Gender</div>
      
              <Form.Field><input
                id="gender"
                width={8}
                type="text"
                name="gender"
                className="form-control"
                placeholder="Gender"
                required
                onChange={handleInputChange}
              /></Form.Field>
              
              <div className="registerLabel"> Payment method: </div>
              <Form.Field><input
                id="payment_method"
                type="text"
                name="payment_method"
                className="form-control"
                placeholder="Payment Method"
                required
                onChange={handleInputChange}
              /></Form.Field>
            
            
            <Form.Field>
            <div className="registerLabel">Current Location</div>
            <input
                id="current_location"
                type="text"
                name="current_location"
                className="form-control"
                placeholder="Current Location"
                required
                onChange={handleInputChange}
              /></Form.Field>
      
              <div className="registerLabel"> Desired Intake Date</div>
              <Form.Field><input
                id="desired_intake_date"
                type="text"
                name="desired_intake_date"
                className="form-control"
                placeholder="Desired Intake Date"
                required
                onChange={handleInputChange}
              /></Form.Field>
            
              <Button color="olive" type="submit" onClick={handleAddResident}>Submit Application </Button>
              </div>
          </Form>
      
    )
}
