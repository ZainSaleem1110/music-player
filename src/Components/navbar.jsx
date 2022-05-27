import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Login from './Login'

function Navbar() {
    const [loginPage, setLoginPage] = useState(false)

    const handleLogin = () => {
        setLoginPage(true)
    }

    return (
        <>
            <div className="h-[60px] w-[100%] bg-[#222225] flex px-6 justify-between items-center border border-[black]">
                <div className="bg-[black] rounded-xl h-[40px] w-[470px] flex px-4 text-[lightgray] text-[16px] items-center">
                    <AiOutlineSearch />
                    <input type="text" placeholder="Search for songs, artists, playlists and more..." className="border-none focus:outline-none bg-[transparent] ml-4 w-[100%]" />
                </div>
                <div className="flex">
                    <button className="h-[35px] w-[90px] rounded-md flex items-center justify-center text-[white]" onClick={handleLogin}>
                        Login
                    </button>
                    <button className="h-[35px] w-[90px] rounded-md flex items-center justify-center text-[#f98f1d] bg-[#f9901f40]">
                        Register
                    </button>
                </div>
            </div>
            {loginPage == true && (
                <div className="absolute top-0 left-0 w-[100%] h-[100vh] text-[white] flex justify-center items-center" style={{ background: "rgba(255,255,255,.3)" }}>
                    <Login />
                </div>
            )}
        </>
    )
}

export default Navbar
