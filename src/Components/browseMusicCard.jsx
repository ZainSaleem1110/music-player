import React from 'react'
import Song01 from '../assets/songs1.jpeg'
import { BsThreeDots } from 'react-icons/bs'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import {FiBox} from "react-icons/fi"

function BrowseMusicCard() {
    return (
        <div className="flex gap-x-8 items-start">
            <div className="w-[75%]">
                <div className="h-[112px] bg-[#222225] rounded-lg flex items-center px-3 text-white">
                    <img src={Song01} className="w-[90px] h-[90px] rounded-lg" alt="" />
                    <div className="w-[100%] ml-3">
                        <div className="border-b border-[#363636] pb-3">
                            <h1 className="text-[17px]">M.G'$ Rules of the Game</h1>
                            <p className="text-[14px] text-[#bdbdbe]">Newyauk</p>
                        </div>
                        <div className="flex justify-end w-[85%]">
                            <div className="w-[55%] flex justify-between items-center text-[14px] mt-3">
                                <p>1:27</p>
                                <p>about a month ago</p>
                                <div className="cursor-pointer">
                                    <BsThreeDots />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-10 ">
                    <button className="text-[#f98f1d] bg-[#2C2C2F] px-14 py-1 rounded-full ">
                        Load More
                    </button>
                </div>
            </div>
            <div className="w-[25%] ">
                <div className="bg-[#222225] rounded-lg p-3">
                    <div className="flex items-center">
                        <div className="w-[30px] h-[30px] bg-[#7367f0] rounded-full flex justify-center items-center"><FaRegMoneyBillAlt /></div>
                        <p className="ml-2">Price</p>
                    </div>
                    <p className="mt-3">Price Range:</p>
                    <p className="mt-1">$0 - $19</p>
                    <input type="range" id="vol" name="vol" min="0" max="19" className="w-[100%]
                mt-3"/>
                </div>
                <div className="bg-[#222225] rounded-lg p-3 mt-3">
                    <div className="flex items-center">
                        <div className="w-[30px] h-[30px] bg-[#4caf50] rounded-full flex justify-center items-center"><FiBox /></div>
                        <p className="ml-2">Genres</p>
                    </div>
                    <div className="flex items-center mt-3">
                        <input type="checkbox" id="vol" name="vol" min="0" max="19" classname="border-2"/>
                        <label className="ml-2">Other</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrowseMusicCard
