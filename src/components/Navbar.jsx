import React, { useState } from 'react'
import { BiChevronDown, BiRestaurant } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';
import { Stack, Button, Modal } from '@mui/material';
// import { FiShoppingCart } from 'react-icons/fi';
import CartModals from '../carts/CartModals';
import { useAuth } from '../Auth/AuthContext';


const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const { user, logout, isMya, setIsMya } = useAuth();

    // const handleLanguage = async () => {
    //     setIsMya(!isMya)
    //     await localStorage.setItem('language', !isMya ? "mm" : "eng")
    //     console.log("state", isMya)
    // }

    const handleLanguage = async (lang) => {
        setIsMya(lang === 'mm');
        await localStorage.setItem('language', lang);
        console.log("state", lang);
    };


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
                    {isMya ? "ပြင်မစာမျက်နှာ" : "Home"}
                </Link>
                <div className='relative group'>
                    <div className='flex gap-1'>
                        <Link
                            to='/categories'
                            spy="true"
                            smooth="true"
                            duration={500}
                            className={`${getLinkClassName('categories')} transition-all cursor-pointer`}
                        >
                            {isMya ? "အမျိုးအစားများ" : "Categories"}
                        </Link>
                    </div>
                    <ul className='absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5'>
                        <li>
                            <Link
                                to='Tagu'
                                spy="true"
                                smooth="true"
                                duration={500}
                                className={`${getLinkClassName('Tagu')} transition-all cursor-pointer`}
                            >
                            {isMya ? "တန်ခူးလ" : "Tagu"}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='Kason'
                                spy="true"
                                smooth="true"
                                duration={500}
                                className={`${getLinkClassName('Kason')} transition-all cursor-pointer`}
                            >
                                {isMya ? "ကဆုန်လ" : "Kason"}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='Nayon'
                                spy="true"
                                smooth="true"
                                duration={500}
                                className={`${getLinkClassName('Nayon')} transition-all cursor-pointer`}
                            >
                                {isMya ? "နယုန်လ" : "Nayon"}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='Waso'
                                spy="true"
                                smooth="true"
                                duration={500}
                                className={`${getLinkClassName('Waso')} transition-all cursor-pointer`}
                            >
                                {isMya ? "ဝါဆိုလ" : "Waso"}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='Wagaung'
                                spy="true"
                                smooth="true"
                                duration={500}
                                className={`${getLinkClassName('Wagaung')} transition-all cursor-pointer`}
                            >
                               {isMya ? "ဝါခေါင်လ" : "Wagaung"} 
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='Tawthalin'
                                spy="true"
                                smooth="true"
                                duration={500}
                                className={`${getLinkClassName('Tawthalin')} transition-all cursor-pointer`}
                            >
                               {isMya ? "တော်သလင်းလ" : "Tawthalin"}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='Thadingyut'
                                spy="true"
                                smooth="true"
                                duration={500}
                                className={`${getLinkClassName('Thadingyut')} transition-all cursor-pointer`}
                            >
                                {isMya ? "သီတင်းကျွတ်လ" : "Thadingyut"}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='Tazaungmon'
                                spy="true"
                                smooth="true"
                                duration={500}
                                className={`${getLinkClassName('Tazaungmon')} transition-all cursor-pointer`}
                            >
                               {isMya ? "တန်ဆောင်မုန်းလ" : "Tazaungmon"}
                            </Link>
                        </li>
                        <li>
                        <Link
                                to='Nadaw'
                                spy="true"
                                smooth="true"
                                duration={500}
                                className={`${getLinkClassName('Nadaw')} transition-all cursor-pointer`}
                            >
                                {isMya ? "နတ်တော်လ" : "Nadaw"}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='Pyatho'
                                spy="true"
                                smooth="true"
                                duration={500}
                                className={`${getLinkClassName('Pyatho')} transition-all cursor-pointer`}
                            >
                               {isMya ? "ပြာသိုလ" : "Pyatho"}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='Tabodwe'
                                spy="true"
                                smooth="true"
                                duration={500}
                                className={`${getLinkClassName('Tabodwe')} transition-all cursor-pointer`}
                            >
                                {isMya ? "တပို့တွဲလ" : "Tabodwe"}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='Tabaung'
                                spy="true"
                                smooth="true"
                                duration={500}
                                className={`${getLinkClassName('Tabaung')} transition-all cursor-pointer`}
                            >
                                {isMya ? "တပေါင်းလ" : "Tabaung"}
                            </Link>
                        </li>
                    </ul>
                </div>

                <Link
                    to='/articles'
                    spy="true"
                    smooth="true"
                    duration={500}
                    className={`${getLinkClassName('/articles')} transition-all cursor-pointer`}
                >
                    
                    {isMya ? "ဆောင်းပါးများ" : "Article&Blogs"}
                </Link>
                {/* <Link
                    to='/shop'
                    spy="true"
                    smooth="true"
                    duration={500}
                    className={`${getLinkClassName('/Shop')} transition-all cursor-pointer`}
                >
                    Shop
                </Link> */}
                {user ? (
                    <>

                        <span>{JSON.parse(user).name}</span>
                        <button onClick={logout}>{isMya ? 'ထွက်ရန်' : 'Login'}</button>

                    </>
                ) : (
                    <>
                        <Link to="/Login">{isMya ? 'ဝင်ရန်' : 'Login'}</Link>
                        <Link to="/SignUp">{isMya ? 'စာရင်းသွင်းရန်' : 'Sign Up'}</Link>
                    </>
                )}

                <div className='relative group'>
                    <div className='flex gap-1'>
                        <Link
                           
                            spy="true"
                            smooth="true"
                            duration={500}
                            className={`${getLinkClassName('dishes')} transition-all cursor-pointer`}
                        >
                            {isMya ? "ဘာသာစကား" : "language"}
                        </Link>
                    </div>
                    <ul className='absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5'>
                        <li>
                            <Link
                                onClick={() => handleLanguage('eng')}
                                spy="true"
                                smooth="true"
                                duration={500}
                                //className={`${getLinkClassName('dishes')} transition-all cursor-pointer`}
                            >
                                {isMya ? "အင်္ဂလိပ်" : "English"}
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => handleLanguage('mm')}
                                spy="true"
                                smooth="true"
                                duration={500}
                                //className={`${getLinkClassName('dishes')} transition-all cursor-pointer`}
                            >
                                {isMya ? "မြန်မာ" : "Myanmar"}
                            </Link>
                        </li>
                        
                    </ul>
                </div>
                {/* <button onClick={handleLanguage}>
                    {isMya ? "ကကကကကက" : "language"}
                </button> */}
                <CartModals></CartModals>
            </nav>
        </Stack>
    )
}
export default Navbar;