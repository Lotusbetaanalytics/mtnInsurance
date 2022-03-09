import * as React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import { Header, Input, Navigation, Select, DateInput, OptionHelpers, Textarea, } from '../../containers'
import { BsChevronLeft, BsFillCheckCircleFill, BsX } from "react-icons/bs";
import { default as pnp, ItemAddResult } from "sp-pnp-js";
import swal from 'sweetalert'

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
        history.push("/dashboard")
    }

    const nextHandler = () => {
        try {
            pnp.sp.web.lists.getByTitle("Broker Form Description").items.add({

                Title: initiator,
                Initiator: initiator,
                Email: email,
                Date: date,
                Task: task,
                DateAssigned: dateAssigned,
                ResponsibleStakeholder: responsibleStakeholderEmail,
                Expected_Closure: expectedClosureDate,
                Actual_Closure: actualClosureDate,



            }).then((iar: ItemAddResult) => {
                swal("Success", "Success", "success");
                setTimeout(function () {
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
                            <div> <button className='mtn__btn mtn__black' type='button' onClick={prevHandler}><BsX className='mtn__btnIconsR' />Cancel </button></div>
                            <div> <button className='mtn__btn mtn__yellow' type='button' onClick={nextHandler}>Submit <BsFillCheckCircleFill className='mtn__btnIconsL' /></button></div>
                        </div>
                    </>
                    {/* End of Form 1 */}

                </div>


            </div>

        </div>
    )
}

export default Broker