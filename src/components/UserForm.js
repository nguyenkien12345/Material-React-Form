import React, { useState } from 'react';
import Confirm from './Confirm';
import FormPersonalDetails from './FormPersonalDetails';
import FormUserDetails from './FormUserDetails';
import Success from './Success';


function UserForm() {

    // Pagination 
    const [step, setStep] = useState(1);

    // FormUserDetail
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    
    // FormPersonalDetail
    const [job, setJob] = useState('');
    const [city, setCity] = useState('');
    const [bio, setBio] = useState('');

    // Proceed to next step
    const nextStep = () => {
        setStep(step + 1)
    }

    // Proceed to previous step
    const previousStep = () => {
        setStep(step - 1)
    }

    const handleChangeFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleChangeLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangeJob = (e) => {
        setJob(e.target.value)
    }

    const handleChangeCity = (e) => {
        setCity(e.target.value)
    }

    const handleChangeBio = (e) => {
        setBio(e.target.value)
    }

    const values = {firstName,lastName,email,job,city,bio}

    switch(step){
        case 1: 
            return (
                <FormUserDetails 
                    nextStep={nextStep}
                    values={values}
                    handleChangeFirstName={handleChangeFirstName}
                    handleChangeLastName={handleChangeLastName}
                    handleChangeEmail={handleChangeEmail}
                />
            )

        case 2:
            return (
                <FormPersonalDetails
                    nextStep={nextStep}
                    previousStep={previousStep}
                    values={values}
                    handleChangeJob={handleChangeJob}
                    handleChangeCity={handleChangeCity}
                    handleChangeBio={handleChangeBio}
                />
            )

        case 3:
            return (
                <Confirm
                    nextStep={nextStep}
                    previousStep={previousStep}
                    values={values}
                />
            )

        case 4:
            return (
                <Success/>
            )

        default:
            return (
                <h1>Không tìm thấy trang</h1>
            )
    }
}

export default UserForm
