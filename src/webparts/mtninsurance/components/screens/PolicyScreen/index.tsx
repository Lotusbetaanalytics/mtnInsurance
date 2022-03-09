import * as React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import { Header, Input, Navigation, Slider, Select, DateInput, OptionHelpers, Textarea, Radio } from '../../containers'
import { BsChevronLeft, BsChevronRight, BsX } from "react-icons/bs";

const PolicyScreen = ({ history }) => {

    // User Data from Storage
    const data = JSON.parse(localStorage.getItem("data"))


    const [initiator, setInitiator] = useState(data.DisplayName)
    const [email, setEmail] = useState(data.Email)
    const [date, setDate] = useState(new Date().toJSON().slice(0, 10))
    const [insured, setInsured] = useState("")
    const [policyNumber, setPolicyNumber] = useState("")
    const [policyName, setPolicyName] = useState("")
    const [policyDescription, setPolicyDescription] = useState("")
    const [policyType, setPolicyType] = useState("")
    const [policyStartDate, setPolicyStartDate] = useState("")
    const [policyExpiryDate, setPolicyExpiryDate] = useState("")
    const [currency, setCurrency] = useState("")


    // Button Actions
    const prevHandler = () => {
        history.push("/")
    }

    const nextHandler = () => {
        const formData = { initiator, email, date, insured, policyNumber, policyName, policyDescription, policyType, policyStartDate, policyExpiryDate, currency }
        localStorage.setItem("policyData", JSON.stringify(formData))
        history.push("/newpolicy/screen/2")
    }


    return (
        <div className="appContainer">
            <Navigation />
            <div className="contentsRight">
                <Header title="New Policy" />
                <Slider size={25} />
                <div className='mtn__formContainer'>

                    {/* Form 1 */}
                    <>
                        <div className='mtn__InputFlex'>
                            <Input
                                title="Initiator"
                                value={initiator}
                                onChange={(e) => setInitiator(e.target.value)}
                                type="text"
                                readOnly={true}

                            />
                            <Input
                                title="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                readOnly={true}

                            />
                            <DateInput
                                title="Date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                type="text"
                                readOnly={true}


                            />
                            <DateInput
                                title="Insured"
                                value={insured}
                                onChange={(e) => setInsured(e.target.value)}
                                type="text"
                            />
                            <Input onChange={(e) => setPolicyName(e.target.value)} value={policyName} title="Policy Name" type="text" />
                            <Input onChange={(e) => setPolicyNumber(e.target.value)} value={policyNumber} title="Policy Number" type="text" />
                            <Textarea title="Policy Description"
                                value={policyDescription}
                                onChange={(e) => setPolicyDescription(e.target.value)} />
                            <Select onChange={(e) => setPolicyType(e.target.value)} value={policyType} title="Policy Type" options={OptionHelpers.policyType} />

                            <DateInput
                                title="Policy Start Date"
                                value={policyStartDate}
                                onChange={(e) => setPolicyStartDate(e.target.value)}
                                type="text"
                            />
                            <DateInput
                                title="Policy Expiry Date"
                                value={policyExpiryDate}
                                onChange={(e) => setPolicyExpiryDate(e.target.value)}
                                type="text"
                            />

                            <Select onChange={(e) => setCurrency(e.target.value)} value={currency} title="Currency" options={OptionHelpers.currency} />

                        </div>
                        <div className='mtn__btnContainer'>
                            <div> <button className='mtn__btn mtn__black' type='button' onClick={prevHandler}><BsX />Cancel </button></div>
                            <div> <button className='mtn__btn mtn__yellow' type='button' onClick={nextHandler}>Next <BsChevronRight className='mtn__btnIconsL' /></button></div>
                        </div>
                    </>
                    {/* End of Form 1 */}

                </div>


            </div>

        </div>
    )
}

export default PolicyScreen