import React from 'react'
import Img from '../assets/others.jpg'

function Genres() {
    return (
        <div className="text-[white] w-[200px] h-[200px] rounded-lg othersAlbum relative cursor-pointer">
            <img src={Img} className="rounded-lg" alt="" />
            <div className="absolute top-0 left-0 othersAlbum w-[200px] h-[200px] rounded-lg flex justify-center items-center">
                <h1 className="text-[28px] font-bold">Other</h1>
            </div>
        </div>
    )
}

export default Genres
