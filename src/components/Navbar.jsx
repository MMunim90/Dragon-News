import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from "../assets/user.png"
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
    const {user, logOut} = use(AuthContext)
    const handleLogOut = () => {
        // console.log("user trying to logout")
        logOut()
        .then(() => {
            toast.warning('Logged Out Successfully')
        })
        .catch(error => {
            toast.error(error)
        })
    }
    return (
        <div className='flex justify-between items-center'>
            <div className='font-bold text-2xl'>{user && user.displayName}</div>
        <div className='nav flex gap-5 text-accent'>  {/*lg:ml-[185px]*/}
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/bookmark">Bookmark</NavLink>
            </div>
            <div className='login-btn flex gap-5'>
                <img referrerPolicy='no-referrer' className='w-12 h-12 rounded-full border-3 border-black' src={`${user ? user.photoURL : userIcon}`} alt="" />
                {user ? <button onClick={handleLogOut} className='btn btn-primary px-10'>Log Out</button> : <Link to="/auth/login"  className='btn btn-primary px-10'>Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;