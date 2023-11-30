
import { NavLink } from 'react-router-dom';
import petLogo from '../assets/imgs/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
const Navbar = () => {

    const{user, logOut}=useContext(AuthContext);
    const SignOut=()=>{
        logOut()
        .then()
        .catch()
    }

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
                        <NavLink to="/adoptpet" className={({ isActive, isPending }) =>
                            isPending ? "pending" :
                                isActive ? "text-white bg-red-500 p-1 rounded-lg" : ""}>
                            Listed Pet
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
                        <NavLink to="/adoptpet" className={({ isActive, isPending }) =>
                            isPending ? "pending" :
                                isActive ? "text-white bg-red-500 p-1 rounded-lg" : ""}>
                            Listed Pet
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

                    <div className='font-bold text-lg'>
                        {
                            user? <div className='dropdown'>
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">

                            <div className="w-10 rounded-full">
                                <img className='rounded-full w-8 h-8' alt="" src={user.photoURL} />
                            </div>
                        </div>
                        <ul className="mt-3 z-[1] p-2 text-left right-0 w-36 shadow dropdown-content bg-base-100 rounded-box">
                            <li><p>{user.displayName}</p></li>
                            <NavLink to="/dashboard" className={({ isActive, isPending }) =>
                            isPending ? "pending" : 
                            isActive ? "text-white bg-red-500 p-1 rounded-lg font-bold" : ""}>
                                Dashboard
                        </NavLink>
                            
                            <li><button onClick={SignOut} className=' bg-red-500 p-1 text-white rounded-lg '>Logout</button></li>
                        </ul>           
                        </div>
                    :
                    <NavLink to="/login" className={({ isActive, isPending }) =>
                        isPending ? "pending" : 
                        isActive ? "text-white bg-red-500 p-1 rounded-lg font-bold" : ""}>
                     Login
                     </NavLink>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;