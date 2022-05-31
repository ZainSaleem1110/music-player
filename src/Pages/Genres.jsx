import React from 'react'
import Img from '../assets/others.jpg'
import { Link } from 'react-router-dom'

function Genres() {
    return (
        <Link to="/otherDetail" className="text-[white] w-[200px] h-[200px] rounded-lg othersAlbum relative cursor-pointer">
            <img src={Img} className="rounded-lg w-[200px] h-[200px]" alt="" />
            <div className="absolute top-0 left-0 othersAlbum w-[200px] h-[200px] rounded-lg flex justify-center items-center">
                <h1 className="text-[28px] font-bold">Other</h1>
            </div>
        </Link>
    )
}

export default Genres
