import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import HomePage from "../HomePage/HomePage";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Dashboard from "../Root/Dashboard";
import AddPet from "../Dashboard/AddPet";
import AllPets from "../Components/Allpets";


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
            }
        ]
    },
    {
        path:"/dashboard",
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:"/dashboard/AddPet",
                element:<AddPet></AddPet>
            }
        ]
    }
])

export default Router;