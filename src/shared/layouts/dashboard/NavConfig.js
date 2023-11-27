import {DashboardLinks} from "../../../packages/Dashboard/routes/DashboardLinks";
import {ChildrensHomeLinks} from "../../../packages/ChildrensHome/routes/ChildrensHomeLinks";
//import {DonationsLinks} from "../../../packages/Donations/routes/DonationsLinks";
import {DonorsLinks} from "../../../packages/Donors/routes/DonorsLink";

const navConfig = [];
navConfig.push(...DashboardLinks)
navConfig.push(...ChildrensHomeLinks)
//navConfig.push(...DonationsLinks)
navConfig.push(...DonorsLinks)
 
 
export default navConfig;
