import Shop from "../View/Shop";
import SingleProduct from "../components/SingleProduct";
 
export const ShopRoutes =[

    {
        path:"/shop",
        element: <Shop/>
    },

    {
        path:"/product/:productId",
        element: <SingleProduct/>
    },
     
];