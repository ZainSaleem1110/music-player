import React from 'react'
import { Link } from 'react-router-dom'

function Terms() {
    return (
        <div className="text-[#d2d2d2]">
            <div className="text-[15px] flex justify-center items-center border-b-2 border-[#323232] pb-3 font-bold">
                <Link to='/aboutus' className="flex justify-center items-center sm:w-[140px] w-[100px] text-[14px] ">
                    ABOUT US
                </Link>
                <Link to='/terms' className="flex relative text-[#ef8f1d] justify-center items-center sm:w-[115px] w-[80px] text-[14px] ">
                    <div className="absolute bottom-[-14px] left-0 h-[2px] sm:w-[115px] w-[80px] bg-[#ef8f1d]"></div>
                    TERMS
                </Link>
                <Link to='/policy' className="flex justify-center items-center sm:w-[190px] w-[165px] text-[14px] ">PRIVACY POLICY</Link>
                <Link to='/dmca' className="flex justify-center items-center sm:w-[106px] text-[14px] w-[70px] ">
                    DMCA
                </Link>
            </div>
            <div className="bg-[#222225] rounded-lg p-3 mt-7">
                <h1 className="text-[24px] font-bold">1- Write your Terms Of Use here.</h1>
                <p className="mt-7">Lorem ipsum dolor sit amet, consectetur adisdpisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis sdnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h1 className="text-[24px] font-bold mt-32">2- Random title</h1>
                <p className="mt-7">Lorem ipsum dolor sit amet, consectetur adisdpisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis sdnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )
}

export default Terms
