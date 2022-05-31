import React, { useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

function StandardCard({ Data }) {
    const [List] = useState(Data)
    const navigate=useNavigate()
    const handleDetailPage=()=>{
        navigate('/songPlay')
    }
    console.log(List, "listing")
    return (
        <div className="flex gap-5">
            {List && List.map((listing, index) => {
                return <div className="w-[350px] h-[200px] rounded-md relative cursor-pointer rounded-xl songsCard" onClick={handleDetailPage}>
                    <div className="w-[100%] h-[100%] relative">
                        <img src={listing.Image} className="w-[100%] h-[100%] rounded-xl" alt="" />
                        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#1c1c1cb3] flex justify-center items-center rounded-xl">
                            <div className="w-[60px] h-[60px] bg-[#000000b3] rounded-full flex justify-center items-center text-[26px] text-white play">
                                <FaPlay />
                            </div>
                        </div>
                        <h1 className="text-white font-bold text-[26px] absolute bottom-2 left-5">{listing.name}</h1>
                    </div>
                </div>
            })
            }
        </div>
    )
}

export default StandardCard
