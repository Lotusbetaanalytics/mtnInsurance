import * as React from 'react';
import styles from './Mtninsurance.module.scss';
import { IMtninsuranceProps } from './IMtninsuranceProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Route, Switch, HashRouter } from 'react-router-dom';
import * as jQuery from 'jquery';

export default class Mtninsurance extends React.Component<IMtninsuranceProps, {}> {
  public render(): React.ReactElement<IMtninsuranceProps> {
    jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");
    return (
      <>
        <h3>Welcome to MTN INSURANCE APP</h3>
        {/* <HashRouter>
          <Switch>
            <Route path="/" exact component="" />
  
          </Switch>
        </HashRouter> */}
      </>
    );
  }
}
