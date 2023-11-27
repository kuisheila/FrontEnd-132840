import { useRoutes } from 'react-router-dom';
import { DashboardRoutes } from "../packages/Dashboard/routes/DashboardRoutes";
import { AuthRoutes } from "../packages/Auth/routes/AuthRoutes";
import { HomeRoutes } from "../packages/Home/routes/HomeRoutes";
import {  ChildrensHomeRoutes } from "../packages/ChildrensHome/routes/ChildrensHomeRoutes";
import { DonorRoutes } from "../packages/Donors/routes/DonorRoutes";
//import { DonationsRoutes } from "../../src/packages/Donations/routes/DonationsRoutes";
 

let systemRoutes = [];
// home
systemRoutes.push(...HomeRoutes);

// dashboard routes
systemRoutes.push(...DashboardRoutes);

// auth routes
systemRoutes.push(...AuthRoutes);

// Childrens
systemRoutes.push(...ChildrensHomeRoutes);
// Donors
systemRoutes.push(...DonorRoutes);
// Donations
//systemRoutes.push(...DonationsRoutes);

 
 

export default function Router() {
  return useRoutes(systemRoutes);
}
