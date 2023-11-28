
import { NavLink } from 'react-router-dom';
import petLogo from '../assets/imgs/logo.png'
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-xl">
                <div className="navbar-start">

                    {/* for mobile and tablet 1st part */}
                    <div className="dropdown">
                        {/* icon for mobile */}
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        {/* showing dropdown element */}
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box">
                            {/* home */}
                        <NavLink to="/" className={({ isActive, isPending }) =>
                            isPending ? "pending" :
                                isActive ? "text-white bg-red-500 p-1 rounded-lg" : ""}>
                            Home
                        </NavLink>
                        {/* pet listing for adoption */}
                        <NavLink to="/adoppet" className={({ isActive, isPending }) =>
                            isPending ? "pending" :
                                isActive ? "text-white bg-red-500 p-1 rounded-lg" : ""}>
                            Pets
                        </NavLink>
                        {/* Donate for helpless pet */}
                        <NavLink to="/donate" className={({ isActive, isPending }) =>
                            isPending ? "pending" :
                                isActive ? "text-white bg-red-500 p-1 rounded-lg" : ""}>
                            Donate
                        </NavLink>
                        </ul>
                    </div>

                    {/* for laptop */}
                    <div>
                        <img className='w-24' src={petLogo} alt="" />
                    </div>
                </div>
                <div className="navbar-center font-bold hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-4">
                        {/* home */}
                        <NavLink to="/" className={({ isActive, isPending }) =>
                            isPending ? "pending" :
                                isActive ? "text-white bg-red-500 p-1 rounded-lg" : ""}>
                            Home
                        </NavLink>
                        {/* pet listing for adoption */}
                        <NavLink to="/adoppet" className={({ isActive, isPending }) =>
                            isPending ? "pending" :
                                isActive ? "text-white bg-red-500 p-1 rounded-lg" : ""}>
                            Pets
                        </NavLink>
                        {/* Donate for helpless pet */}
                        <NavLink to="/donate" className={({ isActive, isPending }) =>
                            isPending ? "pending" :
                                isActive ? "text-white bg-red-500 p-1 rounded-lg" : ""}>
                            Donate
                        </NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* Loggin */}

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul className="mt-3 z-[1] p-2 text-left shadow dropdown-content bg-base-100 rounded-box">
                            <li><a>Dashboard</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;