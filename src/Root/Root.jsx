import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="w-11/12 text-center">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;