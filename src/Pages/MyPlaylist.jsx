import React from 'react'
import { MdPlaylistPlay,MdPlaylistAdd } from 'react-icons/md'
import Img from '../assets/sidu.jpg'
import { BsMusicNoteBeamed } from 'react-icons/bs'
import {BiWorld} from 'react-icons/bi'

function MyPlaylist() {
    return (
        <div className="text-[white]">
            <div className="flex items-center text-white border-b border-[#ffffff4d] pb-3">
                <div className="w-[32px] h-[32px] bg-[#e91e63] flex justify-center items-center rounded-full">
                    <MdPlaylistPlay className="text-[24px]" />
                </div>
                <h1 className="text-[22px] ml-3">My Playlists</h1>
            </div>
            <div className="flex justify-between items-center mt-3">
                <p>You currently have 2 playlists.</p>
                <button className="flex items-center justify-center bg-[#f98f1d] h-[28px] w-[100px] rounded-lg">
                    <MdPlaylistAdd className="text-[20px]"/>
                    <p className="ml-1">Create</p>
                </button>
            </div>
            <div className="w-[340px] h-[102px] rounded-lg border border-[#ffffff4d] mt-6 flex justify-between">
                <div className="flex">
                    <img src={Img} className="rounded-l" alt="" />
                    <div className="flex flex-col justify-center ml-3">
                        <h1 className="text-[18px]">Taty</h1>
                        <div className="flex items-center mt-1 text-[#ffffff4d]">
                            <BsMusicNoteBeamed />
                            <p className="ml-2">0 Songs</p>
                        </div>
                        <div className="flex items-center mt-1 text-[#ffffff4d]">
                            <BiWorld />
                            <p className="ml-2">Private</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MyPlaylist
