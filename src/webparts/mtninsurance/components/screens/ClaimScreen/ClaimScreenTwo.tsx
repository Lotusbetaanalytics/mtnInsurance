import * as React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import { Header, Input, Navigation, Slider, Select, DateInput, OptionHelpers, Textarea, Radio } from '../../containers'
import { BsChevronLeft, BsChevronRight, BsX } from "react-icons/bs";

const ClaimScreenTwo = ({ history }) => {

    // User Data from Storage
    const data = JSON.parse(localStorage.getItem("data"))

    const [descriptionOfLoss, setDescriptionOfLoss] = useState("")
    const [deductible, setDeductible] = useState("")
    const [liabilityEstimate, setLiabilityEstimate] = useState("")
    const [netClaimAmount, setNetClaimAmount] = useState("")
    const [finalAdjustedLiabilityAmount, setFinalAdjustedLiabilityAmount] = useState("")
    const [amountRecieved, setAmountRecieved] = useState("")
    const [amountOutstanding, setAmountOutstanding] = useState("")
    const [status, setStatus] = useState("")
    const [dateofFullDocumentation, setDateofFullDocumentation] = useState("")
    const [dateofSettlementOfferReciept, setDateofSettlementOfferReciept] = useState("")
    const [documentCompleted, setDocumentCompleted] = useState("")


    // Button Actions
    const prevHandler = () => {
        history.push("/newclaim")
    }

    const nextHandler = () => {
        history.push("/newclaim/screen/3")
    }


    return (
        <div className="appContainer">
            <Navigation />
            <div className="contentsRight">
                <Header title="New Claim" />
                <Slider size={50} />
                <div className='mtn__formContainer'>

                    {/* Form */}
                    <>
                        <div className='mtn__InputFlex'>
                            <Textarea title="Description Of Loss"
                                value={descriptionOfLoss}
                                onChange={(e) => setDescriptionOfLoss(e.target.value)} />

                            <Input
                                title="Deductible"
                                value={deductible}
                                onChange={(e) => setDeductible(e.target.value)}
                                type="text"


                            />
                            <Input
                                title="Liability Estimate"
                                value={liabilityEstimate}
                                onChange={(e) => setLiabilityEstimate(e.target.value)}
                                type="text"
                            />
                            <Input
                                title="Net Claim Amount"
                                value={netClaimAmount}
                                onChange={(e) => setNetClaimAmount(e.target.value)}
                                type="text"
                            />
                            <Input
                                title="Final Adjusted Liability Amount"
                                value={finalAdjustedLiabilityAmount}
                                onChange={(e) => setFinalAdjustedLiabilityAmount(e.target.value)}
                                type="text"
                            />
                            <Input
                                title="Amount Recieved"
                                value={amountRecieved}
                                onChange={(e) => setAmountRecieved(e.target.value)}
                                type="text"
                            />
                            <Input
                                title="Amount Outstanding"
                                value={amountOutstanding}
                                onChange={(e) => setAmountOutstanding(e.target.value)}
                                type="text"
                            />
                            <Select onChange={(e) => setStatus(e.target.value)} value={status} title="Status" options={OptionHelpers.Status} />
                            <Radio
                                title="Document completed"
                                onChange={(e) => setDocumentCompleted(e.target.value)}
                                options={OptionHelpers.Dc}
                            />

                            <DateInput
                                title="Date of Full Documentation"
                                value={dateofFullDocumentation}
                                onChange={(e) => setDateofFullDocumentation(e.target.value)}
                                type="text"
                            />
                            <DateInput
                                title="Date of Settlement Offer Reciept"
                                value={dateofSettlementOfferReciept}
                                onChange={(e) => setDateofSettlementOfferReciept(e.target.value)}
                                type="text"
                            />


                        </div>
                        <div className='mtn__btnContainer'>
                            <div> <button className='mtn__btn mtn__black mtn__btnIcons' type='button' onClick={prevHandler}>Previous <BsChevronLeft /></button></div>
                            <div> <button className='mtn__btn mtn__yellow mtn__btnIcons' type='button' onClick={nextHandler}>Next <BsChevronRight /></button></div>
                        </div>
                    </>

                    {/* End of Form */}


                </div>


            </div>

        </div >
    )
}

export default ClaimScreenTwo