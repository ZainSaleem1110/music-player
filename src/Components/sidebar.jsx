import React from 'react'
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import {BsMusicNoteBeamed,BsMusicNote,BsGraphUp,BsFillCalendarEventFill} from 'react-icons/bs'
import {MdLibraryMusic,MdPlaylistPlay,MdReplay10} from 'react-icons/md'
import {RiDropFill,RiExchangeDollarLine,RiPlayListFill} from 'react-icons/ri'
import {FiBarChart} from 'react-icons/fi'
import {FaStoreAlt} from 'react-icons/fa'
import {IoMdAppstore} from 'react-icons/io'
import {AiOutlineStar} from 'react-icons/ai'

function Sidebar() {
    return (
        <div className="w-[18%] h-[100vh] bg-[#222225] overflow-y-auto">
            <div className="py-2 flex justify-center fixed top-0 left-0 w-[18%] bg-[#222225]">
                <img src={Logo} className="w-[70%]" alt="" />
            </div>
            <div className="myDiv text-white my-24 font-bold">
                <h1 className="text-[12px] pl-6 text-[lightgray]">BROWSER MUSIC</h1>
                <Link to="/" className="h-[40px] flex items-center text-[15px] pl-6  mt-3 ">
                    <BsMusicNoteBeamed className="text-[20px]"/>
                    <span className="ml-7">Discover</span>
                </Link>
                <Link to="/newMusic" className="h-[40px] flex items-center text-[15px] pl-6 ">
                    <BsMusicNote className="text-[20px]"/>
                    <span className="ml-7">New Music</span>
                </Link>
                <Link to="/topMusic" className="h-[40px] flex items-center text-[15px] pl-6 ">
                    <BsGraphUp className="text-[20px]"/>
                    <span className="ml-7">Top Music</span>
                </Link>
                <Link to="/albums" className="h-[40px] flex items-center text-[15px] pl-6 ">
                    <MdLibraryMusic className="text-[20px]"/>
                    <span className="ml-7">Albums</span>
                </Link>
                <Link to="/sportLight" className="h-[40px] flex items-center text-[15px] pl-6 ">
                    <RiDropFill className="text-[20px]"/>
                    <span className="ml-7">Sportlight</span>
                </Link>
                <Link to="/genres" className="h-[40px] flex items-center text-[15px] pl-6 ">
                    <RiDropFill className="text-[20px]"/>
                    <span className="ml-7">Genres</span>
                </Link>
                <Link to="/playlists" className="h-[40px] flex items-center text-[15px] pl-6 ">
                    <MdPlaylistPlay className="text-[28px]"/>
                    <span className="ml-5">Playlists</span>
                </Link>
                <Link to="/fame" className="h-[40px] flex items-center text-[15px] pl-6 ">
                    <FiBarChart className="text-[20px]"/>
                    <span className="ml-7">Hall of fame</span>
                </Link>
                <Link to="/points" className="h-[40px] flex items-center text-[15px] pl-6 ">
                    <RiExchangeDollarLine className="text-[20px]"/>
                    <span className="ml-7">Earn Points</span>
                </Link>
                <h1 className="text-[12px] pl-6  mt-7 text-[lightgray]">STORE</h1>
                <Link to="/browse" className="h-[40px] flex items-center text-[15px] pl-6  mt-3">
                    <FaStoreAlt className="text-[20px]"/>
                    <span className="ml-7">Browse</span>
                </Link>
                <Link to="/purchase" className="h-[40px] flex items-center text-[15px] pl-6 ">
                    <IoMdAppstore className="text-[20px]"/>
                    <span className="ml-7">Purchased</span>
                </Link>
                <h1 className="text-[12px] pl-6  mt-7 text-[lightgray]">YOUR MUSIC</h1>
                <Link to="/recentPlayed" className="h-[40px] flex items-center text-[15px] pl-6  mt-3">
                    <MdReplay10 className="text-[28px]"/>
                    <span className="ml-5">Recently Played</span>
                </Link>
                <Link to="/myPlaylist" className="h-[40px] flex items-center text-[15px] pl-6 ">
                    <RiPlayListFill className="text-[20px]"/>
                    <span className="ml-7">My Playlists</span>
                </Link>
                <Link to="/favourite" className="h-[40px] flex items-center text-[15px] pl-6 ">
                    <AiOutlineStar className="text-[20px]"/>
                    <span className="ml-7">Favourite</span>
                </Link>
                <h1 className="text-[12px] pl-6  mt-7 text-[lightgray]">EVENTS</h1>
                <Link to="/event" className="h-[40px] flex items-center text-[15px] pl-6  mt-3">
                    <BsFillCalendarEventFill className="text-[20px]"/>
                    <span className="ml-7">Events</span>
                </Link>
                <div className="h-[1px] bg-[gray] w-[87%] my-5 ml-3"></div>
                <div className="px-6 text-[12px] text-[#B0B0B0]">
                    <div className="flex justify-between">
                        <h1>© 2022 newyauk</h1>
                        
                    </div>
                    <div className="flex flex-wrap mt-2">
                        <Link to="/" className="hover:text-white">DMCA .</Link>
                        <Link to="/" className="hover:text-white ml-1">Blogs .</Link>
                        <Link to="/" className="hover:text-white ml-1">About US .</Link>
                        <Link to="/" className="hover:text-white ml-1">Terms .</Link>
                        <Link to="/" className="hover:text-white ml-1">Contact .</Link>
                        <Link to="/" className="hover:text-white ml-1">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
