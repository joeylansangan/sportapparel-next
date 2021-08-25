import Image from 'next/image';
import { 
    MenuIcon, 
    SearchIcon, 
    ShoppingCartIcon,
    ArchiveIcon,
    UserIcon,
    ShoppingBagIcon
 } from "@heroicons/react/outline";

 import { MdLocalShipping } from "react-icons/md";

function Header() {

    const iconStyle = {
        color: "white",
    }

    return (
        <header className="border-b-2 pb-4">
            {/* top nav */}
            <div className="flex flex-grow justify-center bg-black items-center">
                <div className="flex items-center text-white space-x-1">

                  <MdLocalShipping style={iconStyle}/>
                    <span>FREE STANDARD SHIPPING & RETURNS | JOIN NOW</span>
                </div>
            </div>
            <div className="flex items-center p-1 flex-grow py-2">
                <div className="flex items-center flex-grow sm:flex-grow-0 mx-6">
                    <Image 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png"
                        width={60}
                        height={40}
                        objectFit='contain'
                        className="cursor-pointer"
                    />
                </div>

                {/* search */}
                <div className="hidden sm:flex flex-grow items-center cursor-pointer h-10 bg-gray-100">
                    <input 
                        className="p-2 h-full w-6 flex-grow flex-shrink bg-gray-100 focus:outline-none px-4" 
                        type="text" 
                    />
                    <SearchIcon className="h-14 p-4"/>
                </div>

                <div className="flex items-center text-xs space-x-0.5 mx-6">
                    <div className="link">
                        <UserIcon className="h-14 p-4"/>
                    </div>
                    <div className="link">
                        <ArchiveIcon className="h-14 p-4"/>
                    </div>
                    <div className="relative link">
                        <span className="absolute top-2 right-2 h-4 w-4 bg-yellow-200 rounded-full text-center ">0</span>
                        <ShoppingBagIcon className="h-14 p-4"/>
                    </div>
                </div>
            </div>  

            {/* bot nav */}
            <div className="flex items-center text-transform:uppercase space-x-3 pl-6">
                <MenuIcon className="h-6 mr-1"/>
                <p className="link">Men</p>
                <p className="link">Women</p>
                <p className="link">Kids</p>
                <p className="link">Back to School</p>
                <p className="link">3 Strip Life</p>
            </div>
            
        </header>
    )
}

export default Header
