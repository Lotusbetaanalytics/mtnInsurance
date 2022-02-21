import * as React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import { Header, Input, Navigation, Select, DateInput, OptionHelpers, FileUpload, } from '../../containers'
import { BiUpload, BiDownload } from "react-icons/bi";
import styles from './styles.module.scss'

const ClaimBulkEntry = ({ history }) => {

    // User Data from Storage
    const data = JSON.parse(localStorage.getItem("data"))


    const [file, setFile] = useState("")



    // Button Actions
    const prevHandler = () => {
        history.push("/")
    }

    const nextHandler = () => {
        history.push("/newclaim/screen/2")
    }


    return (
        <div className="appContainer">
            <Navigation />
            <div className="contentsRight">
                <Header title="New Claim - Bulk Entry" />
                <div className='mtn__formContainer'>

                    {/* Form 1 */}
                    <>
                        <div className={styles.uploadContainer}>
                            <div>


                                <div className='mtn__btnContainer'>
                                    <div> <button className='mtn__btn mtn__black mtn__btnIcons' type='button' onClick={nextHandler}>Download a Bulk default template Here &nbsp; <BiDownload /></button></div>
                                </div>
                            </div>
                            <div className={styles.uploadCircle}>
                                <BiUpload />
                            </div>
                            <FileUpload
                                title="Select File to Upload"
                                onChange={(e) => setFile(e.target.value)} />

                        </div>
                    </>
                    {/* End of Form 1 */}

                </div>


            </div>

        </div>
    )
}

export default ClaimBulkEntry