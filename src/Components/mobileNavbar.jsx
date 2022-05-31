import React, { useState } from 'react'
import { AiOutlineSearch, AiOutlineClose,AiOutlineStar } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { FaBars,FaStoreAlt } from 'react-icons/fa'
import LoginImg from '../assets/login.svg'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { BsMusicNoteBeamed, BsMusicNote, BsGraphUp, BsFillCalendarEventFill } from 'react-icons/bs'
import { MdLibraryMusic, MdPlaylistPlay, MdReplay10,MdOutlineSearch } from 'react-icons/md'
import { RiDropFill, RiExchangeDollarLine, RiPlayListFill } from 'react-icons/ri'
import { FiBarChart, FiBox } from 'react-icons/fi'
import { IoMdAppstore } from 'react-icons/io'

function MobileNavbar() {
    const [loginPage, setLoginPage] = useState(false)
    const [signPage, setSignPage] = useState(false)
    const [searchbar, setSearchbar] = useState(0)

    const handleLogin = () => {
        setLoginPage(true)
        setSignPage(false)
    }
    const handleCloseLoginPage = () => {
        setLoginPage(false)
        setSignPage(false)
    }
    const handleSignup = () => {
        setSignPage(true)
        setLoginPage(false)
    }
    const handleDropdown = () => {
        var Dropdown = document.querySelector('.profileDropdown')
        Dropdown.classList.toggle("profileDrop");
    }

    const handleSearchbar = () => {
        setSearchbar(1)
    }

    const handleCloseSearchbar = () => {
        setSearchbar(0)
    }

    const sidebar = () => {
        var sidebar = document.querySelector('.sidebar').style
        sidebar.width = "100%"
        sidebar.transition = ".5s"
    }

    const closeSidebar = () => {
        var sidebar = document.querySelector('.sidebar').style
        sidebar.width = "0%"
        sidebar.transition = ".5s"
    }


    return (
        <>
            <div className="h-[60px] w-[100%] bg-[#222225] flex px-6 justify-between items-center border border-[black]">
                {searchbar == 0 && (
                    <>
                        <div className="flex items-center">
                            <FaBars className="text-white text-[20px] mr-5" onClick={sidebar} />
                            <img src={Logo} className="w-[100px]" alt="" />
                        </div>
                        <div className="flex gap-x-3 text-[white] text-[24px]">
                            <MdOutlineSearch onClick={handleSearchbar} />
                            <CgProfile onClick={handleDropdown} />
                            <div className="absolute rounded-lg top-12 right-6 border-b border-[#ffffff4d] z-50 text-[16px] w-[170px] bg-[#222225] profileDropdown profileDrop">
                                <button className="h-[35px] w-[100%] rounded-md flex items-center px-3 text-[white]" onClick={handleLogin}>
                                    Login
                                </button>
                                <button className="h-[35px] w-[100%] px-3 rounded-md flex items-center">
                                    Register
                                </button>
                            </div>
                        </div>
                    </>
                )}
                {searchbar == 1 && (
                    <div className="bg-[black] rounded-xl h-[40px] w-[100%] flex px-4 text-[lightgray] text-[16px] items-center">
                        <AiOutlineSearch />
                        <input type="text" placeholder="Search for songs, artists, playlists and more..." className="border-none focus:outline-none bg-[transparent] ml-4 w-[100%]" />
                        <AiOutlineClose className="bg-[#2b2b2b] w-[25px] h-[25px] text-white rounded-full text-[16px]" onClick={handleCloseSearchbar} />
                    </div>
                )}
            </div>

            {loginPage == true && (
                <div className="absolute top-0 left-0 w-[100%] h-[100vh] text-[white] flex justify-center items-center z-50" style={{ background: "rgba(255,255,255,.3)" }} onClick={handleCloseLoginPage}>
                    <div className="w-[95%] h-[520px] rounded-lg flex">
                        <div className="w-[40%] h-[100%] bg-[#f98f1d] rounded-l-lg flex flex-col justify-between py-10 pl-7">
                            <div>
                                <h1 className="text-[32px] font-bold">Login</h1>
                                <p className="mt-2 w-[70%]">Get access to your music, playlists and account</p>
                            </div>
                            <img src={LoginImg} className="w-[100%]" alt="" />
                        </div>
                        <div className="w-[60%] h-[100%] bg-white rounded-r-lg px-8 py-10">
                            <input type="text" className="h-[40px] border w-[100%] rounded-md bg-[#f3f3f3] focus:outline-none pl-5 font-medium text-[#767e86]" placeholder="Username" />
                            <input type="text" className="h-[40px] border w-[100%] rounded-md bg-[#f3f3f3] focus:outline-none pl-5 mt-4 font-medium text-[#767e86]" placeholder="Password" />
                            <Link to="forgotPass" className="text-[#f98f1d] font-medium mt-1 flex justify-end text-[14px]">Forgot your password?</Link>
                            <button className="h-[40px] w-[100%] bg-[#f98f1d] flex items-center justify-center font-medium rounded-md mt-10">
                                Login
                            </button>
                            <p className="text-[#767e86] font-medium mt-8 text-center">Don't have an account? <span><button className="text-[#f98f1d] font-bold" onClick={handleSignup}>Sign Up</button></span></p>
                        </div>
                    </div>
                </div>
            )}
            {signPage == true && (
                <div className="absolute top-0 left-0 w-[100%] h-[100vh] text-[white] flex justify-center items-center z-50" style={{ background: "rgba(255,255,255,.3)" }} onClick={handleCloseLoginPage}>
                    <div className="w-[95%] h-[520px] rounded-lg flex">
                        <div className="w-[40%] h-[100%] bg-[#f98f1d] rounded-l-lg flex flex-col justify-between py-10 pl-7">
                            <div>
                                <h1 className="text-[32px] font-bold">Signup</h1>
                                <p className="mt-2 w-[70%]">Get access to your music, playlists and account</p>
                            </div>
                            <img src={LoginImg} className="w-[100%]" alt="" />
                        </div>
                        <div className="w-[60%] h-[100%] bg-white rounded-r-lg px-8 py-10">
                            <input type="text" className="h-[40px] border w-[100%] rounded-md bg-[#f3f3f3] focus:outline-none pl-5 font-medium text-[#767e86]" placeholder="Full Name" />
                            <input type="text" className="h-[40px] border w-[100%] rounded-md bg-[#f3f3f3] focus:outline-none pl-5 mt-4 font-medium text-[#767e86]" placeholder="Username" />
                            <input type="email" className="h-[40px] border w-[100%] rounded-md bg-[#f3f3f3] focus:outline-none pl-5 mt-4 font-medium text-[#767e86]" placeholder="Email address" />
                            <input type="password" className="h-[40px] border w-[100%] rounded-md bg-[#f3f3f3] focus:outline-none pl-5 mt-4 font-medium text-[#767e86]" placeholder="Password" />
                            <input type="password" className="h-[40px] border w-[100%] rounded-md bg-[#f3f3f3] focus:outline-none pl-5 mt-4 font-medium text-[#767e86]" placeholder="Confirm Password" />
                            <button className="h-[40px] w-[100%] bg-[#f98f1d] flex items-center justify-center font-medium rounded-md mt-4">
                                Login
                            </button>
                            <p className="text-[#767e86] font-medium mt-8 text-center">Already have an account? <span><button className="text-[#f98f1d] font-bold" onClick={handleLogin}>Login</button></span></p>
                            <p className="text-[#767e86] text-[14px] mt-14 text-center">By signing up, you agree to our <Link to="/terms" className="text-[#f98f1d] font-bold">Terms</Link> and <Link to="/privacy" className="text-[#f98f1d] font-bold">Privacy Policy</Link></p>
                        </div>
                    </div>
                </div>
            )}
            <div className='h-[100vh] sidebar z-50 overflow-y-auto category absolute top-0 left-0' style={{ background: 'rgba(0,0,0,40%)' }}>
            <div className="h-[100vh] bg-[#222225] sm:w-[40%] w-[70%] overflow-y-auto overflow-x-hidden">
                    <div className="py-2 flex justify-center w-[100%] bg-[#222225]">
                        <img src={Logo} className="w-[100px]" alt="" />
                    </div>
                    <div className="text-white lg:my-24 my-4 font-bold">
                        <h1 className="text-[12px] pl-6 text-[lightgray]">BROWSER MUSIC</h1>
                        <Link to="/" className="h-[40px] flex items-center text-[15px] pl-6  mt-3 btn active" onClick={closeSidebar}>
                            <BsMusicNoteBeamed className="text-[20px]" />
                            <span className="ml-7">Discover</span>
                        </Link>
                        <Link to="/newMusic" className="h-[40px] flex items-center text-[15px] pl-6 btn " onClick={closeSidebar}>
                            <BsMusicNote className="text-[20px]" />
                            <span className="ml-7">New Music</span>
                        </Link>
                        <Link to="/topMusic" className="h-[40px] flex items-center text-[15px] pl-6 btn " onClick={closeSidebar}>
                            <BsGraphUp className="text-[20px]" />
                            <span className="ml-7">Top Music</span>
                        </Link>
                        <Link to="/albums" className="h-[40px] flex items-center text-[15px] pl-6 btn" onClick={closeSidebar}>
                            <MdLibraryMusic className="text-[20px]" />
                            <span className="ml-7">Albums</span>
                        </Link>
                        <Link to="/sportLight" className="h-[40px] flex items-center text-[15px] pl-6 btn" onClick={closeSidebar}>
                            <RiDropFill className="text-[20px]" />
                            <span className="ml-7">Sportlight</span>
                        </Link>
                        <Link to="/genres" className="h-[40px] flex items-center text-[15px] pl-6 btn" onClick={closeSidebar}>
                            <FiBox className="text-[20px]" />
                            <span className="ml-7">Genres</span>
                        </Link>
                        <Link to="/playlists" className="h-[40px] flex items-center text-[15px] pl-6 btn" onClick={closeSidebar}>
                            <MdPlaylistPlay className="text-[28px]" />
                            <span className="ml-5">Playlists</span>
                        </Link>
                        <Link to="/fame" className="h-[40px] flex items-center text-[15px] pl-6 btn" onClick={closeSidebar}>
                            <FiBarChart className="text-[20px]" />
                            <span className="ml-7">Hall of fame</span>
                        </Link>
                        <Link to="/points" className="h-[40px] flex items-center text-[15px] pl-6 btn" onClick={closeSidebar}>
                            <RiExchangeDollarLine className="text-[20px]" />
                            <span className="ml-7">Earn Points</span>
                        </Link>
                        <h1 className="text-[12px] pl-6  mt-7 text-[lightgray]">
                            STORE
                        </h1>
                        <Link to="/browse" className="h-[40px] flex items-center text-[15px] pl-6  mt-3 btn" onClick={closeSidebar}>
                            <FaStoreAlt className="text-[20px]" />
                            <span className="ml-7">Browse</span>
                        </Link>
                        <Link to="/purchase" className="h-[40px] flex items-center text-[15px] pl-6 btn" onClick={closeSidebar}>
                            <IoMdAppstore className="text-[20px]" />
                            <span className="ml-7">Purchased</span>
                        </Link>
                        <h1 className="text-[12px] pl-6  mt-7 text-[lightgray]">
                            YOUR MUSIC
                        </h1>
                        <Link to="/recentPlayed" className="h-[40px] flex items-center text-[15px] pl-6 mt-3 btn" onClick={closeSidebar}>
                            <MdReplay10 className="text-[28px]" />
                            <span className="ml-5">Recently Played</span>
                        </Link>
                        <Link to="/myPlaylist" className="h-[40px] flex items-center text-[15px] pl-6 btn" onClick={closeSidebar}>
                            <RiPlayListFill className="text-[20px]" />
                            <span className="ml-7">My Playlists</span>
                        </Link>
                        <Link to="/favourite" className="h-[40px] flex items-center text-[15px] pl-6 btn" onClick={closeSidebar}>
                            <AiOutlineStar className="text-[20px]" />
                            <span className="ml-7">Favourite</span>
                        </Link>
                        <h1 className="text-[12px] pl-6 mt-7 text-[lightgray]">
                            Events
                        </h1>
                        <Link to="/event" className="h-[40px] flex items-center text-[15px] pl-6  lg:mt-3 mt-7 btn" onClick={closeSidebar}>
                            <BsFillCalendarEventFill className="text-[20px]" />
                            <span className="ml-7">Events</span>
                        </Link>
                        <div className="h-[1px] bg-[gray] w-[87%] my-5 ml-3"></div>
                            <div className="px-6 text-[12px] text-[#B0B0B0]">
                                <div className="flex justify-between">
                                    <h1>© 2022 newyauk</h1>
                                </div>
                                <div className="flex flex-wrap mt-2">
                                    <Link to="/dmca" className="hover:text-white" onClick={closeSidebar}>DMCA .</Link>
                                    <Link to="/blog" className="hover:text-white ml-1" onClick={closeSidebar}>Blogs .</Link>
                                    <Link to="/aboutUs" className="hover:text-white ml-1" onClick={closeSidebar}>About US .</Link>
                                    <Link to="/terms" className="hover:text-white ml-1" onClick={closeSidebar}>Terms .</Link>
                                    <Link to="/contact" className="hover:text-white ml-1" onClick={closeSidebar}>Contact .</Link>
                                    <Link to="/policy" className="hover:text-white ml-1" onClick={closeSidebar}>Privacy Policy</Link>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileNavbar
