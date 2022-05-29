import React from 'react'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { FiBox } from "react-icons/fi"
import {BsMusicNoteBeamed} from 'react-icons/bs'

function ProductTabPage() {
    return (
            <div className="flex gap-x-8 items-start">
            <div className="w-[75%] h-[277px] bg-[#222225] rounded-lg flex flex-col items-center text-white justify-center ">
                <BsMusicNoteBeamed className="text-[28px]" />
                <p className="text-[20px] mt-3">No more songs</p>
            </div>
            <div className="w-[25%] ">
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
                        <p className="ml-2">Category</p>
                    </div>
                    <div className="flex items-center mt-3">
                        <input type="checkbox" id="vol" name="vol" min="0" max="19" classname="border-2" />
                        <label className="ml-2">Clothes</label>
                    </div>
                    <div className="flex items-center mt-3">
                        <input type="checkbox" id="vol" name="vol" min="0" max="19" classname="border-2" />
                        <label className="ml-2">Electronic</label>
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

export default ProductTabPage
