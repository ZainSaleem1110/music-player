import React from 'react'
import StandardCard from '../Components/standardCard'
import Song01 from '../assets/songs1.jpeg'
import Song02 from '../assets/songs2.jpg'
import RecentPlayed from '../Components/recentPlayed'
import NewRealease from '../Components/NewRealease'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { AiFillLike } from 'react-icons/ai'
import MusicCard from '../Components/musicCard'
import {MdStore} from 'react-icons/md'

const SongsList = [
    { Image: Song01, name: "M.G'$ My Nigga" },
    { Image: Song02, name: "Mira hacia mi" },
]

const MusicList = [
    { Image: Song01, name: "M.G'$ My Nigga", country: "Newyauk", time: "2:34" },
    { Image: Song01, name: "M.G'$ starring M", country: "Newyauk", time: "3:15" },
    { Image: Song02, name: "Mira hacia mi", country: "Newyauk", time: "1:50" },
]

const Popular = [
    { Image: Song01, name: "M.G'$ My Nigga", country: "Newyauk", time: "2:34" },
    { Image: Song01, name: "M.G'$ starring M", country: "Newyauk", time: "3:15" },
    { Image: Song01, name: "M.G'$ starring M", country: "Newyauk", time: "2:05" },
    { Image: Song02, name: "Mira hacia mi", country: "Newyauk", time: "1:50" },
]

function Discover() {
    return (
        <div>
            <StandardCard Data={SongsList} />
            <RecentPlayed />
            <NewRealease />
            <div className="grid grid-cols-2 mt-20 gap-8">
                <div className="">
                    <div className="flex items-center text-white border-b border-[#ffffff4d] w-[100%] pb-3 mb-4">
                        <div className="w-[32px] h-[32px] bg-[#9c27b0] flex justify-center items-center rounded-full">
                            <BsFillCalendarDateFill className="text-[16px]" />
                        </div>
                        <h1 className="text-[22px] ml-3">Most Popular This Week</h1>
                    </div>
                    <MusicCard Data={MusicList} />
                </div>

                <div className="">
                    <div className="flex items-center text-white border-b border-[#ffffff4d] w-[100%] pb-3 mb-4">
                        <div className="w-[32px] h-[32px] bg-[#f98f1d] flex justify-center items-center rounded-full">
                            <AiFillLike className="text-[20px]" />
                        </div>
                        <h1 className="text-[22px] ml-3">Recommended</h1>
                    </div>
                    <MusicCard Data={Popular} />
                </div>
            </div>
            <div className="flex items-center text-white border-b border-[#ffffff4d] w-[100%] pb-3 mb-4 mt-6">
                <div className="w-[32px] h-[32px] bg-[#20c997] flex justify-center items-center rounded-full">
                    <MdStore className="text-[20px]" />
                </div>
                <h1 className="text-[22px] ml-3">Best Selling Songs & Products This Week</h1>
            </div>
        </div>
    )
}

export default Discover
