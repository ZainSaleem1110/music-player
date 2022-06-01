import React from 'react'
import {AiOutlineStar} from 'react-icons/ai'

function favourite() {
    return (
        <div className="text-[white]">
            <div className="flex items-center text-white border-b border-[#ffffff4d] w-[100%] pb-3 mb-4 mt-10">
                <div className="w-[32px] h-[32px] bg-[#e4ab00] flex justify-center items-center rounded-full">
                    <AiOutlineStar className="text-[16px]" />
                </div>
                <h1 className="text-[22px] ml-3">My Favorites</h1>
            </div>
            <p className="mt-3">You currently have 0 favorite songs</p>
        </div>
    )
}

export default favourite
