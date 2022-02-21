import * as React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import { Header, Input, Navigation, Select, DateInput, OptionHelpers, Textarea, } from '../../containers'
import { BsChevronLeft, BsChevronRight, BsX } from "react-icons/bs";

const RiskSurvey = ({ history }) => {

    // User Data from Storage
    const data = JSON.parse(localStorage.getItem("data"))


    const [initiator, setInitiator] = useState(data.DisplayName)
    const [email, setEmail] = useState(data.Email)
    const [date, setDate] = useState(new Date().toJSON().slice(0, 10))
    const [surveyType, setSurveyType] = useState("")
    const [riskLocation, setRiskLocation] = useState("")
    const [riskElement, setRiskElement] = useState("")
    const [description, setDescription] = useState("")
    const [dateRecommended, setDateRecommended] = useState("")
    const [status, setStatus] = useState("")
    const [dateClosed, setDateClosed] = useState("")
    const [assignee, setAssignee] = useState("")
    const [assigneesEmail, setAssigneesEmail] = useState("")
    const [assigneeUnit, setAssigneeUnit] = useState("")
    const [unitGroupEmail, setUnitGroupEmail] = useState("")


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
                <Header title="Risk Survey" />
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
                            <Select onChange={(e) => setSurveyType(e.target.value)} value={surveyType} title="Survey Type" options={OptionHelpers.surveyType} />
                            <Input onChange={(e) => setRiskLocation(e.target.value)} value={riskLocation} title="Risk Location" type="text" />
                            <Input onChange={(e) => setRiskElement(e.target.value)} value={riskElement} title="Risk Element" type="text" />
                            <Textarea title="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)} />

                            <DateInput
                                title="Date Recommended"
                                value={dateRecommended}
                                onChange={(e) => setDateRecommended(e.target.value)}
                                type="text"
                            />

                            <DateInput
                                title="Date Closed"
                                value={dateClosed}
                                onChange={(e) => setDateClosed(e.target.value)}
                                type="text"
                            />
                            <Select onChange={(e) => setStatus(e.target.value)} value={status} title="Status" options={OptionHelpers.surveyStatus} />
                            <Input onChange={(e) => setAssignee(e.target.value)} value={assignee} title="Assignee" type="text" />
                            <Input onChange={(e) => setAssigneesEmail(e.target.value)} value={assigneesEmail} title="Assignee's Email" type="text" />


                            <Input onChange={(e) => setAssigneeUnit(e.target.value)} value={assigneeUnit} title="Assignee’s Unit/Team" type="text" />
                            <Input onChange={(e) => setUnitGroupEmail(e.target.value)} value={unitGroupEmail} title="Unit/Team’s Group Email" type="text" />




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

export default RiskSurvey