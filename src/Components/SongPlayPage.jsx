import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Song01 from '../assets/songs1.jpeg'
import Wave from '../assets/wave.PNG'
import { ImUsers } from 'react-icons/im'
import { BsMusicNoteBeamed, BsFillPlayFill, BsPlayFill, BsFillHeartFill, BsFillShareFill, BsFillPauseFill, BsStarFill, BsThreeDots, BsEmojiSmile } from 'react-icons/bs'
import Music1 from '../assets/1.m4a'
import { IoMdHeartDislike } from 'react-icons/io'
import { FaCommentAlt, FaFolderPlus } from 'react-icons/fa'
import { Menu, Transition } from '@headlessui/react'
import ShareModal from './ShareModal'

const Card = [
    { Img: Song01, Name: "Mira hacia mí", detail: "Newyauk" },
    { Img: Song01, Name: "M.G'$ My Nigga", detail: "Newyauk" },
    { Img: Song01, Name: "M.G'$ starring Money $keems", detail: "Newyauk" },
    { Img: Song01, Name: "The Bed Breaks Louder", detail: "Newyauk" },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
function SongPlayPage() {
    const [play, setPlay] = useState(false)
    const navigate = useNavigate()
    const hanleOpenOtherPage = () => {
        navigate('/otherDetailPage')
    }
    const handlePlay = () => {
        var start = document.getElementById("myAudio")
        setPlay(true)
        start.play()
    }
    const handlePause = () => {
        var stop = document.getElementById("myAudio")
        setPlay(false)
        stop.pause()
    }
    return (
        <>
            <div className="text-white py-2">
                <div className="px-5 bg-[#252528]">
                    <div className="flex sm:flex-row flex-col justify-between items-center pt-3">
                        <p className="">Published about a month ago in <span className="cursor-pointer text-[#f98f1d]" onClick={hanleOpenOtherPage}>Other</span></p>
                        <div className="flex items-center sm:mt-0 mt-3">
                            <div className="w-[40px] h-[40px] rounded-full">
                                <img src={Song01} className="rounded-full" alt="" />
                            </div>
                            <p className="ml-3">Newyauk</p>
                            <div className="mx-4 w-[1px] h-[40px] bg-[#323232]"></div>
                            <div className="flex items-center relative w-[26px] h-[35px]">
                                <ImUsers />
                                <p className="absolute top-0 right-0">3</p>
                            </div>
                            <div className="flex items-center relative w-[26px] h-[35px] ml-3">
                                <BsMusicNoteBeamed />
                                <p className="absolute top-0 right-[-4px]">5</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col md:items-start items-center mt-14">
                        <div className="w-[250px] h-[250px] rounded-lg relative">
                            <img src={Song01} alt="" />
                            {play == false && (
                                <div className="ml-5 text-[64px] text-[#f98f1d] md:hidden flex absolute top-[100px] left-[80px] cursor-pointer w-[70px] h-[70px] rounded-full border border-[6px] border-[#f98f1d] justify-center items-center" onClick={handlePlay}>
                                    <BsFillPlayFill />
                                </div>
                            )}
                            {play == true && (
                                <div className="ml-5 text-[64px] text-[#f98f1d] md:hidden flex absolute top-[100px] left-[80px] cursor-pointer w-[70px] h-[70px] rounded-full border border-[6px] border-[#f98f1d] justify-center items-center" onClick={handlePause}>
                                    <BsFillPauseFill />
                                </div>
                            )}
                        </div>
                        <div className="mt-1 flex">
                            {play == false && (
                                <div className="ml-5 text-[64px] w-[70px] h-[70px] rounded-full border border-[6px] border-[#f98f1d] text-[#f98f1d] md:flex hidden cursor-pointer flex justify-center items-center" onClick={handlePlay}>
                                    <BsFillPlayFill />
                                </div>
                            )}
                            {play == true && (
                                <div className="ml-5 text-[64px] w-[70px] h-[70px] rounded-full border border-[6px] border-[#f98f1d] text-[#f98f1d] md:flex hidden cursor-pointer flex justify-center items-center" onClick={handlePause}>
                                    <BsFillPauseFill />
                                </div>
                            )}
                            <div className="ml-5">
                                <div>
                                    <h1 className="text-[28px] md:mt-0 mt-3">M.G'$ Rules of the Game</h1>
                                </div>
                                <div className="flex items-center gap-x-6 mt-2">
                                    <div className="flex items-center">
                                        <BsPlayFill className="text-[28px]" style={{ color: "rgb(30, 238, 108)" }} />
                                        <p className="ml-1">39</p>
                                    </div>
                                    <div className="flex items-center">
                                        <BsFillHeartFill className="text-[20px]" style={{ color: "red" }} />
                                        <p className="ml-1">1</p>
                                    </div>
                                    <div className="flex items-center">
                                        <IoMdHeartDislike className="text-[20px] text-[#4e7390]" />
                                        <p className="ml-1">0</p>
                                    </div>
                                    <div className="flex items-center">
                                        <BsFillShareFill className="text-[20px]" />
                                        <p className="ml-2">9</p>
                                    </div>
                                    <div className="flex items-center">
                                        <FaCommentAlt className="text-[20px]" />
                                        <p className="ml-2">0</p>
                                    </div>
                                    <div className="flex items-center">
                                        <BsStarFill className="text-[20px] text-[#f98f1d]" />
                                        <p className="ml-1">0</p>
                                    </div>
                                    <div className="items-center md:flex hidden">
                                        <FaFolderPlus className="text-[20px]" style={{ color: "rgb(1, 148, 1)" }} />
                                        <p className="ml-2">0</p>
                                    </div>
                                </div>
                                <div className="w-[55px] h-[2px] bg-[#323232] mt-6 ml-1"></div>
                                <p className="mt-3">#RULESOFTHEGAME</p>
                                <p className="mt-3">#rulesofthegame</p>
                            </div>
                        </div>
                    </div>
                    <img src={Wave} className="mt-3" alt="" />
                </div>
                <div className="flex items-center justify-between py-4 border-b border-[#ffffff4d]">
                    <div className="flex items-center">
                        <ShareModal />
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="w-[100px] h-[40px] rounded-md bg-[#ffffff] text-[black] font-bold flex items-center justify-center ml-4">
                                    <BsThreeDots className="text-[16px] mr-2 text-[black]" aria-hidden="true" />
                                    More
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#222225] ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                                    <div className="py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'bg-[#2c2c2f] text-[#cccccc]' : 'text-[#cccccc]',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Add to Playlist
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                    <p>$1.99</p>
                </div>
                <div className="flex md:flex-row flex-col mt-8 gap-x-4">
                    <div className="lg:w-[70%] md:w-[60%] w-[100%]">
                        <div className="h-[55px] border border-[#ffffff4d] bg-[#252528] rounded-lg w-[100%] flex gap-x-3 items-center px-3">
                            <img src={Song01} className="w-[35px] h-[35px]" alt="" />
                            <input type="text" className="w-[100%] bg-[transparent] focus:outline-none" name="" id="" placeholder="Write a comment and press enter" />
                            <BsEmojiSmile className="text-[20px]" />
                        </div>
                        <div className="flex items-center gap-x-3 mt-6 pb-2 border-b border-[#ffffff4d]">
                            <FaCommentAlt />
                            <p>0 Comments</p>
                        </div>
                        <div className="h-[270px] bg-[#252528] rounded-lg mt-2 flex flex-col items-center justify-center">
                            <FaCommentAlt className="text-[28px]" />
                            <p className="mt-2">No comment found</p>
                        </div>
                    </div>
                    <div className="lg:w-[30%] md:w-[40%] w-[100%] md:mt-0 mt-5">
                        <div className="bg-[#252528] rounded-lg px-3 py-2">
                            <div className="">
                                <div className="flex gap-x-3 items-center">
                                    <div className="w-[32px] h-[32px] rounded-full bg-[#7367f0]
                                flex justify-center items-center">
                                        <BsMusicNoteBeamed />
                                    </div>
                                    <p className="font-bold">More Tracks</p>
                                </div>
                            </div>
                            {Card && Card.map((list, index) => {
                                return <div className="flex gap-x-3 items-center my-4">
                                    <div className="w-[50px] h-[50px] rounded-md">
                                        <img src={list.Img} alt="" />
                                    </div>
                                    <div>
                                        <p className="text-[17px]">{list.Name}</p>
                                        <p className="text-[14px]">{list.detail}</p>
                                    </div>
                                </div>
                            })}
                        </div>
                        <div className="bg-[#252528] rounded-lg px-3 py-2 mt-4">
                            <div className="">
                                <div className="flex gap-x-3 items-center">
                                    <div className="w-[32px] h-[32px] rounded-full bg-[#7367f0]
                                flex justify-center items-center">
                                        <BsMusicNoteBeamed />
                                    </div>
                                    <p className="font-bold">Recently Listened by</p>
                                </div>
                            </div>
                            <div className="w-[100%] overflow-x-hidden">
                                <div className="w-auto overflow-x-auto flex items-center gap-x-5">
                                    {Card && Card.map((list, index) => {
                                        return <div className="my-4 flex flex-col justify-center" key={index}>
                                            <div className="w-[100px] h-[100px] rounded-md rounded-full">
                                                <img src={list.Img} className="rounded-full" alt="" />
                                            </div>
                                            <p className="text-[14px] text-center mt-2">{list.detail}</p>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <audio id="myAudio" onEnded={handlePause}>
                    <source src={Music1} type="audio/ogg" />
                    <source src={Music1} type="audio/mpeg" />
                </audio>
        </>
    )
}

export default SongPlayPage
