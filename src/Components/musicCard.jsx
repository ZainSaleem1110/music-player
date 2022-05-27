import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'

function MusicCard({ Data }) {
    const [MusicListing] = useState(Data)
    return (
        <div className="grid grid-cols-2 gap-x-5">
            {MusicListing.map((list, index) => {
                return <div className="h-[60px] w-[100%] flex justify-between items-center px-5 text-white hover:bg-[#35434acc] cursor-pointer border-b border-[#ffffff4d]">
                    <div className="flex items-center">
                        <h1>{index + 1}</h1>
                        <img src={list.Image} className="w-[40px] h-[40px] ml-6" alt="" />
                        <div className="ml-4">
                            <h1 className="text-[18px] font-bold">{list.name}</h1>
                            <h1 className="text-[13px] text-[#ffffff4d]">{list.country}</h1>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <h3>{list.time}</h3>
                        <div className="relative">
                            <BsThreeDots className="ml-3 cursor-pointer" />
                        </div>
                    </div>
                </div>
            })
            }
        </div>
    )
}

export default MusicCard
