import React from 'react'
import { MdReplay10 } from 'react-icons/md'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import SongCard from '../Components/songCard'
import Song01 from '../assets/songs1.jpeg'
import Song02 from '../assets/songs2.jpg'

const RecentPlayed = [
    { Image: Song01, name: "M.G'$ starring M...", country: "Newyauk" },
    { Image: Song02, name: "M.G'$ starring M...", country: "Newyauk" },
]

function PlayBar() {
    return (
        <>
            <div className="mt-12 flex justify-between items-center">
                <div className="flex items-center text-white">
                    <div className="w-[32px] h-[32px] bg-[#4caf50] flex justify-center items-center rounded-full">
                        <MdReplay10 className="text-[24px]" />
                    </div>
                    <h1 className="text-[22px] ml-3">Recently Played</h1>
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
            <div className="h-[1px] bg-[#ffffff4d] mt-4"></div>
            <SongCard Data={RecentPlayed} />
        </>
    )
}

export default PlayBar
