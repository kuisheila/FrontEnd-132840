import { ProtectedRoute } from "../../../shared/protected";
import DashboardLayout from "../../../shared/layouts/dashboard";
import SingleHome from "../components/SingleHome";
import ChildrensHome from "../views/ChildrensHome";
import HomeCard from "../components/HomeCard";
 
export const ChildrensHomeRoutes = [
    {
        // path: '/dashboard',
        element: <DashboardLayout /> ,
        children: [
            {
                path: "childrens-home", // Relative to the parent route '/dashboard'
                element: <ChildrensHome />
            },
        
            {
                path: "add-home", // Relative to the parent route '/dashboard'
                element: <HomeCard />
            },
        
            {
                path: "single-home/:productId", // Relative to the parent route '/dashboard'
                element: <SingleHome />
            },
        ]
    }
];
