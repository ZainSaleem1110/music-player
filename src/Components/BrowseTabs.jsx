import React, { useState } from 'react'
import { BsMusicNoteBeamed, BsGraphUp, BsCartFill } from 'react-icons/bs'
import { MdLibraryMusic } from 'react-icons/md'
import SongTabPage from './browseMusicCard'
import AlbumTabPage from './AlbumsTabPage'
import SellerTabPage from './sellerTabPage'
import ProductTabPage from './productTabPage'

function BrowseTabs() {
    const [tabs, setTabs] = useState(0)

    const handleTabOne=()=>{
        setTabs(0)
    }
    const handleTabTwo=()=>{
        setTabs(1)
    }
    const handleTabThree=()=>{
        setTabs(2)
    }
    const handleTabFour=()=>{
        setTabs(3)
    }

    return (
        <>
            <div className="flex sm:justify-center sm:items-center h-[120px] w-[100%] gap-x-5 border-b-2 border-[#444444] pb-7">
                <button className="bg-[#272729] border border-[#444444] flex flex-col items-center justify-center rounded-lg w-[88px] h-[84px]" onClick={handleTabOne}>
                    <div className="w-[33px] h-[33px] bg-[#f98f1d] text-white rounded-full flex justify-center items-center text-[20px]"><BsMusicNoteBeamed /></div>
                    <p className="text-[#f98f20]">Songs</p>
                </button>
                <button className="border border-[#444444] text-[#afafaf] flex flex-col items-center justify-center rounded-lg w-[98px] h-[84px]" onClick={handleTabTwo}>
                    <div className="w-[33px] h-[33px] rounded-full flex justify-center items-center text-[20px]"><MdLibraryMusic /></div>
                    <p>Albums</p>
                </button>
                <button className="border border-[#444444] text-[#afafaf] flex flex-col items-center justify-center rounded-lg w-[119px] h-[84px]" onClick={handleTabThree}>
                    <div className="w-[33px] h-[33px] rounded-full flex justify-center items-center text-[20px]"><BsGraphUp /></div>
                    <p>Top Seller</p>
                </button>
                <button className="border border-[#444444] text-[#afafaf] flex flex-col items-center justify-center rounded-lg w-[109px] h-[84px]" onClick={handleTabFour}>
                    <div className="w-[33px] h-[33px] rounded-full flex justify-center items-center text-[20px]"><BsCartFill /></div>
                    <p>Products</p>
                </button>
            </div>
            {tabs == 0 && (
                <div className="mt-8">
                    <SongTabPage />
                </div>
            )}
            {tabs == 1 && (
                <div className="mt-8">
                    <AlbumTabPage />
                </div>
            )}
            {tabs == 2 && (
                <div className="mt-8">
                    <SellerTabPage />
                </div>
            )}
            {tabs == 3 && (
                <div className="mt-8">
                    <ProductTabPage />
                </div>
            )}
        </>
    )
}

export default BrowseTabs
