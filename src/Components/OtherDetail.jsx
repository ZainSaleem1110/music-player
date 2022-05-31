import React from 'react'
import Img from '../assets/others.jpg'
import MusicCard from './musicCard'
import Song01 from '../assets/songs1.jpeg'
import Song02 from '../assets/songs2.jpg'

const Other = [
    { Image: Song01, name: "M.G'$ My Nigga", country: "Newyauk", time: "2:34" },
    { Image: Song01, name: "M.G'$ starring M", country: "Newyauk", time: "3:15" },
    { Image: Song01, name: "M.G'$ starring M", country: "Newyauk", time: "2:05" },
    { Image: Song02, name: "Mira hacia mi", country: "Newyauk", time: "1:50" },
]

function OtherDetail() {
    return (
        <div className="flex sm:flex-row flex-col">
            <div className="text-white border-b border-[#ffffff4d] w-[100%] pb-3 mb-4 mt-2 sm:hidden flex">
                <h1 className="text-[22px] ml-3">Latest Songs in Other</h1>
            </div>
            <div className="sm:w-[35%] w-[100%]">
                <div className="w-[105px] h-[105px] rounded-lg relative">
                    <img src={Img} className="rounded-lg w-[105px] h-[105px]" alt="" />
                    <div className="w-[105px] h-[105px] absolute top-0 left-0 flex items-end px-3 py-2 text-white text[24px] font-bold">
                        Others
                    </div>
                </div>
            </div>
            <div className="sm:w-[65%] w-[100%] sm:mt-0 mt-5">
                <MusicCard Data={Other} />
            </div>
        </div>
    )
}

export default OtherDetail
