import React from 'react'
import {BsMusicNoteBeamed} from 'react-icons/bs'
import { MdLibraryMusic } from 'react-icons/md'

function Albums() {
    return (
        <div className="text-[white]">
            <div className="h-[200px] w-[100%] bg-[#5f9ea0] rounded-xl albumbg overflow-hidden relative flex justify-center items-center">
                <div className="absolute top-[-10px] left-[-80px] w-[250px] h-[250px] rounded-full bg-white opacity-5"></div>
                <div className="absolute top-[-400px] right-[20px] w-[550px] h-[500px] rounded-full bg-white opacity-5"></div>
                <div className="flex flex-col items-center">
                    <div className="w-[55px] h-[55px] rounded-full bg-[#ffffff1a] text-white flex justify-center items-center text-[28px]">
                        <MdLibraryMusic />
                    </div>
                    <h1 className="text-[38px] mt-2">Albums</h1>
                </div>
            </div>
            <div className="h-[280px] w-[100%] bg-[#222225] rounded-xl mt-6 flex flex-col items-center justify-center">
                <BsMusicNoteBeamed className="text-[40px]" />
                <h1 className=" mt-4">No more songs</h1>
            </div>
        </div>
    )
}

export default Albums
