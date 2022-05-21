import React from 'react'
import StandardCard from '../Components/standardCard'
import Song01 from '../assets/songs1.jpeg'
import Song02 from '../assets/songs2.jpg'

const SongsList = [
    { Image: Song01, name: "M.G'$ My Nigga" },
    { Image: Song02, name: "Mira hacia mi" },
]

function Discover() {
    return (
        <div className="">
            <div className="">
                <StandardCard Data={SongsList} />
            </div>
        </div>
    )
}

export default Discover
