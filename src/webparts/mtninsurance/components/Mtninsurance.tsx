import * as React from 'react';
import './styles.scss';
import { IMtninsuranceProps } from './IMtninsuranceProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Route, Switch, HashRouter } from 'react-router-dom';
import * as jQuery from 'jquery';
import { Dashboard, HomeScreen, ClaimScreen, ClaimScreenTwo, ClaimScreenThree, ClaimBulkEntry, PolicyScreen, PolicyScreenTwo, VendorRisk, VendorRiskTwo, RiskSurvey, Broker } from '.';
import "@pnp/sp/webs";
import "@pnp/sp/site-users/web";
import * as pnp from 'sp-pnp-js';

export default class Mtninsurance extends React.Component<IMtninsuranceProps, {}> {
  public render(): React.ReactElement<IMtninsuranceProps> {
    jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");
    return (
      <>
        <HashRouter>
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/newclaim" exact component={ClaimScreen} />
            <Route path="/newclaim/screen/2" exact component={ClaimScreenTwo} />
            <Route path="/newclaim/screen/3" exact component={ClaimScreenThree} />
            <Route path="/newclaim/screen/3" exact component={ClaimScreenThree} />
            <Route path="/newclaim/bulk" exact component={ClaimBulkEntry} />
            <Route path="/newpolicy" exact component={PolicyScreen} />
            <Route path="/newpolicy/screen/2" exact component={PolicyScreenTwo} />
            <Route path="/newvendor" exact component={VendorRisk} />
            <Route path="/newvendor/screen/2" exact component={VendorRiskTwo} />
            <Route path="/risksurvey" exact component={RiskSurvey} />
            <Route path="/broker" exact component={Broker} />

          </Switch>
        </HashRouter>
      </>
    );
  }


  public componentDidMount() {
    this._userProfile();


  }
  private _userProfile(): void {
    pnp.sp.profiles.myProperties.get()
      .then((response) => {
        console.log(response)
        // this.setState({ Name: response.DisplayName, Email: response.Email, DP: response.PictureUrl });
        localStorage.setItem('data', JSON.stringify(response));
        // localStorage.setItem('Email', response.Email);
      });



  }
}