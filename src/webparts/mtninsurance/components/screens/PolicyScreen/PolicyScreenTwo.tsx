import * as React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import { Header, Input, Navigation, Slider, Textarea } from '../../containers'
import { BsChevronLeft, BsFillCheckCircleFill } from "react-icons/bs";
import { default as pnp, ItemAddResult } from "sp-pnp-js";
import swal from 'sweetalert'

const PolicyScreenTwo = ({ history }) => {

    // User Data from Storage
    const data = JSON.parse(localStorage.getItem("data"))
    const formData = JSON.parse(localStorage.getItem("policyData"))


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

        try {
            pnp.sp.web.lists.getByTitle("Policy Entry").items.add({

                Title: formData.initiator,
                Initiator: formData.initiator,
                Email: formData.email,
                Date: formData.date,
                Insured: formData.insured,
                PolicyNumber: formData.policyNumber,
                PolicyName: formData.policyName,
                PolicyDescription: formData.policyDescription,
                PolicyType: formData.policyType,
                Policy_Start_Date: formData.policyStartDate,
                Policy_End_Date: formData.policyExpiryDate,
                Currency: formData.currency,
                CurrencyConversionRate: currencyConversionRate,
                SumInsured: sumInsured,
                SumInsuredNGN: sumInsuredNGN,
                Deductible: deductible,
                Premium: premium,
                PremiumNGN: premiumNGN,
                Remarks: remarks,

            }).then((iar: ItemAddResult) => {
                swal("Success", "Success", "success");
                setTimeout(function () {
                    localStorage.removeItem("policyData")
                    localStorage.removeItem("formData")
                    history.push(`/dashboard`);

                }, 2000);
            }).catch((e) => {
                swal("Warning!", "An Error Occured", "error");
                console.error(e.message);
            });

        } catch (e) {
            swal("Warning!", e, "error");
            console.error(e);
        }
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
                            <div> <button className='mtn__btn mtn__black mtn__btnIcons' type='button' onClick={prevHandler}><BsChevronLeft className='mtn__btnIconsR' />Previous</button></div>
                            <div> <button className='mtn__btn mtn__yellow mtn__btnIcons' type='button' onClick={nextHandler}>Submit <BsFillCheckCircleFill className='mtn__btnIconsL' /></button></div>
                        </div>
                    </>
                    {/* End of Form 1 */}

                </div>


            </div>

        </div>
    )
}

export default PolicyScreenTwo