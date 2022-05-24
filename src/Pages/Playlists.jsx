import React from 'react'
import { MdPlaylistPlay } from 'react-icons/md'
import { BsMusicNoteBeamed } from 'react-icons/bs'
import Song01 from '../assets/songs1.jpeg'

function Playlists() {
    return (
        <div className="text-[white]">
            <div className="flex items-center text-white border-b border-[#ffffff4d] pb-3">
                <div className="w-[32px] h-[32px] bg-[#e91e63] flex justify-center items-center rounded-full">
                    <MdPlaylistPlay className="text-[24px]" />
                </div>
                <h1 className="text-[22px] ml-3 text-[#e91e63]">Playlists</h1>
            </div>
            <div className="w-[200px] bg-[#222225] border border-[#ffffff4d] mt-6 rounded-lg cursor-pointer">
                <div className=" mt-3">
                    <div className="flex px-3 items-center">
                        <img src={Song01} className="w-[35px] h-[35px] rounded-full" alt="" />
                        <h1 className="ml-2">Newyauk</h1>
                    </div>
                    <div className="flex flex-col items-center mt-2">
                        <h1 className="text-[20px]">Loveless Streets</h1>
                        <div className="flex gap-2 items-center mt-1 text-[#ffffff4d]">
                            <BsMusicNoteBeamed />
                            <h1>0</h1>
                        </div>
                    </div>
                </div>
                <div className="w-[198px] h-[200px] mt-2">
                    <img src={Song01} className="w-[100%] h-[100%] rounded-b-lg" alt="" />
                </div>
            </div>
            <div className="flex justify-center">
                <button className="text-[#f98f1d] bg-[#2C2C2F] px-14 py-1 rounded-full mt-24">
                    Load More
                </button>
            </div>
        </div>
    )
}

export default Playlists
