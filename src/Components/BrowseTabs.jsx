import React from 'react'
import {BsMusicNoteBeamed,BsGraphUp,BsCartFill} from 'react-icons/bs'
import {MdLibraryMusic} from 'react-icons/md'
import { Link } from 'react-router-dom'

function BrowseTabs() {
    return (
        <div className="flex justify-center items-center h-[108px] w-[100%] gap-5 border-b-2 border-[#444444] pb-7">
            <Link to="/browse" className="bg-[#272729] border border-[#444444] flex flex-col items-center justify-center rounded-lg py-3 px-6">
                <div className="w-[33px] h-[33px] bg-[#f98f1d] text-white rounded-full flex justify-center items-center text-[20px]"><BsMusicNoteBeamed/></div>
                <p className="text-[#f98f20]">Songs</p>
            </Link>
            <button className="border border-[#444444] text-[#afafaf] flex flex-col items-center justify-center rounded-lg py-3 px-6">
                <div className="w-[33px] h-[33px] rounded-full flex justify-center items-center text-[20px]"><MdLibraryMusic/></div>
                <p>Albums</p>
            </button>
            <button className="border border-[#444444] text-[#afafaf] flex flex-col items-center justify-center rounded-lg py-3 px-6">
                <div className="w-[33px] h-[33px] rounded-full flex justify-center items-center text-[20px]"><BsGraphUp/></div>
                <p>Top Seller</p>
            </button>
            <button className="border border-[#444444] text-[#afafaf] flex flex-col items-center justify-center rounded-lg py-3 px-6">
                <div className="w-[33px] h-[33px] rounded-full flex justify-center items-center text-[20px]"><BsCartFill/></div>
                <p>Products</p>
            </button>
        </div>
    )
}

export default BrowseTabs
