import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import HomePage from "../HomePage/HomePage";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Dashboard from "../Root/Dashboard";
import AddPet from "../Dashboard/AddPet";
import AllPets from "../Components/Allpets";
import PetDetails from "../Components/PetDetails";
import PrivateRoute from "../Components/PrivateRoute";
import CategoryWisePet from "../Components/CategoryWisePet";
import CreateDonation from "../Dashboard/CreateDonation";
import AllDonations from "../Components/AllDonations";


const Router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<HomePage></HomePage>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/adoptpet",
                element:<AllPets></AllPets>
            },
            {
                path:"/petDetails/:_id",
                element:<PrivateRoute><PetDetails></PetDetails></PrivateRoute>,
                loader:({params})=>fetch(`https://petco-server.vercel.app/petDetails/${params._id}`)
            },
            {
                path:"/categories/:name",
                element:<CategoryWisePet></CategoryWisePet>
            },
            {
                path:"/donate",
                element:<AllDonations></AllDonations>
            }
        ]
    },

    // dashboard area
    {
        path:"/dashboard",
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:"/dashboard/AddPet",
                element:<AddPet></AddPet>
            },
            {
                path:"/dashboard/createDonation",
                element:<CreateDonation></CreateDonation>
            }
        ]
    }
])

export default Router;