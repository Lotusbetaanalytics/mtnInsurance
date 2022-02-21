import * as React from 'react';
import { useState } from 'react';
import styles from './styles.module.scss'

import { Link } from 'react-router-dom';
import {
    BsShop,
    BsCloudUploadFill,
    BsFileEarmarkBinary,
    BsCollection,
    BsFileCheckFill,
    BsAwardFill,
    BsFileEarmarkMedical,
    BsFileCodeFill,
    BsReplyAllFill
} from "react-icons/bs";



const Navigation = () => {
    const [toggle, setToggle] = useState(false)


    return <div className={styles.mtn__navigation}>
        <div className={styles.mtn__logo}>
            <img src={require("../../assets/logo.png")} alt="Logo" />
            <h1>Y'ello</h1>
        </div>
        <div className={styles.mtn__links}>
            <ul>
                <li><Link to={`/dashboard`}><BsShop />Dashboard</Link></li>
                {toggle ? (
                    <li onClick={() => setToggle(false)}>
                        <span>
                            <BsCollection />
                            New Claim
                        </span>
                    </li>
                ) : (
                    <li onClick={() => setToggle(true)}>
                        <span>
                            <BsCollection />
                            New Claim
                        </span>
                    </li>

                )}
                <div className={toggle ? styles.mtn__show : styles.mtn__hide}>
                    <ul>
                        <li><Link to={`/newclaim`}><BsFileEarmarkBinary />Claim Entry</Link></li>
                        <li><Link to={`/newclaim/bulk`}><BsCloudUploadFill />Bulk Entry</Link></li>
                    </ul>
                </div>



                <li><Link to={`/newpolicy`}><BsFileCheckFill />New Policy</Link></li>
                <li><Link to={`/newvendor`}><BsAwardFill />New Vendor</Link></li>
                <li><Link to={`/risksurvey`}><BsFileEarmarkMedical />Risk Survey</Link></li>
                <li><Link to={`/broker`}><BsFileCodeFill />External Stakeholders</Link></li>
                <li><Link to={`/`}><BsReplyAllFill />Logout</Link></li>



            </ul>
        </div>
    </div>;
};

export default Navigation;
