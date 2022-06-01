import React from 'react'
import Logo from '../assets/logo.jpeg'
import { Link } from 'react-router-dom'
import { BsMusicNoteBeamed, BsMusicNote, BsGraphUp, BsFillCalendarEventFill } from 'react-icons/bs'
import { MdLibraryMusic, MdLoyalty, MdPlaylistPlay, MdReplay10 } from 'react-icons/md'
import { RiDropFill, RiExchangeDollarLine, RiPlayListFill } from 'react-icons/ri'
import { FiBarChart, FiBox } from 'react-icons/fi'
import { FaStoreAlt } from 'react-icons/fa'
import { IoMdAppstore } from 'react-icons/io'
import { AiOutlineStar } from 'react-icons/ai'

function Sidebar() {

    const SelectOption=()=>{
        var sidebarParent=document.querySelector('.sidebarParent')
        var sidebarOption=document.querySelectorAll('.sidebarOption')
        sidebarOption.forEach(el=>{
            el.addEventListener('click',()=>{
                sidebarParent.querySelector('.active').classList.remove('active')
                el.classList.add('active')
            })
        })
    }

    return (
        <>
            <div className="lg:w-[18%] w-[70px] h-[100vh] bg-[#222225] overflow-y-auto md:flex hidden overflow-x-hidden">
                <div className="flex bg-[black] items-center justify-center fixed top-0 left-0 w-[18%] bg-[#222225] lg:flex hidden h-[60px]">
                    <img src={Logo} className="w-[50px] h-[47px]" alt="" />
                </div>
                <div className="text-white lg:my-24 my-4 font-bold sidebarParent">
                    <h1 className="text-[12px] pl-6 text-[lightgray] lg:flex hidden">BROWSER MUSIC</h1>
                    <Link to="/" className="h-[40px] flex items-center text-[15px] pl-6  mt-3 btn active sidebarOption" onClick={SelectOption}>
                        <BsMusicNoteBeamed className="text-[20px]" />
                        <span className="ml-7">Discover</span>
                    </Link>
                    <Link to="/newMusic" className="h-[40px] flex items-center text-[15px] pl-6 btn sidebarOption" onClick={SelectOption}>
                        <BsMusicNote className="text-[20px]" />
                        <span className="ml-7">New Music</span>
                    </Link>
                    <Link to="/topMusic" className="h-[40px] flex items-center text-[15px] pl-6 btn sidebarOption" onClick={SelectOption}>
                        <BsGraphUp className="text-[20px]" />
                        <span className="ml-7">Top Music</span>
                    </Link>
                    <Link to="/albums" className="h-[40px] flex items-center text-[15px] pl-6 btn sidebarOption" onClick={SelectOption}>
                        <MdLibraryMusic className="text-[20px]" />
                        <span className="ml-7">Albums</span>
                    </Link>
                    <Link to="/sportLight" className="h-[40px] flex items-center text-[15px] pl-6 btn sidebarOption" onClick={SelectOption}>
                        <RiDropFill className="text-[20px]" />
                        <span className="ml-7">Sportlight</span>
                    </Link>
                    <Link to="/genres" className="h-[40px] flex items-center text-[15px] pl-6 btn sidebarOption" onClick={SelectOption}>
                        <FiBox className="text-[20px]" />
                        <span className="ml-7">Genres</span>
                    </Link>
                    <Link to="/playlists" className="h-[40px] flex items-center text-[15px] pl-6 btn sidebarOption" onClick={SelectOption}>
                        <MdPlaylistPlay className="text-[28px]" />
                        <span className="ml-5">Playlists</span>
                    </Link>
                    <Link to="/fame" className="h-[40px] flex items-center text-[15px] pl-6 btn sidebarOption" onClick={SelectOption}>
                        <FiBarChart className="text-[20px]" />
                        <span className="ml-7">Hall of fame</span>
                    </Link>
                    <Link to="/points" className="h-[40px] flex items-center text-[15px] pl-6 btn sidebarOption" onClick={SelectOption}>
                        <RiExchangeDollarLine className="text-[20px]" />
                        <span className="ml-7">Earn Points</span>
                    </Link>
                    <h1 className="text-[12px] pl-6  mt-7 text-[lightgray] lg:h-auto md:h-[1px] lg:bg-[transparent] bg-[lightgray]">
                        <span className="lg:flex hidden">STORE</span>
                    </h1>
                    <Link to="/browse" className="h-[40px] flex items-center text-[15px] pl-6  mt-3 btn sidebarOption" onClick={SelectOption}>
                        <FaStoreAlt className="text-[20px]" />
                        <span className="ml-7">Browse</span>
                    </Link>
                    <Link to="/purchase" className="h-[40px] flex items-center text-[15px] pl-6 btn sidebarOption" onClick={SelectOption}>
                        <IoMdAppstore className="text-[20px]" />
                        <span className="ml-7">Purchased</span>
                    </Link>
                    <h1 className="text-[12px] pl-6  mt-7 text-[lightgray] lg:h-auto md:h-[1px] lg:bg-[transparent] bg-[lightgray]">
                        <span className="lg:flex hidden">YOUR MUSIC</span>
                    </h1>
                    <Link to="/recentPlayed" className="h-[40px] flex items-center text-[15px] pl-6 mt-3 btn sidebarOption" onClick={SelectOption}>
                        <MdReplay10 className="text-[28px]" />
                        <span className="lg:ml-5 ml-7">Recently Played</span>
                    </Link>
                    <Link to="/myPlaylist" className="h-[40px] flex items-center text-[15px] pl-6 btn sidebarOption" onClick={SelectOption}>
                        <RiPlayListFill className="text-[20px]" />
                        <span className="ml-7">My Playlists</span>
                    </Link>
                    <Link to="/favourite" className="h-[40px] flex items-center text-[15px] pl-6 btn sidebarOption" onClick={SelectOption}>
                        <AiOutlineStar className="text-[20px]" />
                        <span className="ml-7">Favourite</span>
                    </Link>
                    <h1 className="text-[12px] pl-6  mt-7 text-[lightgray] lg:h-auto md:h-[1px] lg:bg-[transparent] bg-[lightgray]">
                        <span className="lg:flex hidden">Events</span>
                    </h1>
                    <Link to="/event" className="h-[40px] flex items-center text-[15px] pl-6  lg:mt-3 mt-7 btn sidebarOption" onClick={SelectOption}>
                        <BsFillCalendarEventFill className="text-[20px]" />
                        <span className="ml-7">Events</span>
                    </Link>
                    <Link to="/loyality" className="h-[40px] flex items-center text-[15px] pl-6  lg:mt-3 mt-7 btn sidebarOption" onClick={SelectOption}>
                        <MdLoyalty className="text-[20px]" />
                        <span className="ml-7">Loyalty Split</span>
                    </Link>
                    <div className="h-[1px] bg-[gray] w-[87%] my-5 ml-3 lg:flex hidden"></div>
                    <div className="lg:flex hidden">
                        <div className="px-6 text-[12px] text-[#B0B0B0]">
                            <div className="flex justify-between">
                                <h1>© 2022 newyauk</h1>
                            </div>
                            <div className="flex flex-wrap mt-2 pb-5">
                                <Link to="/dmca" className="hover:text-white">DMCA .</Link>
                                <Link to="/blog" className="hover:text-white ml-1">Blogs .</Link>
                                <Link to="/aboutUs" className="hover:text-white ml-1">About US .</Link>
                                <Link to="/terms" className="hover:text-white ml-1">Terms .</Link>
                                <Link to="/contact" className="hover:text-white ml-1">Contact .</Link>
                                <Link to="/policy" className="hover:text-white ml-1">Privacy Policy</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
