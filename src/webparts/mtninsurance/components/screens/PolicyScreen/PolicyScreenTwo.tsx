import * as React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import { Header, Input, Navigation, Slider, Textarea } from '../../containers'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const PolicyScreenTwo = ({ history }) => {

    // User Data from Storage
    const data = JSON.parse(localStorage.getItem("data"))


    const [currencyConversionRate, setCurrencyConversionRate] = useState("")
    const [sumInsured, setSumInsured] = useState("")
    const [sumInsuredNGN, setSumInsuredNGN] = useState("")
    const [deductible, setDeductible] = useState("")
    const [premium, setPremium] = useState("")
    const [premiumNGN, setPremiumNGN] = useState("")
    const [remarks, setRemarks] = useState("")



    // Button Actions
    const prevHandler = () => {
        history.push("/")
    }

    const nextHandler = () => {
        history.push("/newpolicy/screen/2")
    }


    return (
        <div className="appContainer">
            <Navigation />
            <div className="contentsRight">
                <Header title="New Policy" />
                <Slider size={100} />
                <div className='mtn__formContainer'>

                    {/* Form 1 */}
                    <>
                        <div className='mtn__InputFlex'>
                            <Input
                                title="Currency Conversion Rate"
                                value={currencyConversionRate}
                                onChange={(e) => setCurrencyConversionRate(e.target.value)}
                                type="text"
                            />
                            <Input
                                title="Sum Insured"
                                value={sumInsured}
                                onChange={(e) => setSumInsured(e.target.value)}
                                type="text"
                            />

                            <Input
                                title="Sum Insured (NGN)"
                                value={sumInsuredNGN}
                                onChange={(e) => setSumInsuredNGN(e.target.value)}
                                type="text"
                            />
                            <Input
                                title="Deductible"
                                value={deductible}
                                onChange={(e) => setDeductible(e.target.value)}
                                type="text"
                            />
                            <Input
                                title="Premium"
                                value={premium}
                                onChange={(e) => setPremium(e.target.value)}
                                type="text"
                            />
                            <Input
                                title="Premium (NGN)"
                                value={premiumNGN}
                                onChange={(e) => setPremiumNGN(e.target.value)}
                                type="text"
                            />
                            <Textarea title="Remarks"
                                value={remarks}
                                onChange={(e) => setRemarks(e.target.value)} />
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

export default PolicyScreenTwo