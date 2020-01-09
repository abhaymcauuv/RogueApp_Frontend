import React,{Component} from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Homescreen from "./home";
import DashboardScreen from "./dashboard";
import CommissionsScreen from "./Commissions/commissions";
import RankScreen from "./Commissions/rank";
import VolumesScreen from "./Commissions/volumes";

export default class Root extends Component { 
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Homescreen} />
          <Route exact path="/dashboard" component={DashboardScreen} />
          <Route exact path="/commissions" component={CommissionsScreen} />
          <Route exact path="/rank" component={RankScreen} />
          <Route exact path="/volumes" component={VolumesScreen} />          
        </div>
      </HashRouter>
    );
  }
}
