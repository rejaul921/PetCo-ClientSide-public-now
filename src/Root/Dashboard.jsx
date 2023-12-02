import { NavLink, Outlet } from "react-router-dom";
import { FaCat, FaDog, FaDollarSign, FaFunnelDollar, FaReadme, FaUser, FaWallet } from "react-icons/fa";
import Navbar from "../SharedCompo/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    console.log(user.isAdmin)
    console.log(user)
    const isAdmin=true
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex gap-5">
                <div className="w-64  pt-8 min-h-screen bg-red-400">
                    {
                        // Admin part
                        isAdmin ? <ul className="menu text-lg font-semibold text-white">
                            <li><NavLink to="/dashboard/allUsers"><FaUser />All Users
                            </NavLink>
                            </li>
                            <li><NavLink to="/dashboard/allPets"><FaDog />All Pets
                            </NavLink>
                            </li>
                            <li className="mb"><NavLink to="/dashboard/allCampaign"><FaDollarSign />All Campaings
                            </NavLink>
                                <hr className="border-1 mt-3 border-white w-3/4 mx-auto" /> 
                            </li>

                            {/* common part */}
                            <li><NavLink to="/dashboard/AddPet"><FaDog />Add a Pet
                            </NavLink>
                            </li>
                            <li><NavLink to="/dashboard/myAddedPet"> <FaCat />  My Added pets
                            </NavLink>
                            </li>
                            <li><NavLink to="/dashboard/AdoptionRequest"> <FaReadme /> Adoption Request
                            </NavLink>
                            </li>
                            <li><NavLink to="/dashboard/createDonation"> <FaWallet /> Create a Donation Campaign
                            </NavLink>
                            </li>
                            <li><NavLink to="/dashboard/myDonationCampaign"> <FaDollarSign /> My Donation Campaign
                            </NavLink>
                            </li>
                            <li><NavLink to="/dashboard/myDonation"> <FaFunnelDollar /> My Donation
                            </NavLink>
                            </li>
                        </ul>
                         :
                          <ul className="menu text-lg font-semibold text-white">
                            <li><NavLink to="/dashboard/AddPet"><FaDog />Add a Pet
                            </NavLink>
                            </li>
                            <li><NavLink to="/dashboard/myAddedPet"> <FaCat />  My Added pets
                            </NavLink>
                            </li>
                            <li><NavLink to="/dashboard/AdoptionRequest"> <FaReadme /> Adoption Request
                            </NavLink>
                            </li>
                            <li><NavLink to="/dashboard/createDonation"> <FaWallet /> Create a Donation Campaign
                            </NavLink>
                            </li>
                            <li><NavLink to="/dashboard/myDonationCampaign"> <FaDollarSign /> My Donation Campaign
                            </NavLink>
                            </li>
                            <li><NavLink to="/dashboard/myDonation"> <FaFunnelDollar /> My Donation
                            </NavLink>
                            </li>
                        </ul>
                    }
                </div>
                <div className="flex-1 pt-8">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;