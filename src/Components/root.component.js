import React,{Component} from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Homescreen from "./home";
import CartScreen from "./cart";
import DashboardScreen from "./dashboard";
import CommissionsScreen from "./Commissions/commissions";
import RankScreen from "./Commissions/rank";
import VolumesScreen from "./Commissions/volumes";
import CustomersScreen from "./Reports/customers";
import ClubCoutureScreen from "./Reports/clubcouture";
import PersonallyEnrolledScreen from "./Reports/personallyenrolledteam";
import UpcomingPromotionsScreen from "./Reports/upcomingpromotions";
import DownlineOrdersScreen from "./Reports/downlineorders";
import NewDesignersListScreen from "./Reports/newdesigners";
import TeamPerformanceScreen from "./Reports/teamperformance";
import RecentActivityScreen from "./Reports/recentactivity";
import WattsofLoveDonationsScreen from "./Reports/wattsoflovedonations";
import TreeViewerScreen from "./Reports/treeviewer";
import TitlePromotionsScreen from "./Reports/titlepromotion";
import IncentiveTripTrackerScreen from "./Reports/incentivetriptracker";
import DesignerDebutTrackerScreen from "./Reports/designerdebuttracker";
import InstallScreen from "./Plugins/install";
import UninstallScreen from "./Plugins/uninstall";


export default class Root extends Component { 
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Homescreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/dashboard" component={DashboardScreen} />
          <Route exact path="/commissions" component={CommissionsScreen} />
          <Route exact path="/rank" component={RankScreen} />
          <Route exact path="/volumes" component={VolumesScreen} />
          <Route exact path="/customers" component={CustomersScreen} /> 
          <Route exact path="/clubcouture" component={ClubCoutureScreen} />
          <Route exact path="/personallyenrolledteam" component={PersonallyEnrolledScreen} />
          <Route exact path="/upcomingpromotions" component={UpcomingPromotionsScreen} />  
          <Route exact path="/downlineorders" component={DownlineOrdersScreen} />  
          <Route exact path="/newdesigners" component={NewDesignersListScreen} />
          <Route exact path="/teamperformance" component={TeamPerformanceScreen} />  
          <Route exact path="/recentactivity" component={RecentActivityScreen} /> 
          <Route exact path="/wattsoflovedonations" component={WattsofLoveDonationsScreen} />  
          <Route exact path="/treeviewer" component={TreeViewerScreen} />
          <Route exact path="/titlepromotion" component={TitlePromotionsScreen} />
          <Route exact path="/incentivetriptracker" component={IncentiveTripTrackerScreen} /> 
          <Route exact path="/designerdebuttracker" component={DesignerDebutTrackerScreen} />   
          <Route exact path="/install" component={InstallScreen} />  
          <Route exact path="/uninstall" component={UninstallScreen} />   
        </div>
      </HashRouter>
    );
  }
}
