import *as React from 'react'
import { Input, NextBtn, PrevBtn, SideBar, Slider } from '../../container'
import { useHistory } from 'react-router-dom'
import styles from "../Claim/claim.module.scss"

  const BrokerPageOne = () => {
  const history = useHistory()
  const [initiator,setInitiator] = React.useState("")
  const [email,setEmail] = React.useState("")
  const [date,setDate] = React.useState("")
  const [task,setTask] = React.useState("")
  const [dateAssigned,setDateAssigned] = React.useState("")
  const [stakeholderEmail,setStakeholderEmail] = React.useState("")
  const [expectedClosureDate,setExpectedClosureDate] = React.useState("")
  const [actualClosureDate,setActualClosureDate] = React.useState("")
  
  const cancelHandler = () => {
     
}

const nextHandler = () => {
  history.push("/claimpagetwo")
}
  return (
    <div className={styles.container}>
        <SideBar/>
        <div className={styles.right}>
            <div className={styles.title}>External Stackholder - Broker</div>
            <Slider size={0} />
            <div className={styles.containerForm}>
              <div className={styles.formContainer}>
                <Input
                 type= "text"
                 placeholder="initiator"
                 onChange={(e) => setInitiator(e.target.value)}
                 value={initiator} />
              </div>
              <div className={styles.formContainer}>
                <Input
                 type= "text"
                 placeholder="Email"
                 onChange={(e) => setEmail(e.target.value)}
                 value={email} />
              </div>
              <div className={styles.formContainer}>
                <Input
                 type= "text"
                 placeholder="Date(AutoPopulate)"
                 onChange={(e) => setDate(e.target.value)}
                 value={date} />
              </div>
              <div className={styles.formContainer}>
                <Input
                 type= "text"
                 placeholder="Task/Request"
                 onChange={(e) => setTask(e.target.value)}
                 value={task} />
              </div>
              <div className={styles.formContainer}>
                <Input
                 type= "date"
                 placeholder="Date Assigned"
                 onChange={(e) => setDateAssigned(e.target.value)}
                 value={dateAssigned} />
              </div>
              <div className={styles.formContainer}>
                <Input
                 type= "email"
                 placeholder="Respondible Stakeholder Email"
                 onChange={(e) => setStakeholderEmail(e.target.value)}
                 value={stakeholderEmail} />
              </div>
              <div className={styles.formContainer}>
                <Input
                 type= "date"
                 placeholder="Expected Closure Date"
                 onChange={(e) => setExpectedClosureDate(e.target.value)}
                 value={expectedClosureDate} />
              </div>
              <div className={styles.formContainer}>
                <Input
                 type= "date"
                 placeholder="Actual Closure Date"
                 onChange={(e) => setActualClosureDate(e.target.value)}
                 value={actualClosureDate} />
              </div>
            </div>
            <div className={styles.btnContainer}>
                <PrevBtn buttonName="Cancel" handler={cancelHandler}/> <NextBtn buttonName="Next" handler={nextHandler}/>
              </div>
        </div>
    </div>
  );
}

export default BrokerPageOne