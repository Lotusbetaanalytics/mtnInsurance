import * as React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import { Header, Input, Navigation, Select, DateInput, OptionHelpers, Textarea, } from '../../containers'
import { BsChevronLeft, BsChevronRight, BsX } from "react-icons/bs";

const Broker = ({ history }) => {

    // User Data from Storage
    const data = JSON.parse(localStorage.getItem("data"))


    const [initiator, setInitiator] = useState(data.DisplayName)
    const [email, setEmail] = useState(data.Email)
    const [date, setDate] = useState(new Date().toJSON().slice(0, 10))
    const [task, setTask] = useState("")
    const [dateAssigned, setDateAssigned] = useState("")
    const [responsibleStakeholderEmail, setResponsibleStakeholderEmail] = useState("")
    const [expectedClosureDate, setExpectedClosureDate] = useState("")
    const [actualClosureDate, setActualClosureDate] = useState("")


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
                <Header title="External Stakeholder - Broker" />
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
                            <Input
                                title="Task/Request"
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                                type="text"
                            />
                            <DateInput
                                title="Date Assigned"
                                value={dateAssigned}
                                onChange={(e) => setDateAssigned(e.target.value)}
                                type="text"
                            />
                            <Input
                                title="Responsible Stakeholder Email"
                                value={responsibleStakeholderEmail}
                                onChange={(e) => setResponsibleStakeholderEmail(e.target.value)}
                                type="email"
                            />
                            <DateInput
                                title="Expected Closure Date"
                                value={expectedClosureDate}
                                onChange={(e) => setExpectedClosureDate(e.target.value)}
                                type="text"
                            />
                            <DateInput
                                title="Actual Closure Date"
                                value={actualClosureDate}
                                onChange={(e) => setActualClosureDate(e.target.value)}
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

export default Broker