import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className="h-[60px] w-[100%] bg-[#222225] flex px-6 justify-between items-center border border-[black]">
                <div className="bg-[black] rounded-xl h-[40px] w-[470px] flex px-4 text-[lightgray] text-[16px] items-center">
                    <AiOutlineSearch/>
                    <input type="text" placeholder="Search for songs, artists, playlists and more..." className="border-none focus:outline-none bg-[transparent] ml-4 w-[100%]" />
                </div>
                <div className="flex">
                    <Link to="/" className="h-[35px] w-[90px] rounded-md flex items-center justify-center text-[white]">
                        Login
                    </Link>
                    <Link to="/" className="h-[35px] w-[90px] rounded-md flex items-center justify-center text-[#f98f1d] bg-[#f9901f40]">
                        Register
                    </Link>
                </div>
            </div>
    )
}

export default Navbar
