import {ProtectedRoute} from "../../../shared/protected";
import DashboardLayout from "../../../shared/layouts/dashboard";
import SingleDonation from "../components/SingleDonation";
import Donations from "../views/Donations";
import DonationCard from "../components/DonationCard";
 
export const DonationsRoutes =[
    {
        path: '/admin/dashboard',
        element: <ProtectedRoute><DashboardLayout /></ProtectedRoute>,
        children: [
            {
                path:"/donations",
                element: <Donations/>
            },
        
            {
                path:"/add-donations",
                element: <DonationCard/>
            },
        
            {
                path:"/single-home/:productId",
                element: <SingleDonation/>
            },
        ]
    }
  

   
     
];