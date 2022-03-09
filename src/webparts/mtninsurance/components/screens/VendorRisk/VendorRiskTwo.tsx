import * as React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import { Header, Input, Navigation, Slider, Select, DateInput, OptionHelpers, Textarea, } from '../../containers'
import { BsChevronLeft, BsFillCheckCircleFill, BsX } from "react-icons/bs";
import { default as pnp, ItemAddResult } from "sp-pnp-js";
import swal from 'sweetalert'

const VendorRiskTwo = ({ history }) => {

    // User Data from Storage
    const data = JSON.parse(localStorage.getItem("data"))
    const formData = JSON.parse(localStorage.getItem("vendorData"))

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

        try {
            pnp.sp.web.lists.getByTitle("Vendor Form Description").items.add({

                Title: formData.initiator,
                Initiator: formData.initiator,
                Email: formData.email,
                Date: formData.date,
                Vendor: formData.vendor,
                ContractTitle: formData.contractTitle,
                Contract_Start_Date: formData.contractStartDate,
                Contract_End_Date: formData.contractEndDate,
                Contract_Received_Date: formData.dateContractReceived,
                Date_Recommendation_Advised: formData.dateRecommendationAdvised,
                InsurancePolicies: formData.insurancePolicies,
                SumInsured: formData.sumInsured,
                Status: formData.status,
                Date_Policy_Received: datePolicyReceived,
                DatePolicyValidated: datePolicyValidated,
                InsuranceExpiryDate: insuranceExpiryDate,
                Comments: comments,
                User: user,
                LiaisonPerson: liaisonPerson,


            }).then((iar: ItemAddResult) => {
                swal("Success", "Success", "success");
                setTimeout(function () {
                    localStorage.removeItem("vendorData")
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

export default VendorRiskTwo