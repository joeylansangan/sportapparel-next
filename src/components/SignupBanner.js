import React from 'react'
import { CgArrowLongRight } from "react-icons/cg";

function SignupBanner() {
    const iconStyle = {
        color: 'white',
        marginLeft: '20px'
    }
    return (
        <div className="bg-adi_yellow mt-24 flex-col sm:flex-row flex items-center justify-center py-8">
            <div className="px-3 my-3">
                <p className="uppercase text-3xl adiBold text-center">Join our creators club & get 15% off</p>
            </div>
            <div className="px-3 my-3">
                <button className="bg-current flex items-center py-3 px-5 text-lg">
                    <p className="uppercase text-white tracking-wider">sign up for free</p>
                    <CgArrowLongRight style={iconStyle}/>
                </button>
            </div>
            
        </div>
    )
}

export default SignupBanner
