import * as React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import { Header, Input, Navigation, Slider, Select, DateInput, OptionHelpers, Textarea, Radio } from '../../containers'
import { BsChevronLeft, BsChevronRight, BsX } from "react-icons/bs";

const VendorRisk = ({ history }) => {

    // User Data from Storage
    const data = JSON.parse(localStorage.getItem("data"))


    const [initiator, setInitiator] = useState(data.DisplayName)
    const [email, setEmail] = useState(data.Email)
    const [date, setDate] = useState(new Date().toJSON().slice(0, 10))
    const [vendor, setVendor] = useState("")
    const [contractTitle, setContractTitle] = useState("")
    const [contractStartDate, setContractStartDate] = useState("")
    const [contractEndDate, setContractEndDate] = useState("")
    const [dateContractReceived, setDateContractReceived] = useState("")
    const [dateRecommendationAdvised, setDateRecommendationAdvised] = useState("")
    const [insurancePolicies, setInsurancePolicies] = useState("")
    const [sumInsured, setSumInsured] = useState("")
    const [status, setStatus] = useState("")



    // Button Actions
    const prevHandler = () => {
        history.push("/dashboard")
    }

    const nextHandler = () => {
        const formData = { initiator, email, date, vendor, contractTitle, contractStartDate, contractEndDate, dateContractReceived, dateRecommendationAdvised, insurancePolicies, sumInsured, status }
        localStorage.setItem("vendorData", JSON.stringify(formData))
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
                            <Input onChange={(e) => setVendor(e.target.value)} value={vendor} title="Vendor" type="text" />
                            <Input onChange={(e) => setContractTitle(e.target.value)} value={contractTitle} title="Contract Title" type="text" />

                            <DateInput
                                title="Contract Start Date"
                                value={contractStartDate}
                                onChange={(e) => setContractStartDate(e.target.value)}
                                type="text"
                            />

                            <DateInput
                                title="Contract End Date"
                                value={contractEndDate}
                                onChange={(e) => setContractEndDate(e.target.value)}
                                type="text"
                            />
                            <DateInput
                                title="Date Contract Received"
                                value={dateContractReceived}
                                onChange={(e) => setDateContractReceived(e.target.value)}
                                type="text"
                            />
                            <DateInput
                                title="Date Recommendation Advised"
                                value={dateRecommendationAdvised}
                                onChange={(e) => setDateRecommendationAdvised(e.target.value)}
                                type="text"
                            />
                            <Input onChange={(e) => setInsurancePolicies(e.target.value)} value={insurancePolicies} title="Insurance Policies" type="text" />
                            <Input onChange={(e) => setSumInsured(e.target.value)} value={sumInsured} title="Sum Insured" type="text" />

                            <Select onChange={(e) => setStatus(e.target.value)} value={status} title="Status" options={OptionHelpers.vendorStatus} />

                        </div>
                        <div className='mtn__btnContainer'>
                            <div> <button className='mtn__btn mtn__black mtn__btnIcons' type='button' onClick={prevHandler}><BsX className='mtn__btnIconsR' />Cancel </button></div>
                            <div> <button className='mtn__btn mtn__yellow mtn__btnIcons' type='button' onClick={nextHandler}>Next <BsChevronRight className='mtn__btnIconsL' /></button></div>
                        </div>
                    </>
                    {/* End of Form 1 */}

                </div>


            </div>

        </div>
    )
}

export default VendorRisk