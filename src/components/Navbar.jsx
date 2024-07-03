import React, { useState } from 'react'
import { BiChevronDown, BiRestaurant } from 'react-icons/bi';
import { Link,  useLocation } from 'react-router-dom';
import { Stack,Button, Modal} from '@mui/material';
// import { FiShoppingCart } from 'react-icons/fi';
import CartModals from '../carts/CartModals';
import { useAuth } from '../Auth/AuthContext';


const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const { user, logout } = useAuth();

    const handleChange = () => {
        setMenu(!menu);
    };
    const closeMenu = () => {
        setMenu(false);
    };
    const location = useLocation();
    const getLinkClassName = (path) => {
        return location.pathname === path ? 'text-activeColor' : 'hover:text-brightColor';
    };


    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            p={1}
            sx={{ position: "sticky", top: 0, backgroundColor: "#FFFFFF", boxShadow: "0px 3px 2px -2px gray", paddingLeft: 2, paddingRight: 2 }}
            zIndex={900}
        >
            <div className='flex flex-row items-center cursor-pointer'>
                <span>
                    <BiRestaurant size={32} />
                </span>
                <h1 className='text-xl font-semibold'>BurmeseCuisine</h1>
            </div>
            <nav className='hidden md:flex flex-row items-center text-lg font-medium gap-8'>
                <Link
                    to='/Home'
                    spy="true"
                    smooth="true"
                    duration={500}
                    className={`${getLinkClassName('/Home')} transition-all cursor-pointer`}
                >
                    Home
                </Link>
                <div className='relative group'>
                    <div className='flex gap-1'>
                        <Link
                            to='/categories'
                            spy="true"
                            smooth="true"
                            duration={500}
                            className={`${getLinkClassName('dishes')} transition-all cursor-pointer`}
                        >
                            Categories
                        </Link>
                    </div>
                    <ul className='absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5'>
                        <li>
                            <Link
                                to='dishes'
                                spy="true"
                                smooth="true"
                                duration={500}
                                className={`${getLinkClassName('dishes')} transition-all cursor-pointer`}
                            >
                                Dishes
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='salad'
                                spy="true"
                                smooth="true"
                                duration={500}
                                className={`${getLinkClassName('dishes')} transition-all cursor-pointer`}
                            >
                                Salad
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='dessert'
                                spy="true"
                                smooth="true"
                                duration={500}
                                className={`${getLinkClassName('dishes')} transition-all cursor-pointer`}
                            >
                                Dessert
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link
                    to='/how-to'
                    spy="true"
                    smooth="true"
                    duration={500}
                    className={`${getLinkClassName('/how-to')} transition-all cursor-pointer`}
                >
                    How to..
                </Link>
                <Link
                    to='/articles'
                    spy="true"
                    smooth="true"
                    duration={500}
                    className={`${getLinkClassName('/articles')} transition-all cursor-pointer`}
                >
                    Articles&Blog
                </Link>
                <Link
                    to='/shop'
                    spy="true"
                    smooth="true"
                    duration={500}
                    className={`${getLinkClassName('/Shop')} transition-all cursor-pointer`}
                >
                    Shop
                </Link>
                {user ? (
        <>
           
          <span>{JSON.parse(user).name}</span>
          <button onClick={logout}>Logout</button>

        </>
      ) : (
        <>
          <Link to="/Login">Login</Link>
          <Link to="/SignUp">Sign Up</Link>
        </>
      )}
                {/* <Button onClick={()=>{
                   <CartModals></CartModals>
                }}><FiShoppingCart size={24}/></Button> */}
                <CartModals></CartModals>
            </nav>
        </Stack>
    )
}
export default Navbar;