import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import HomePage from "../HomePage/HomePage";


const Router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<HomePage></HomePage>
            },
        ]
    }
])

export default Router;