import React from 'react'
import Song01 from '../assets/songs1.jpeg'
import {RiPlayListFill} from 'react-icons/ri'

function PlaylistDetail() {
    return (
        <div className="flex md:flex-row flex-col pt-14 gap-x-8">
            <div className="md:w-[35%] w-[100%] pl-6 flex flex-col items-center">
                <div className="w-[300px] h-[300px]">
                    <img src={Song01} alt="" />
                </div>
                <h1 className="text-white text-[28px] mt-4">Loveless Streets</h1>
                <p className="mt-2 text-[#b0b0b0] hover:text-white">Newyauk</p>
                <div className="flex gap-x-3 mt-5">
                    <button className="px-10 h-[38px] bg-[#28a745] rounded-full text-white font-bold text-[20px]">Play</button>
                    <button className="px-10 h-[38px] bg-white rounded-full text-[black] font-bold text-[20px]">Share</button>
                </div>
                <p className="mt-3 text-[#b0b0b0]">0 Songs • about a month ago</p>
            </div>
            <div className="md:w-[75%] w-[100%] h-[277px] bg-[#222225] rounded-lg flex flex-col items-center text-white justify-center md:mt-0 mt-5">
                <RiPlayListFill className="text-[28px]" />
                <p className="text-[20px] mt-3">No songs on this playlist yet.</p>
            </div>
        </div>
    )
}

export default PlaylistDetail
