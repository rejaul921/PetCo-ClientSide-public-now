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
import DonateCampaDetails from "../Components/DonateCampaDetails";
import MyAddedPet from "../Dashboard/MyAddedPet";
import AdoptionRequest from "../Dashboard/AdoptionRequest";
import MyDonationCapaign from "../Dashboard/MyDonationCapaign";
import AllCapaign from "../Dashboard/AllCapaign";
import AllPetsDash from "../Dashboard/AllPetsDash";
import AllUsers from "../Dashboard/AllUsers";


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
            },
            {
                path:"/donationDetails/:_id",
                element:<PrivateRoute><DonateCampaDetails></DonateCampaDetails></PrivateRoute>,
                loader:({params})=>fetch(`https://petco-server.vercel.app/donationDetails/${params._id}`)
            },
        ]
    },

    // dashboard area
    {
        path:"/dashboard",
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path:"/dashboard/AddPet",
                element:<PrivateRoute><AddPet></AddPet></PrivateRoute>
            },
            {
                path:"/dashboard/createDonation",
                element:<PrivateRoute><CreateDonation></CreateDonation></PrivateRoute>
            },
            {
                path:"/dashboard/myAddedPet",
                element:<PrivateRoute><MyAddedPet></MyAddedPet></PrivateRoute>
            },
            {
                path:"/dashboard/AdoptionRequest",
                element:<PrivateRoute><AdoptionRequest></AdoptionRequest></PrivateRoute>
            },
            {
               path:"/dashboard/myDonationCampaign",
               element:<PrivateRoute><MyDonationCapaign></MyDonationCapaign></PrivateRoute> 
            },
            // admin routes
            {
                path:"/dashboard/allUsers",
                element:<AllUsers></AllUsers>

            },
            {
                path:"/dashboard/allPets",
                element:<AllPetsDash></AllPetsDash>
            },
            {
                path:"/dashboard/allCampaign",
                element:<AllCapaign></AllCapaign>
            }
        ]
    }
])

export default Router;