import * as React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import { Header, Input, Navigation, Slider, Select, DateInput, OptionHelpers, Textarea, Radio } from '../../containers'
import { BsChevronLeft, BsChevronRight, BsX } from "react-icons/bs";

const ClaimScreen = ({ history }) => {

    // User Data from Storage
    const data = JSON.parse(localStorage.getItem("data"))


    const [initiator, setInitiator] = useState(data.DisplayName)
    const [email, setEmail] = useState(data.Email)
    const [date, setDate] = useState(new Date().toJSON().slice(0, 10))
    const [dateReported, setDateReported] = useState("")
    const [assetType, setAssetType] = useState("")
    const [otherAssetType, setOtherAssetType] = useState("")
    const [incidentDate, setIncidentDate] = useState("")
    const [policyNumber, setPolicyNumber] = useState("")
    const [dateReportedToInsuer, setDateReportedToInsuer] = useState("")
    const [policyName, setPolicyName] = useState("")
    const [incidentType, setIncidentType] = useState("")
    const [assetID, setAssetID] = useState("")
    const [estimatedAmountLoss, setEstimatedAmountLoss] = useState("")


    // Button Actions
    const prevHandler = () => {
        history.push("/")
    }

    const nextHandler = () => {
        history.push("/newclaim/screen/2")
    }


    return (
        <div className="appContainer">
            <Navigation />
            <div className="contentsRight">
                <Header title="New Claim" />
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
                                title="Date Reported"
                                value={dateReported}
                                onChange={(e) => setDateReported(e.target.value)}
                                type="text"
                            />
                            <Select onChange={(e) => setAssetType(e.target.value)} value={assetType} title="Asset Type" options={OptionHelpers.AssetType} />

                            {assetType === "Other Asset" && <Input
                                onChange={(e) => setOtherAssetType(e.target.value)} value={otherAssetType} title="Asset Type"
                                type="text"
                            />}
                            <DateInput
                                title="Date of Incident"
                                value={incidentDate}
                                onChange={(e) => setIncidentDate(e.target.value)}
                                type="text"
                            />
                            <Select onChange={(e) => setPolicyNumber(e.target.value)} value={policyNumber} title="Policy Number" options={[]} />
                            <DateInput
                                title="Date Reported to Insurer"
                                value={dateReportedToInsuer}
                                onChange={(e) => setDateReportedToInsuer(e.target.value)}
                                type="text"
                            />
                            <Select onChange={(e) => setPolicyName(e.target.value)} value={policyName} title="Policy Name" options={[]} />

                            <Select onChange={(e) => setIncidentType(e.target.value)} value={incidentType} title="Incident Type" options={OptionHelpers.IncidentType} />
                            <Input
                                title="Asset ID"
                                value={assetID}
                                onChange={(e) => setAssetID(e.target.value)}
                                type="text"
                            />
                            <Input
                                title="Estimated Amount of Loss"
                                value={estimatedAmountLoss}
                                onChange={(e) => setEstimatedAmountLoss(e.target.value)}
                                type="text"
                            />
                        </div>
                        <div className='mtn__btnContainer'>
                            <div> <button className='mtn__btn mtn__black mtn__btnIcons' type='button' onClick={prevHandler}>Cancel <BsX /></button></div>
                            <div> <button className='mtn__btn mtn__yellow mtn__btnIcons' type='button' onClick={nextHandler}>Next <BsChevronRight /></button></div>
                        </div>
                    </>
                    {/* End of Form 1 */}

                </div>


            </div>

        </div>
    )
}

export default ClaimScreen