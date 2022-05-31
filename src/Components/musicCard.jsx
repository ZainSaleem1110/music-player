import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

function MusicCard({ Data }) {
    const navigate = useNavigate()
    const [MusicListing] = useState(Data)
    const handleDetailPage = () => {
        navigate('/songPlay')
    }
    return (
        <>
            {MusicListing.map((list, index) => {
                return <div className="h-[60px] w-[100%] flex justify-between items-center px-5 text-white hover:bg-[#35434acc] border-b border-[#ffffff4d] relative">
                    <div className="flex items-center cursor-pointer" onClick={handleDetailPage}>
                        <h1>{index + 1}</h1>
                        <img src={list.Image} className="w-[40px] h-[40px] ml-6" alt="" />
                        <div className="ml-4">
                            <h1 className="text-[18px] font-bold">{list.name}</h1>
                            <h1 className="text-[13px] text-[#ffffff4d]">{list.country}</h1>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <h3>{list.time}</h3>
                        <div>
                            <BsThreeDots className="ml-3 cursor-pointer" />
                        </div>
                    </div>
                </div>
            })
            }
            {/* <div className="absolute right-0 bottom-0 bg-[#222225] rounded-lg">
                <div className="h-[36px] hover:bg-[#2c2c2f] flex items-center px-3">
                    Add to Playlist
                </div>
                <div className="h-[36px] hover:bg-[#2c2c2f] flex items-center px-3">
                    Share
                </div>
            </div> */}
        </>
    )
}

export default MusicCard
