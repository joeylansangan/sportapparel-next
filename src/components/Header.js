import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
    MenuIcon, 
    SearchIcon, 
    ShoppingCartIcon,
    ArchiveIcon,
    UserIcon,
    ShoppingBagIcon
 } from "@heroicons/react/outline";
import { signIn, signOut, useSession } from 'next-auth/client';
import { MdLocalShipping } from "react-icons/md";
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';


function Header() {

    const [session] = useSession();
    const router = useRouter();
    const items = useSelector(selectItems)

    const whiteIcon = {
        color: "white",
    }
    const blackIcon = {
        color: "black",
        width:"21px",
        height:"21px"
    }
    const searchStyle = {
        maxWidth: "250px"
    }
    return (
        <header className="border-b-2 pb-4 bg-gray-100">
            {/* top nav */}
            <div className="flex flex-grow justify-center bg-black items-center">
                <div className="flex items-center text-white space-x-1">

                  <MdLocalShipping style={whiteIcon}/>
                    <span>FREE STANDARD SHIPPING & RETURNS | JOIN NOW</span>
                </div>
            </div>
            <div className="flex items-center p-1 justify-between flex-grow pt-4">
                <div className="flex items-center flex-grow sm:flex-grow-0 mx-6">
                    <Image 
                        onClick={() => router.push("/")}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png"
                        width={60}
                        height={40}
                        objectFit='contain'
                        className="cursor-pointer"
                    />
                </div>

                <div style={searchStyle} className="flex justify-end items-center">
                    <div className="hidden sm:flex flex-grow items-center cursor-pointer h-10 bg-white">
                        <input 
                            className="p-2 h-full flex-grow flex-shrink bg-white focus:outline-none px-4" 
                            type="text" 
                            placeholder="Search"
                        />
                        <SearchIcon style={blackIcon} className="mr-3"/>
                    </div>

                    <div className="flex items-center text-xs space-x-0.5 mx-6">
                        <div onClick={!session ? signIn : signOut} className="flex items-center mr-2 w-max cursor-pointer">
                            <UserIcon style={blackIcon}/>
                            <span>{session ? `Hello, ${((session.user.name).split(' '))[0]}` : "Login"}</span>
                        </div>                        
                        <div className="link flex items-center">
                            <ArchiveIcon style={blackIcon} className="mr-3"/>
                        </div>
                        <div onClick={() => router.push("/cart")} className="relative link">
                            <span className="absolute top-2 right-2 h-4 w-4 bg-yellow-200 rounded-full text-center ">{items.length}</span>
                            <ShoppingBagIcon style={blackIcon} className="mr-3"/>
                        </div>
                    </div>
                </div>
                {/* search */}

            </div>  

            {/* bot nav */}
            <div className="flex items-center text-transform:uppercase space-x-3 pl-6 mt-3">
                <MenuIcon style={blackIcon}/>
                <p className="link">Men</p>
                <p className="link">Women</p>
                <p className="link">Kids</p>
                <p className="link hidden lg:inline-flex">Back to School</p>
                <p className="link hidden lg:inline-flex">3 Strip Life</p>
                <p className="text-xs flex items-center">also visit<img className="ml-2" width="52px" height="12px" src="./assets/reeboklogo.png"alt="reebok"/></p>
            </div>

        </header>
    )
}

export default Header
