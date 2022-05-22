import React from 'react'
import { BsFillFileMusicFill } from 'react-icons/bs'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import TopSongsCard from '../Components/TopSongs'

function TopSongs() {
    return (
        <>
            <div className="mt-12 flex justify-between items-center border-b border-[#ffffff4d] w-[100%] pb-3 mb-4 mt-6">
                <div className="flex items-center text-white">
                    <div className="w-[32px] h-[32px] bg-[#2196F3] flex justify-center items-center rounded-full">
                        <BsFillFileMusicFill className="text-[20px]" />
                    </div>
                    <h1 className="text-[22px] ml-3">Best New Releases</h1>
                </div>
                <div className="flex items-center">
                    <button className="w-[26px] h-[26px] rounded-full border-none focus:outline-none bg-[#ffffff4d] flex justify-center items-center text-[#171719]">
                        <IoIosArrowBack />
                    </button>
                    <button className="w-[26px] h-[26px] rounded-full border-none focus:outline-none bg-[#ffffff4d] ml-2 flex justify-center items-center text-[#171719]">
                        <IoIosArrowForward />
                    </button>
                </div>
            </div>
            <div className="mt-32">
                <TopSongsCard />
            </div>
        </>
    )
}

export default TopSongs
