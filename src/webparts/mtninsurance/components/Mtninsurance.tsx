import * as React from "react";
import { IMtninsuranceProps } from "./IMtninsuranceProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { Route, Switch, HashRouter } from "react-router-dom";
import * as jQuery from "jquery";
import FlowScreen1 from "./RiskSurvey/FlowScreen1";
import FlowScreen2 from "./RiskSurvey/FlowScreen2";

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
          </Switch>
        </HashRouter>
      </>
    );
  }
}
