import React, { useState } from 'react'
import { BiChevronDown, BiRestaurant } from 'react-icons/bi';
import Button from '../layouts/Button';
import { Link,  useLocation } from 'react-router-dom';
import { Stack } from '@mui/material';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
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
                            to='dishes'
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
                                to='dishes'
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
                                to='dishes'
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
                    to='/Shop'
                    spy="true"
                    smooth="true"
                    duration={500}
                    className={`${getLinkClassName('/Shop')} transition-all cursor-pointer`}
                >
                    Shop
                </Link>
                <Button title="Login" />
            </nav>
            {/* <div className="md:hidden flex items-center">
                        {menu ?
                            (<AiOutlineClose size={25} onClick={handleChange} />) : (
                                <AiOutlineMenuUnfold size={25} onClick={handleChange}/>
                            )
                        }
                    </div>
                <div className={`${menu ? "translate-x-0" : "-translatex-x-full"} lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
                    <Link to='home' spy={true} smooth={true} duration={500}
                        className='hover:text-brightColor transition-all cursor-pointer'>Home</Link>
                    <Link to='dishes' spy={true} smooth={true} duration={500}
                        className='hover:text-brightColor transition-all cursor-pointer'>Categories</Link>
                    <Link to='about' spy={true} smooth={true} duration={500}
                        className='hover:text-brightColor transition-all cursor-pointer'>How to..</Link>
                    <Link to='menu' spy={true} smooth={true} duration={500}
                        className='hover:text-brightColor transition-all cursor-pointer'>Articles&Blog</Link>
                    <Link to='reviews' spy={true} smooth={true} duration={500}
                        className='hover:text-brightColor transition-all cursor-pointer'>Shop</Link>
                    <Button title="Login" />
                    
                </div> */}

        </Stack>
    )
}
export default Navbar;