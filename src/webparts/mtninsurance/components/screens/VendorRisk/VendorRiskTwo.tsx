import * as React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import { Header, Input, Navigation, Slider, Select, DateInput, OptionHelpers, Textarea, } from '../../containers'
import { BsChevronLeft, BsChevronRight, BsX } from "react-icons/bs";

const VendorRiskTwo = ({ history }) => {

    // User Data from Storage
    const data = JSON.parse(localStorage.getItem("data"))

    const [datePolicyReceived, setDatePolicyReceived] = useState("")
    const [datePolicyValidated, setDatePolicyValidated] = useState("")
    const [insuranceExpiryDate, setInsuranceExpiryDate] = useState("")
    const [comments, setComments] = useState("")
    const [user, setUser] = useState("")
    const [liaisonPerson, setLiaisonPerson] = useState("")


    // Button Actions
    const prevHandler = () => {
        history.push("/")
    }

    const nextHandler = () => {
        history.push("/newvendor/screen/2")
    }


    return (
        <div className="appContainer">
            <Navigation />
            <div className="contentsRight">
                <Header title="New Vendor Risk" />
                <Slider size={50} />
                <div className='mtn__formContainer'>

                    {/* Form 1 */}
                    <>
                        <div className='mtn__InputFlex'>

                            <DateInput
                                title="Date Policy Received"
                                value={datePolicyReceived}
                                onChange={(e) => setDatePolicyReceived(e.target.value)}
                                type="text"
                            />
                            <DateInput
                                title="Date Policy Validated"
                                value={datePolicyValidated}
                                onChange={(e) => setDatePolicyValidated(e.target.value)}
                                type="text"
                            />
                            <DateInput
                                title="Insurance Expiry Date"
                                value={insuranceExpiryDate}
                                onChange={(e) => setInsuranceExpiryDate(e.target.value)}
                                type="text"
                            />
                            <Input onChange={(e) => setUser(e.target.value)} value={user} title="User" type="text" />
                            <Input onChange={(e) => setLiaisonPerson(e.target.value)} value={liaisonPerson} title="Liaison Person" type="text" />
                            <Textarea title="Comments"
                                value={comments}
                                onChange={(e) => setComments(e.target.value)} />


                        </div>
                        <div className='mtn__btnContainer'>
                            <div> <button className='mtn__btn mtn__black mtn__btnIcons' type='button' onClick={prevHandler}><BsChevronLeft />Previous</button></div>
                            <div> <button className='mtn__btn mtn__yellow mtn__btnIcons' type='button' onClick={nextHandler}>Submit <BsChevronRight /></button></div>
                        </div>
                    </>
                    {/* End of Form 1 */}

                </div>


            </div>

        </div>
    )
}

export default VendorRiskTwo