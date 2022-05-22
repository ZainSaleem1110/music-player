import React from 'react'
import Song01 from '../assets/songs1.jpeg'
import Song02 from '../assets/songs2.jpg'
import { BsGraphUp } from 'react-icons/bs'
import { MdLibraryMusic } from 'react-icons/md'
import MusicCard from '../Components/musicCard'
import AlbumCard from '../Components/AlbumCard'

const MusicList1 = [
    { Image: Song01, name: "M.G'$ My Nigga", country: "Newyauk", time: "2:34" },
    { Image: Song01, name: "M.G'$ starring M", country: "Newyauk", time: "3:15" },
]

const MusicList2 = [
    { Image: Song02, name: "Mira hacia mi", country: "Newyauk", time: "1:50" },
    { Image: Song01, name: "M.G'$ My Nigga", country: "Newyauk", time: "2:34" },
    { Image: Song01, name: "M.G'$ starring M", country: "Newyauk", time: "3:15" },
]

function TopMusic() {
    return (
        <div>
            <div className="mt-4">
                <div className="flex items-center flex-col">
                    <div className="flex items-center text-white border-b border-[#ffffff4d] w-[100%] pb-3 mb-4">
                        <div className="w-[32px] h-[32px] bg-[#9c27b0] flex justify-center items-center rounded-full">
                            <BsGraphUp className="text-[16px]" />
                        </div>
                        <h1 className="text-[22px] ml-3">Top Songs</h1>
                    </div>
                    <div className="grid grid-cols-2 gap-8 w-[100%]">
                        <MusicCard Data={MusicList1} />
                        <MusicCard Data={MusicList2} />
                    </div>
                    <button className="text-[#f98f1d] bg-[#2C2C2F] px-14 py-1 rounded-full mt-10">
                        See All
                    </button>
                </div>
            </div>
            <div className="flex items-center text-white border-b border-[#ffffff4d] w-[100%] pb-3 mb-4 mt-20">
                <div className="w-[32px] h-[32px] bg-[#9c27b0] flex justify-center items-center rounded-full">
                    <MdLibraryMusic className="text-[16px]" />
                </div>
                <h1 className="text-[22px] ml-3">Top Albums</h1>
            </div>
            <AlbumCard />
        </div>
    )
}

export default TopMusic
