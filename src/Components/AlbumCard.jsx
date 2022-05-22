import React from 'react'
import CardImg from '../assets/albumcard.PNG'

function AlbumCard() {
    return (
        <div className="mt-10">
            <div className="w-[135px] h-[135px] rounded-md bg-[#222225] relative cursor-pointer flex justify-center items-center">
                <img src={CardImg} alt="" />
                <div className="absolute top-[-10px] left-[-10px] w-[25px] h-[25px] rounded-full bg-[#656565] text-white flex justify-center items-center">1</div>
            </div>
            <div className="mt-2">
                <h1 className="text-[18px] font-bold text-white">See All</h1>
                <h1 className="text-[13px] text-[#ffffff4d]">Albums</h1>
            </div>
        </div>
    )
}

export default AlbumCard
