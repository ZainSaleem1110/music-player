import React, { useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

function SongCard({ Data }) {
    const [recentPlayed] = useState(Data)
    const navigate = useNavigate()
    const handleDetailPage = () => {
        navigate('/songPlay')
    }
    return (
        <div className="flex gap-5 mt-7">
            {recentPlayed && recentPlayed.map((listing, index) => {
                return <div className="cursor-pointer card" onClick={handleDetailPage}>
                    <div className="w-[140px] h-[140px] rounded-lg relative">
                        <img src={listing.Image} className="rounded-lg" alt="" />
                        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#35434acc] flex justify-center items-center recentPlayed rounded-lg">
                            <div className="w-[35px] h-[35px] bg-[#d2d2d2] rounded-full flex justify-center items-center text-[14px] text-[#171719]">
                                <FaPlay />
                            </div>
                        </div>
                    </div>
                    <h1 className="text-white mt-2">{listing.name}</h1>
                    <p className="text-[#ffffff4d]">{listing.country}</p>
                </div>
            })
            }
        </div>
    )
}

export default SongCard
