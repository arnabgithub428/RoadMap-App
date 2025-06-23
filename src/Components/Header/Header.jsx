import { Link, NavLink } from "react-router-dom";

const Header = () => {

    const links = <>

        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/items">Roadmap Item</NavLink></li>
       
       
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu gap-2 menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img src="/src/assets/logo.png" className="w-10 h-10" alt="" /></a>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu gap-2 menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <button  class="relative inline-flex items-center justify-center p-0.5 mb-1 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <Link to="/login" class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                        Login
                    </Link>
                </button>
                <button  class="relative inline-flex items-center justify-center p-0.5 mb-1 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <Link to="/signUp" class="relative px-5 py-2.5 md:text-left transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                        Sign Up
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Header;