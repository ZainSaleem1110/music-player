import React from 'react'
import { MdLibraryMusic } from 'react-icons/md'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { FiBox } from "react-icons/fi"

function AlbumsTabPage() {
    return (
        <div className="flex sm:flex-row flex-col  gap-x-8 items-start">
            <div className="sm:w-[75%] w-[100%] h-[277px] bg-[#222225] rounded-lg flex flex-col items-center text-white justify-center ">
                <MdLibraryMusic className="text-[28px]" />
                <p className="text-[20px] mt-3">No more albums</p>
            </div>
            <div className="sm:w-[25%] w-[100%] sm:mt-0 mt-5">
                <div className="bg-[#222225] rounded-lg p-3">
                    <div className="flex items-center">
                        <div className="w-[30px] h-[30px] bg-[#7367f0] rounded-full flex justify-center items-center"><FaRegMoneyBillAlt /></div>
                        <p className="ml-2">Price</p>
                    </div>
                    <p className="mt-3">Price Range:</p>
                    <p className="mt-1">$0 - $19</p>
                    <input type="range" id="vol" name="vol" min="0" max="19" className="w-[100%] mt-3"/>
                </div>
                <div className="bg-[#222225] rounded-lg p-3 mt-3">
                    <div className="flex items-center">
                        <div className="w-[30px] h-[30px] bg-[#4caf50] rounded-full flex justify-center items-center"><FiBox /></div>
                        <p className="ml-2">Genres</p>
                    </div>
                    <div className="flex items-center mt-3">
                        <input type="checkbox" id="vol" name="vol" min="0" max="19" classname="border-2" />
                        <label className="ml-2">Other</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlbumsTabPage
