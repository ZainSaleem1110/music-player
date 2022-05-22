import React from 'react'
import { BsMusicNote } from 'react-icons/bs'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import SongCard from '../Components/songCard'
import Song01 from '../assets/songs1.jpeg'
import Song02 from '../assets/songs2.jpg'
import {Link} from 'react-router-dom'

const NewPlayed = [
    { Image: Song01, name: "M.G'$ starring M...", country: "Newyauk" },
    { Image: Song01, name: "M.G'$ starring M...", country: "Newyauk" },
    { Image: Song01, name: "M.G'$ starring M...", country: "Newyauk" },
    { Image: Song02, name: "M.G'$ starring M...", country: "Newyauk" },
    { Image: Song02, name: "M.G'$ starring M...", country: "Newyauk" },
]

function NewRealease() {
    return (
        <>
            <div className="mt-12 flex justify-between items-center">
                <div className="flex items-center text-white">
                    <div className="w-[32px] h-[32px] bg-[#2196F3] flex justify-center items-center rounded-full">
                        <BsMusicNote className="text-[20px]" />
                    </div>
                    <h1 className="text-[22px] ml-3">New Realeases</h1>
                </div>
                <div className="flex items-center">
                    <Link to="/" className="text-[#ffffff4d] font-bold">Show All</Link>
                    <button className="w-[26px] h-[26px] rounded-full border-none focus:outline-none ml-4 bg-[#ffffff4d] flex justify-center items-center text-[#171719]">
                        <IoIosArrowBack />
                    </button>
                    <button className="w-[26px] h-[26px] rounded-full border-none focus:outline-none bg-[#ffffff4d] ml-2 flex justify-center items-center text-[#171719]">
                        <IoIosArrowForward />
                    </button>
                </div>
            </div>
            <div className="h-[1px] bg-[#ffffff4d] mt-4"></div>
            <SongCard Data={NewPlayed} />
        </>
    )
}

export default NewRealease
