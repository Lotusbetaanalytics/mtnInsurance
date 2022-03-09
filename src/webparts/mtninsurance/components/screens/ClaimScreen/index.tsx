import * as React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import { Header, Input, Navigation, Slider, Select, DateInput, OptionHelpers, Textarea, Radio } from '../../containers'
import { BsChevronLeft, BsChevronRight, BsX } from "react-icons/bs";
import { default as pnp, ItemAddResult } from "sp-pnp-js";


const ClaimScreen = ({ history }) => {




    // User Data from Storage
    const data = JSON.parse(localStorage.getItem("data"))
    const inputData = JSON.parse(localStorage.getItem("formData"))


    const [initiator, setInitiator] = useState(data ? data.DisplayName : "")
    const [email, setEmail] = useState(data ? data.Email : "")
    const [date, setDate] = useState(new Date().toJSON().slice(0, 10))
    const [dateReported, setDateReported] = useState(inputData ? inputData.dateReported : "")
    const [asset, setAsset] = useState(inputData ? inputData.assetType : "")
    const [otherAssetType, setOtherAssetType] = useState("")
    const [incidentDate, setIncidentDate] = useState(inputData ? inputData.incidentDate : "")
    const [policyNumber, setPolicyNumber] = useState(inputData ? inputData.policyNumber : "")
    const [dateReportedToInsurer, setDateReportedToInsurer] = useState(inputData ? inputData.dateReportedToInsurer : "")
    const [policyName, setPolicyName] = useState(inputData ? inputData.policyName : "")
    const [incidentType, setIncidentType] = useState(inputData ? inputData.incidentType : "")
    const [assetID, setAssetID] = useState(inputData ? inputData.assetID : "")
    const [estimatedAmountLoss, setEstimatedAmountLoss] = useState(inputData ? inputData.estimatedAmountLoss : "")
    const [policies, setPolicies] = useState([])


    // Button Actions
    const prevHandler = () => {
        history.push("/")
    }

    const nextHandler = (e) => {
        e.preventDefault()
        let assetType = ''
        if (asset === "Other Asset") {
            assetType = otherAssetType
        } else {
            assetType = asset
        }
        const formData = { initiator, email, date, dateReported, assetType, incidentDate, policyNumber, dateReportedToInsurer, policyName, incidentType, assetID, estimatedAmountLoss }
        localStorage.setItem("formData", JSON.stringify(formData))
        history.push("/newclaim/screen/2")
    }
    React.useEffect(() => {
        pnp.sp.web.lists.getByTitle(`Policy Entry`).items.get().then
            ((response) => {
                setPolicies(response)

            })
    }, [])

    const policyHandler = (e) => {
        setPolicyNumber(e.target.value)
        const res = policies.filter((x) => x.PolicyNumber === e.target.value)
        setPolicyName(res[0].PolicyName)
    }

    return (
        <div className="appContainer">
            <Navigation />
            <div className="contentsRight">
                <Header title="New Claim" />
                <Slider size={25} />
                <div className='mtn__formContainer'>

                    {/* Form 1 */}
                    <form onSubmit={nextHandler}>
                        <div className='mtn__InputFlex'>
                            <Input
                                title="Initiator"
                                value={initiator}
                                onChange={(e) => setInitiator(e.target.value)}
                                type="text"
                                readOnly={true}
                                required={true}

                            />
                            <Input
                                title="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                readOnly={true}
                                required={true}
                            />
                            <DateInput
                                title="Date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                type="text"
                                readOnly={true}
                                required={true}

                            />
                            <DateInput
                                title="Date Reported"
                                value={dateReported}
                                onChange={(e) => setDateReported(e.target.value)}
                                type="text"
                                required={true}
                            />
                            <Select onChange={(e) => setAsset(e.target.value)} value={asset} title="Asset Type" options={OptionHelpers.AssetType} required={true} />

                            {asset === "Other Asset" && <Input
                                onChange={(e) => setOtherAssetType(e.target.value)} value={otherAssetType} title="Asset Type"
                                type="text"
                            />}
                            <DateInput
                                title="Date of Incident"
                                value={incidentDate}
                                onChange={(e) => setIncidentDate(e.target.value)}
                                type="text"
                                required={true}
                            />
                            <Select onChange={policyHandler} value={policyNumber} title="Policy Number" options={policies} filter={true} filterOption="PolicyNumber" />

                            <Input
                                onChange={(e) => setPolicyName(e.target.value)} value={policyName} title="Policy Name" readOnly={true} required={true} type="text"
                            />
                            <DateInput
                                title="Date Reported to Insurer"
                                value={dateReportedToInsurer}
                                onChange={(e) => setDateReportedToInsurer(e.target.value)}
                                type="text"
                                required={true}
                            />


                            <Select onChange={(e) => setIncidentType(e.target.value)} value={incidentType} title="Incident Type" options={OptionHelpers.IncidentType} />
                            <Input
                                title="Asset ID"
                                value={assetID}
                                onChange={(e) => setAssetID(e.target.value)}
                                type="text"
                                required={true}
                            />
                            <Input
                                title="Estimated Amount of Loss"
                                value={estimatedAmountLoss}
                                onChange={(e) => setEstimatedAmountLoss(e.target.value)}
                                type="text"
                                required={true}
                            />
                        </div>
                        <div className='mtn__btnContainer'>
                            <div> <button className='mtn__btn mtn__black' type='button' onClick={prevHandler}><BsX className='mtn__btnIconsR' />Cancel </button></div>
                            <div> <button className='mtn__btn mtn__yellow' type='submit'>Next <BsChevronRight className='mtn__btnIconsL' /></button></div>
                        </div>
                    </form>
                    {/* End of Form 1 */}

                </div>


            </div>

        </div>
    )
}

export default ClaimScreen