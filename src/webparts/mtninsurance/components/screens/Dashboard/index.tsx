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
import { default as pnp } from "sp-pnp-js";

const HomeScreen = () => {

    const [claimEntry, setClaimEntry] = React.useState(0)
    const [policy, setPolicy] = React.useState(0)
    const [vendor, setVendor] = React.useState(0)
    const [risk, setRisk] = React.useState(0)
    const [external, setExternal] = React.useState(0)

    React.useEffect(() => {
        pnp.sp.web.lists.getByTitle(`ClaimEntry`).items.get().then
            ((response) => {
                setClaimEntry(response.length)
            })
        pnp.sp.web.lists.getByTitle(`Policy Entry`).items.get().then
            ((response) => {
                setPolicy(response.length)
            })
        pnp.sp.web.lists.getByTitle(`Vendor Form Description`).items.get().then
            ((response) => {
                setVendor(response.length)
            })
        pnp.sp.web.lists.getByTitle(`Risk Survey Form Description`).items.get().then
            ((response) => {
                setRisk(response.length)
            })
        pnp.sp.web.lists.getByTitle(`Broker Form Description`).items.get().then
            ((response) => {
                setExternal(response.length)
            })
    }, [])
    return (
        <div className="appContainer">
            <Navigation />
            <div className="contentsRight">
                <Header title="Dashboard" />
                <div className='cardContainer'>
                    <Card
                        title="Claim"
                        count={claimEntry}
                        Icon={BsCollection}
                        url="/newClaim"
                    />
                    <Card
                        title="Policy"
                        count={policy}
                        Icon={BsFileCheckFill}
                        url="/newClaim"
                    />
                    <Card
                        title="Vendor"
                        count={vendor}
                        Icon={BsAwardFill}

                        url="/newClaim"
                    />
                    <Card
                        title="Risk Survey"
                        count={risk}
                        Icon={BsFileEarmarkMedical}
                        url="/newClaim"
                    />
                    <Card
                        title="External Stakeholders"
                        count={external}
                        Icon={BsFileCodeFill}
                        url="/newClaim"
                    />
                </div>

            </div>

        </div>
    )
}

export default HomeScreen