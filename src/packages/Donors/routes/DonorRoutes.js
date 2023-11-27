import { ProtectedRoute } from "../../../shared/protected";
import DashboardLayout from "../../../shared/layouts/dashboard";
import SingleDonor from "../components/SingleDonor";
import Donors from "../views/Donors";
import DonorCard from "../components/DonorCard";

export const DonorRoutes = [
    {
        
        element:  <DashboardLayout />,

        children: [
            {
                path: 'donors', // Relative to the parent route '/dashboard'
                element: <Donors/>
            },
        
            {
                path: 'add-donor', // Relative to the parent route '/dashboard'
                element: <DonorCard/>
            },
        
            {
                path: 'single-donor/:productId', // Relative to the parent route '/dashboard'
                element: <SingleDonor/>
            },
        ]
    }
];
