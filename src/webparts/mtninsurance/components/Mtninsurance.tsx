import * as React from "react";
import { IMtninsuranceProps } from "./IMtninsuranceProps";
// import {IMyModalPopupProps} from "./IMyModalPopupProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { Route, Switch, HashRouter } from "react-router-dom";
import * as jQuery from "jquery";
import FlowScreen1 from "./RiskSurvey/FlowScreen1";
import FlowScreen2 from "./RiskSurvey/FlowScreen2";
import styles from "./Mtninsurance.module.scss";
import { Input, NextBtn, PrevBtn, Select, SideBar, Slider } from "./container";
import { ClaimOne } from "./screens";
import ClaimPageThree from "./screens/Claim/claimPagethree";
import ClaimPageTwo from "./screens/Claim/claimPageTwo";
import NewClaimBulk from "./screens/NewClaimBulk/NewClaimBulk";
import ClaimPageFour from "./screens/Claim/claimPageFour";
import NewClaimBulkTwo from "./screens/NewClaimBulk/NewClaimBulkTwo";
import NewClaimBulkThree from "./screens/NewClaimBulk/NewClaimBulkThree";
import NewPolicy from "./screens/NewPolicy/Newpolicy";
import NewPolicyTwo from "./screens/NewPolicy/NewPolicyTwo";
import BrokerPageOne from "./screens/broker/brokerpageone";
import FlowScreen3 from "./RiskSurvey/FlowScreen3";
import VendorBulkRisk1 from "./NewVendorRisk/VendorBulkRisk1";
import VendorBulkRisk2 from "./NewVendorRisk/VendorBulkRisk2";
import BulkRiskScreen from "./BulkRiskVendor/BulkRiskScreen";
import BulkRiskScreen2 from "./BulkRiskVendor/BuklRiskScreen2";
import BulkRiskScreen3 from "./BulkRiskVendor/BulkRiskScreen3";
import { MYModal } from "./SuccessModal/MYModal";
import Carousel1 from "./Carousel1";

// create button React.Component
// create side bar React.Component
// create carousel React.Component
// create input componenet
// create drop down component
// progressive bar component

export default class Mtninsurance extends React.Component<
  IMtninsuranceProps,
  {}
> {
  public render(): React.ReactElement<IMtninsuranceProps> {
    jQuery("#workbenchPageContent").prop("style", "max-width: none");
    jQuery(".SPCanvas-canvas").prop("style", "max-width: none");
    jQuery(".CanvasZone").prop("style", "max-width: none");
    return (
      <>
        {/* <h3>Welcome to MTN INSURANCE APP</h3> */}
        <HashRouter>
          <Switch>
            <Route path="/" exact component="" />
            <Route path="/landingPage" exact component={Carousel1} />
            <Route
              path="/risksurvey/flowscreen1"
              exact
              component={FlowScreen1}
            />

            <Route
              path="/risksurvey/flowscreen2"
              exact
              component={FlowScreen2}
            />
            <Route path="/successmodal" exact component={MYModal} />
            <Route
              path="/risksurvey/flowscreen3"
              exact
              component={FlowScreen3}
            />

            <Route
              path="/vendorbulkrisk/role1"
              exact
              component={VendorBulkRisk1}
            />

            <Route
              path="/vendorbulkrisk/role2"
              exact
              component={VendorBulkRisk2}
            />

            <Route path="/bulkriskscreen" exact component={BulkRiskScreen} />
            <Route path="/bulkriskscreen2" exact component={BulkRiskScreen2} />
            <Route path="/bulkriskscreen3" exact component={BulkRiskScreen3} />
            {/* <Route path="/" exact component="" /> */}
            <Route path="/claimone" exact component={ClaimOne} />
            <Route path="/claimpagetwo" exact component={ClaimPageTwo} />
            <Route path="/claimpagethree" exact component={ClaimPageThree} />
            <Route path="/claimpagefour" exact component={ClaimPageFour} />
            <Route path="/newclaimpageone" exact component={NewClaimBulk} />
            <Route path="/newclaimpagetwo" exact component={NewClaimBulkTwo} />
            <Route
              path="/newclaimpagethree"
              exact
              component={NewClaimBulkThree}
            />
            <Route path="/newpolicypageone" exact component={NewPolicy} />
            <Route path="/newpolicypagetwo" exact component={NewPolicyTwo} />
            <Route path="/newclaimbulkone" exact component={NewClaimBulk} />
            <Route path="/newclaimbulktwo" exact component={NewClaimBulkTwo} />
            <Route
              path="/newclaimbulkthree"
              exact
              component={NewClaimBulkThree}
            />
            <Route path="/brokerpageone" exact component={BrokerPageOne} />
          </Switch>
        </HashRouter>
      </>
    );
  }
}
