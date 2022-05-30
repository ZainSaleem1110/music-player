import React from 'react'
import {IoMdAppstore} from 'react-icons/io'

function Purchase() {
    return (
        <div className="text-[white]">
            <div className="flex items-center text-white border-b border-[#ffffff4d] w-[100%] pb-3 mb-4 mt-10">
                <div className="w-[32px] h-[32px] bg-[#3e50b3] flex justify-center items-center rounded-full">
                    <IoMdAppstore className="text-[16px]" />
                </div>
                <h1 className="text-[22px] ml-3">My Purchases</h1>
            </div>
            <p className="mt-5 text-center">No purchased tracks found.</p>
        </div>
    )
}

export default Purchase
