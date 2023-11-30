import { NavLink, Outlet } from "react-router-dom";
import { FaCat, FaDog, FaDollarSign, FaFunnelDollar, FaReadme, FaWallet } from "react-icons/fa";
import Navbar from "../SharedCompo/Navbar";

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex gap-5">
                <div className="w-64  pt-8 min-h-screen bg-red-400">
                    <ul className="menu text-lg font-semibold text-white">
                        <li><NavLink to="/dashboard/AddPet">
                            <FaDog />
                            Add a Pet</NavLink></li>
                        <li><NavLink to="/dashboard/myAddedPet"> <FaCat />  My Added pets</NavLink></li>
                        <li><NavLink to="/dashboard/AdoptionRequest"> <FaReadme /> Adoption Request</NavLink></li>
                        <li><NavLink to="/dashboard/createDonation"> <FaWallet /> Creat Donation Campaign</NavLink></li>
                        <li><NavLink to="/dashboard/myDonationCampaign"> <FaDollarSign /> My Donation Campaign</NavLink></li>
                        <li><NavLink to="/dashboard/myDonation"> <FaFunnelDollar /> My Donation</NavLink></li>
                    </ul>
                </div>
                <div className="flex-1 pt-8">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;