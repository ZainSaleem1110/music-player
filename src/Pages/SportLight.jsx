import React, { Fragment } from 'react'
import { BsPlug, BsThreeDots, BsClock } from 'react-icons/bs'
import { FaPlay } from 'react-icons/fa'
import Song01 from '../assets/songs1.jpeg'
import { Menu, Transition } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function SportLight() {
    const navigate = useNavigate()
const handleDetailPage = () => {
    navigate('/songPlay')
}
    return (
        <div className="text-[white]">
            <div className="h-[200px] w-[100%] bg-[lightslategray] rounded-xl albumbg overflow-hidden relative flex justify-center items-center">
                <div className="absolute top-[-10px] left-[-80px] w-[250px] h-[250px] rounded-full bg-white opacity-5"></div>
                <div className="absolute top-[-400px] right-[20px] w-[550px] h-[500px] rounded-full bg-white opacity-5"></div>
                <div className="flex flex-col items-center">
                    <div className="w-[55px] h-[55px] rounded-full bg-[#ffffff1a] text-white flex justify-center items-center text-[28px]">
                        <BsPlug />
                    </div>
                    <h1 className="text-[38px] mt-2">Spotlight</h1>
                </div>
            </div>
            <div>
                <div className="h-[60px] w-[65%] flex justify-between items-center text-white cursor-pointer mt-10">
                    <div className="flex items-center relative">
                        <img src={Song01} className="w-[45px] h-[45px] rounded-full" alt="" />
                        <div className="ml-4">
                            <h1 className="text-[18px] font-bold">
                                Newyauk</h1>
                            <h1 className="text-[13px] text-[#ffffff4d]">
                                Uploaded a new song, Uploaded a new song,
                            </h1>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="relative">
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="inline-flex justify-center w-full rounded-md px-4 py-2 text-sm font-medium focus:outline-none text-white">
                                        <BsThreeDots className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
                    </div>
                </div>
                <div className="ml-14 mt-4 sportlight_parent">
                    <div className="py-3 md:w-[64%] w-[100%] flex justify-between items-center px-3 text-white hover:bg-[#ffffff0d] bg-[#222225] cursor-pointer rounded-lg" onClick={handleDetailPage}>
                        <div className="flex items-center">
                            <div className="relative w-[70px] h-[70px]">
                                <img src={Song01} className="w-[70px] h-[70px] rounded-sm" alt="" />
                                <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#35434acc] flex justify-center items-center rounded-sm sportlight">
                                    <div className="w-[35px] h-[35px] bg-[#d2d2d2] rounded-full flex justify-center items-center text-[14px] text-[#171719]">
                                        <FaPlay />
                                    </div>
                                </div>
                            </div>
                            <div className="ml-4">
                                <h1 className="text-[18px] font-bold">M.G'$ My Nigga</h1>
                            </div>
                        </div>
                        <div className="flex items-center text-[#ffffff4d]">
                            <div className="relative mr-3">
                                <BsClock className="cursor-pointer" />
                            </div>
                            <h3>2:34</h3>
                        </div>
                    </div>
                </div>
                <button className="text-[#f98f1d] bg-[#2C2C2F] px-14 py-1 rounded-full mt-10 ml-[30%]">
                    Load More
                </button>
            </div>
        </div>
    )
}

export default SportLight
