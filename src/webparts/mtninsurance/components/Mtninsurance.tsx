import * as React from 'react';
import styles from './Mtninsurance.module.scss';
import { IMtninsuranceProps } from './IMtninsuranceProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Route, Switch, HashRouter } from 'react-router-dom';
import * as jQuery from 'jquery';
import { Input,NextBtn, PrevBtn, Select, SideBar, Slider } from './container';
import { ClaimOne} from './screens';
import ClaimPageThree from './screens/Claim/claimPagethree'
import ClaimPageTwo from './screens/Claim/claimPageTwo';
import NewClaimBulk from './screens/NewClaimBulk/NewClaimBulk';
import ClaimPageFour from './screens/Claim/claimPageFour';
import NewClaimBulkTwo from './screens/NewClaimBulk/NewClaimBulkTwo';
import NewClaimBulkThree from './screens/NewClaimBulk/NewClaimBulkThree';
import NewPolicy from './screens/NewPolicy/Newpolicy';
import NewPolicyTwo from './screens/NewPolicy/NewPolicyTwo';
import BrokerPageOne from './screens/broker/brokerpageone';



// create button React.Component
// create side bar React.Component
// create carousel React.Component
// create input componenet
// create drop down component
// progressive bar component

export default class Mtninsurance extends React.Component<IMtninsuranceProps, {}> {
  public render(): React.ReactElement<IMtninsuranceProps> {
    jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");
    return (
      <>
        {/* <h3>Welcome to MTN INSURANCE APP</h3> */}
        <HashRouter>
          <Switch>
            {/* <Route path="/" exact component="" /> */}
            <Route path="/claimone" exact component={ClaimOne} />
            <Route path="/claimpagetwo" exact component={ClaimPageTwo} />
            <Route path="/claimpagethree" exact component={ClaimPageThree} />
            <Route path="/claimpagefour" exact component={ClaimPageFour} />
            <Route path="/newclaimpageone" exact component={NewClaimBulk} />
            <Route path="/newclaimpagetwo" exact component={NewClaimBulkTwo} />
            <Route path="/newclaimpagethree" exact component={NewClaimBulkThree} />
            <Route path="/newpolicypageone" exact component={NewPolicy} />
            <Route path="/newpolicypagetwo" exact component={NewPolicyTwo} />
            <Route path="/newclaimbulkone" exact component={NewClaimBulk} />
            <Route path="/newclaimbulktwo" exact component={NewClaimBulkTwo} />
            <Route path="/newclaimbulkthree" exact component={NewClaimBulkThree} />
            <Route path="/brokerpageone" exact component={BrokerPageOne} />
          </Switch>
        </HashRouter>
      </>
    );
  }
}
