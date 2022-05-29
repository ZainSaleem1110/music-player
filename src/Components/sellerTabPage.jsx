import React from 'react'
import { BsGraphUp, BsCartFill } from 'react-icons/bs'
import { MdLibraryMusic } from 'react-icons/md'

function SellerTabPage() {
    return (
        <div>
            <div className="flex items-center text-white border-b border-[#ffffff4d] w-[100%] pb-3 mb-4 mt-20">
                    <div className="w-[32px] h-[32px] bg-[#9c27b0] flex justify-center items-center rounded-full">
                        <BsGraphUp className="text-[16px]" />
                    </div>
                    <h1 className="text-[22px] ml-3">Top Songs</h1>
                </div>
                <div className="flex items-center text-white border-b border-[#ffffff4d] w-[100%] pb-3 mb-4 mt-20">
                    <div className="w-[32px] h-[32px] bg-[#9c27b0] flex justify-center items-center rounded-full">
                        <MdLibraryMusic className="text-[16px]" />
                    </div>
                    <h1 className="text-[22px] ml-3">Top Albums</h1>
                </div>
                <div className="flex items-center text-white border-b border-[#ffffff4d] w-[100%] pb-3 mb-4">
                    <div className="w-[32px] h-[32px] bg-[#9c27b0] flex justify-center items-center rounded-full">
                        <BsCartFill className="text-[16px]" />
                    </div>
                    <h1 className="text-[22px] ml-3">Top Products</h1>
                </div>
        </div>
    )
}

export default SellerTabPage
