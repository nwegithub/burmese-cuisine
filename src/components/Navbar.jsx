import React, { useState, useEffect, useRef } from 'react';
import { BiChevronDown, BiRestaurant, BiMenu, BiX } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';
import { Stack } from '@mui/material';
import CartModals from '../carts/CartModals';
import { useAuth } from '../Auth/AuthContext';
import { Button, MenuItem, styled, Avatar, Menu, } from '@mui/material';
import axios from 'axios';

const CustomMenu = styled(Menu)({
    '& .MuiPaper-root': {
        borderRadius: '8px',
        boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)',
        padding: '10px',
    },
});



const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const { user, logout, isMya, setIsMya } = useAuth();

    const [setting, setSetting] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const [message, setMessage] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const userId = user && user._id


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

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('nav')) {
                closeMenu();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);



    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (value) => {
        setSetting(value);
        // handleClose();
    };



    const handleImageChange = (e) => {
        setProfileImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!profileImage) {
            setMessage('Please select an image');
            return;
        }

        const formData = new FormData();
        formData.append('image', profileImage); // Make sure this matches backend field name

        try {
            const response = await axios.patch(`http://localhost:4000/users/${userId}/profile`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setMessage(response.data.message);
        } catch (error) {
            console.error(error);
            setMessage('Error updating profile image');
        }
    };

    const getInitials = (name) => {
        return name
            .split(' ')
            .map((word) => word[0])
            .join('');
    };

    const userName = user ? user.name : '';
    const initials = getInitials(userName);


    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            p={1}
            sx={{ position: "sticky", top: 0, backgroundColor: "#FFFFFF", boxShadow: "0px 3px 2px -2px gray", paddingLeft: 2, paddingRight: 2 }}
            zIndex={900}
        >
            <div className="flex flex-row items-center cursor-pointer space-x-2">
                <span>
                    <BiRestaurant size={32} />
                </span>
                <h1 className="text-xl font-semibold whitespace-nowrap">
                    {isMya ? "မြန်မာ့ရိုးရာချက်ပြုတ်နည်း" : "MyanmarCuisine"}
                </h1>

            </div>


            {/* Menu icon for mobile view */}
            <div className='md:hidden'>
                <button onClick={handleChange}>
                    {menu ? <BiX size={32} /> : <BiMenu size={32} />}
                </button>
            </div>

            {/* Navigation menu */}
            <nav className={`${menu ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center text-xl font-bold gap-8 nav`}
            // style = {{
            //     position : 'fixed',
            //     top : '54px',
            //     right : '0px',
            //     width : '300px',
            //     height : '100vh',
            //     background : 'white',
            //     boxShadow : '0 40px 60px ',
            //     padding : '40px 0 0 10px',       
            //   }}
            >
                <Link
                    to='/Home'
                    spy="true"
                    smooth="true"
                    duration={500}
                    className={`${getLinkClassName('/Home')} transition-all cursor-pointer`}
                    onClick={closeMenu}
                >
                    {isMya ? "ပြင်မစာမျက်နှာ" : "Home"}
                </Link>

                <Link
                    to='/menu'
                    spy="true"
                    smooth="true"
                    duration={500}
                    className={`${getLinkClassName('/menu')} transition-all cursor-pointer`}
                    onClick={closeMenu}
                >
                    {isMya ? "မီနူး" : "Menu"}
                </Link>
                {/* <div className='relative group'>
                    <div className='flex gap-1'>
                        <Link
                            to='/categories/All'
                            className={`${getLinkClassName('categories')} transition-all cursor-pointer`}
                            onClick={closeMenu}
                        >
                            {isMya ? "ရာသီစာများ" : "Seasonal Food"}
                        </Link>
                    </div>
                    <ul className='absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5'>
                        <li>
                            <Link
                                to='/categories/Tagu'
                                className={`${getLinkClassName('Tagu')} transition-all cursor-pointer`}
                                onClick={closeMenu}
                            >
                                {isMya ? "တန်ခူးလ" : "Tagu"}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/categories/Kason'
                                className={`${getLinkClassName('Kason')} transition-all cursor-pointer`}
                                onClick={closeMenu}
                            >
                                {isMya ? "ကဆုန်လ" : "Kason"}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/categories/Nayon'
                                className={`${getLinkClassName('Nayon')} transition-all cursor-pointer`}
                                onClick={closeMenu}
                            >
                                {isMya ? "နယုန်လ" : "Nayon"}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/categories/Waso'
                                className={`${getLinkClassName('Waso')} transition-all cursor-pointer`}
                                onClick={closeMenu}
                            >
                                {isMya ? "ဝါဆိုလ" : "Waso"}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/categories/Wagaung'
                                className={`${getLinkClassName('Wagaung')} transition-all cursor-pointer`}
                                onClick={closeMenu}
                            >
                                {isMya ? "ဝါခေါင်လ" : "Wagaung"}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/categories/Tawthalin'
                                className={`${getLinkClassName('Tawthalin')} transition-all cursor-pointer`}
                                onClick={closeMenu}
                            >
                                {isMya ? "တော်သလင်းလ" : "Tawthalin"}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/categories/Thadingyut'
                                className={`${getLinkClassName('Thadingyut')} transition-all cursor-pointer`}
                                onClick={closeMenu}
                            >
                                {isMya ? "သီတင်းကျွတ်လ" : "Thadingyut"}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/categories/Tazaungmon'
                                className={`${getLinkClassName('Tazaungmon')} transition-all cursor-pointer`}
                                onClick={closeMenu}
                            >
                                {isMya ? "တန်ဆောင်မုန်းလ" : "Tazaungmon"}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/categories/Nadaw'
                                className={`${getLinkClassName('Nadaw')} transition-all cursor-pointer`}
                                onClick={closeMenu}
                            >
                                {isMya ? "နတ်တော်လ" : "Nadaw"}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/categories/Pyatho'
                                className={`${getLinkClassName('Pyatho')} transition-all cursor-pointer`}
                                onClick={closeMenu}
                            >
                                {isMya ? "ပြာသိုလ" : "Pyatho"}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/categories/Tabodwe'
                                className={`${getLinkClassName('Tabodwe')} transition-all cursor-pointer`}
                                onClick={closeMenu}
                            >
                                {isMya ? "တပို့တွဲလ" : "Tabodwe"}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/categories/Tabaung'
                                className={`${getLinkClassName('Tabaung')} transition-all cursor-pointer`}
                                onClick={closeMenu}
                            >
                                {isMya ? "တပေါင်းလ" : "Tabaung"}
                            </Link>
                        </li>
                    </ul>
                </div> */}
                <Link
                    to='/articles'
                    spy="true"
                    smooth="true"
                    duration={500}
                    className={`${getLinkClassName('/articles')} transition-all cursor-pointer`}
                    onClick={closeMenu}
                >
                    {isMya ? "ဆောင်းပါးများ" : "Article&Blogs"}
                </Link>
                

                <div className='relative group'>
                    <div className='flex gap-1'>
                        <Link
                            spy="true"
                            smooth="true"
                            duration={500}
                            className={`${getLinkClassName('dishes')} transition-all cursor-pointer`}
                            onClick={closeMenu}
                        >
                            {isMya ? "ဘာသာစကား" : "Language"}
                        </Link>
                    </div>
                    <ul className='absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5'>
                        <li>
                            <Link
                                onClick={() => { handleLanguage('eng'); closeMenu(); }}
                                className={`${getLinkClassName('eng')} transition-all cursor-pointer`}
                            >
                                <p className='body1 hover:text-red-500'> {isMya ? "အင်္ဂလိပ်" : "English"}</p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => { handleLanguage('mm'); closeMenu(); }}
                                className={`${getLinkClassName('mm')} transition-all cursor-pointer`}
                            >
                                <p className="body1 hover:text-red-900">
                                    {isMya ? "မြန်မာ" : "Myanmar"}
                                </p>                            </Link>
                        </li>
                    </ul>
                </div>
                <Link
                    to='/FooterAboutUs'
                    spy="true"
                    smooth="true"
                    duration={500}
                    className={`${getLinkClassName('/Shop')} transition-all cursor-pointer`}
                >
                   {isMya ? "အကြောင်းအရာ" : "About Us"}
                </Link>
                <Link
                    to='/Contactus'
                    spy="true"
                    smooth="true"
                    duration={500}
                    className={`${getLinkClassName('/Shop')} transition-all cursor-pointer`}
                >
                    {isMya ? "ဆက်သွယ်ရန်" : "Contact"}
                </Link>
                {user ? (

                    <div
                        className='relative group'
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backgroundColor: 'gray',
                            color: 'white',
                            cursor: 'pointer',
                        }}
                    >
                        {initials}
                        <ul
                            className='absolute hidden space-y-5 group-hover:block bg-white border border-gray-300 rounded-lg p-5'
                            style={{
                                top: '100%', // Positions the dropdown at the bottom
                                left: '50%', // Centers the dropdown horizontally
                                transform: 'translateX(-50%)', // Adjusts the horizontal centering
                                zIndex: 10, // Ensures the dropdown appears above other elements
                            }}
                        >
                            <li>
                                <Link
                                    to='/favorite'
                                    spy="true"
                                    smooth="true"
                                    duration={500}
                                    className={`${getLinkClassName('/favorite')} transition-all cursor-pointer`}
                                    onClick={closeMenu}
                                >
                                    <p className='body2 hover:text-red-500'>
                                        {isMya ? "ကြိုက်နှစ်သက်သော" : "Favorite"}
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <button onClick={logout} >

                                    <p className='body2 hover:text-red-500'>
                                        {isMya ? 'ထွက်ရန်' : 'Logout'}
                                    </p>
                                </button>
                            </li>
                        </ul>
                    </div>


                ) : (
                    <>
                        <Link to="/Login" onClick={closeMenu}>{isMya ? 'ဝင်ရန်' : 'Login'}</Link>
                        <Link to="/SignUp" onClick={closeMenu}>{isMya ? 'စာရင်းသွင်းရန်' : 'Sign Up'}</Link>
                    </>
                )}

            </nav>
            {/* <CartModals /> */}
        </Stack >
    );
};

export default Navbar;

{/* <CustomMenu
                            id="profile-settings-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={() => handleMenuItemClick('account')}>
                                <Avatar sx={{ bgcolor: 'gray', mr: 1 }}>{initials}</Avatar>
                                {userName}
                            </MenuItem>
                            <MenuItem onClick={() => handleMenuItemClick('logout')}>
                                <button onClick={logout} >
                                    {isMya ? 'ထွက်ရန်' : 'Logout'}
                                </button>
                            </MenuItem>
                        </CustomMenu> */}