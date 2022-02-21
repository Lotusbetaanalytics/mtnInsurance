import * as React from 'react'
import styles from './styles.module.scss'
import { Link } from "react-router-dom"
import { Header, Navigation, Card } from '../../containers'
import {
    BsCloudUploadFill,
    BsFileEarmarkBinary,
    BsCollection,
    BsFileCheckFill,
    BsAwardFill,
    BsFileEarmarkMedical,
    BsFileCodeFill,
} from "react-icons/bs";


const HomeScreen = () => {
    return (
        <div className="appContainer">
            <Navigation />
            <div className="contentsRight">
                <Header title="Dashboard" />
                <div className='cardContainer'>
                    <Card
                        title="Claim"
                        count="10"
                        Icon={BsCollection}
                        color={styles.yellow}
                        url="/newClaim"
                    />
                    <Card
                        title="Policy"
                        count="10"
                        Icon={BsFileCheckFill}
                        color={styles.yellow}
                        url="/newClaim"
                    />
                    <Card
                        title="Vendor"
                        count="10"
                        Icon={BsAwardFill}
                        color={styles.yellow}
                        url="/newClaim"
                    />
                    <Card
                        title="Risk Survey"
                        count="10"
                        Icon={BsFileEarmarkMedical}
                        color={styles.yellow}
                        url="/newClaim"
                    />
                    <Card
                        title="External Stakeholders"
                        count="10"
                        Icon={BsFileCodeFill}
                        color={styles.yellow}
                        url="/newClaim"
                    />
                </div>

            </div>

        </div>
    )
}

export default HomeScreen