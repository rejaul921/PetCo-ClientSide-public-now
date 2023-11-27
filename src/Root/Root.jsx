import { Outlet } from "react-router-dom";
import Navbar from "../SharedCompo/Navbar";
import Footer from "../SharedCompo/Footer";


const Root = () => {
    return (
        <div className="w-11/12 text-center mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;