import * as React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import { Header, Input, Navigation, Slider, Select, DateInput, OptionHelpers, Textarea, Radio } from '../../containers'
import { BsChevronLeft, BsFillCheckCircleFill, BsX } from "react-icons/bs";
import { default as pnp, ItemAddResult } from "sp-pnp-js";
import swal from 'sweetalert'

const ClaimScreenThree = ({ history }) => {

    // User Data from Storage
    const data = JSON.parse(localStorage.getItem("data"))
    const formData = JSON.parse(localStorage.getItem("formData"))

    const [workingDays, setWorkingDays] = useState("")
    const [policeReport, setPoliceReport] = useState("")
    const [dateofVoucherDischargeExecution, setDateofVoucherDischargeExecution] = useState("")
    const [responsibleStakeholder, setResponsibleStakeholder] = useState("")
    const [dateoffullSettlement, setDateoffullSettlement] = useState("")
    const [pictures, setPictures] = useState("")
    const [nWorkingDays, setNWorkingDays] = useState("")
    const [invoice, setInvoice] = useState("")
    const [incidentReport, setIncidentReport] = useState("")
    const [fireServiceReport, setFireServiceReport] = useState("")
    const [courtAffidavit, setCourtAffidavit] = useState("")
    const [region, setRegion] = useState("")
    const [numberofWorkingDaysOutstanding, setNumberofWorkingDaysOutstanding] = useState("")
    const [otherRelevantInformation, setOtherRelevantInformation] = useState("")


    // Button Actions
    const prevHandler = () => {
        history.push("/newclaim/screen/2")
    }

    const nextHandler = () => {

        try {

            // get a list that doesn't exist
            pnp.sp.web.lists.getByTitle("ClaimEntry").items.add({
                Title: formData.initiator,
                InitiatorEmail: formData.email,
                Date: formData.date,
                DateReported: formData.dateReported,
                AssetType: formData.assetType,
                DateOfIncident: formData.incidentDate,
                PolicyNumber: formData.policyNumber,
                DateReportedToInsurer: formData.dateReportedToInsurer,
                PolicyName: formData.policyName,
                IncidentType: formData.incidentType,
                AssetID: formData.assetID,
                EstimatedAmountOfLoss: formData.estimatedAmountLoss,
                Description: formData.descriptionOfLoss,
                Deductible: formData.deductible,
                LiabilityEstimate: formData.liabilityEstimate,
                NetClaimAmount: formData.netClaimAmount,
                FinalAdjustedLiabilityAmount: formData.finalAdjustedLiabilityAmount,
                AmountReceived: formData.amountRecieved,
                AmountOutstanding: formData.amountOutstanding,
                Status: formData.status,
                DateOfFullDocumentation: formData.dateofFullDocumentation,
                DateofSettlementOfferReceipt: formData.dateofSettlementOfferReciept,
                DocumentCompleted: formData.documentCompleted,
                NumberOfWorkingDaysFromFull: formData.workingDays,
                PoliceReport: policeReport,
                DateOfVoucherDischargeExecution: dateofVoucherDischargeExecution,
                ResponsibleStakeholder: responsibleStakeholder,
                DateoffullSettlement: dateoffullSettlement,
                Pictures: pictures,
                NumberOfWorkingDaysFromDischarge: nWorkingDays,
                Invoice: invoice,
                IncidentReport: incidentReport,
                FireServiceReport: fireServiceReport,
                CourtAffidavit: courtAffidavit,
                Region: region,
                NumberOfWorkingDaysOutstanding: numberofWorkingDaysOutstanding,
                OtherRelevantInformation: otherRelevantInformation
            }).then((iar: ItemAddResult) => {
                swal("Success", "Success", "success");
                setTimeout(function () {
                    localStorage.removeItem("formData")
                    history.push(`/dashboard`);

                }, 2000);
            }).catch((e) => {
                swal("Warning!", e, "error");
                console.error(e);
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
                <Header title="New Claim" />
                <Slider size={100} />
                <div className='mtn__formContainer'>
                    {/* Form */}
                    <>

                        <div className='mtn__InputFlex'>
                            <Input
                                title="Number of Working Days from Full Documentation Till Offer Receipt"
                                value={workingDays}
                                onChange={(e) => setWorkingDays(e.target.value)}
                                type="text"
                            />
                            <Select onChange={(e) => setPoliceReport(e.target.value)} value={policeReport} title="Police Report" options={OptionHelpers.report} />
                            <DateInput
                                title="Date of Voucher Discharge Execution"
                                value={dateofVoucherDischargeExecution}
                                onChange={(e) => setDateofVoucherDischargeExecution(e.target.value)}
                                type="text"
                            />
                            <Input
                                title="Responsible Stakeholder"
                                value={responsibleStakeholder}
                                onChange={(e) => setResponsibleStakeholder(e.target.value)}
                                type="text"
                            />
                            <DateInput
                                title="Date of full Settlement"
                                value={dateoffullSettlement}
                                onChange={(e) => setDateoffullSettlement(e.target.value)}
                                type="text"
                            />
                            <Select onChange={(e) => setPictures(e.target.value)} value={pictures} title="Pictures" options={OptionHelpers.report} />
                            <Input
                                title="Number of Working Days from Discharge Voucher Execution Till Full Settlement"
                                value={nWorkingDays}
                                onChange={(e) => setNWorkingDays(e.target.value)}
                                type="text"
                            />
                            <Radio
                                title="Invoice"
                                onChange={(e) => setInvoice(e.target.value)}
                                options={OptionHelpers.Dc}
                            />

                            <Select onChange={(e) => setIncidentReport(e.target.value)} value={incidentReport} title="Incident Report" options={OptionHelpers.report} />
                            <Select onChange={(e) => setFireServiceReport(e.target.value)} value={fireServiceReport} title="Fire Service Report" options={OptionHelpers.report} />
                            <Select onChange={(e) => setCourtAffidavit(e.target.value)} value={courtAffidavit} title="Court Affidavit" options={OptionHelpers.report} />
                            <Select onChange={(e) => setRegion(e.target.value)} value={region} title="Region" options={OptionHelpers.region} />
                            <Input
                                title="Number of Working Days Outstanding"
                                value={numberofWorkingDaysOutstanding}
                                onChange={(e) => setNumberofWorkingDaysOutstanding(e.target.value)}
                                type="text"
                            />
                            <Textarea title="Other Relevant Information"
                                value={otherRelevantInformation}
                                onChange={(e) => setOtherRelevantInformation(e.target.value)} />

                        </div>
                        <div className='mtn__btnContainer'>
                            <div> <button className='mtn__btn mtn__black mtn__btnIcons' type='button' onClick={prevHandler}><BsChevronLeft className='mtn__btnIconsR' /> Previous</button></div>
                            <div> <button className='mtn__btn mtn__yellow mtn__btnIcons' type='button' onClick={nextHandler}>Submit <BsFillCheckCircleFill className='mtn__btnIconsL' /></button></div>
                        </div>
                    </>

                    {/* End of Screen 3 */}

                </div>


            </div>

        </div >
    )
}

export default ClaimScreenThree