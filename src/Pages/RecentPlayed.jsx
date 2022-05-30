import React from 'react'
import { MdReplay10 } from 'react-icons/md'
import SongCard from '../Components/songCard'
import Song01 from '../assets/songs1.jpeg'

const NewPlayed = [
    { Image: Song01, name: "M.G'$ starring M...", country: "Newyauk" },
]

function RecentPlayed() {
    return (
        <>
            <div className="mt-12 flex justify-between items-center">
                <div className="flex items-center text-white">
                <div className="w-[32px] h-[32px] bg-[#4caf50] flex justify-center items-center rounded-full">
                        <MdReplay10 className="text-[24px]" />
                    </div>
                    <h1 className="text-[22px] ml-3">Recently Played</h1>
                </div>
            </div>
            <div className="h-[1px] bg-[#ffffff4d] mt-4"></div>
            <SongCard Data={NewPlayed} />
            <div className="flex justify-center mt-10 ">
                    <button className="text-[#f98f1d] bg-[#2C2C2F] px-14 py-1 rounded-full ">
                        Load More
                    </button>
                </div>
        </>
    )
}

export default RecentPlayed
