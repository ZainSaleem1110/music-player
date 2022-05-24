import React from 'react'
import { FiBarChart ,FiUsers } from 'react-icons/fi'

function HallOfFame() {
    return (
        <div className="text-[white]">
            <div className="flex items-center text-white border-b border-[#ffffff4d] pb-3">
                <div className="w-[32px] h-[32px] bg-[#f98f1d] flex justify-center items-center rounded-full">
                    <FiBarChart className="text-[24px]" />
                </div>
                <h1 className="text-[22px] ml-3">Hall of fame</h1>
            </div>
            <div className="h-[280px] w-[100%] bg-[#222225] rounded-xl mt-6 flex flex-col items-center justify-center">
                <FiUsers className="text-[40px]" />
                <h1 className=" mt-4">No artists found.</h1>
            </div>
        </div>
    )
}

export default HallOfFame
