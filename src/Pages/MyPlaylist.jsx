import React, { useState } from 'react'
import { MdPlaylistPlay, MdPlaylistAdd } from 'react-icons/md'
import Img from '../assets/sidu.jpg'
import { BsMusicNoteBeamed, BsThreeDots, BsCameraFill } from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'

function MyPlaylist() {
    const [createModal, setCreateModal] = useState(0)
    const handleModal = () => {
        setCreateModal(1)
    }
    const handleCloseModal = () => {
        setCreateModal(0)
    }
    return (
        <>
            <div className="text-[white]">
                <div className="flex items-center text-white border-b border-[#ffffff4d] pb-3">
                    <div className="w-[32px] h-[32px] bg-[#e91e63] flex justify-center items-center rounded-full">
                        <MdPlaylistPlay className="text-[24px]" />
                    </div>
                    <h1 className="text-[22px] ml-3">My Playlists</h1>
                </div>
                <div className="flex justify-between items-center mt-3">
                    <p>You currently have 2 playlists.</p>
                    <button className="flex items-center justify-center bg-[#f98f1d] h-[28px] w-[100px] rounded-lg" onClick={handleModal}>
                        <MdPlaylistAdd className="text-[20px]" />
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
                    <div className="pr-5 mt-4 text-[#ffffff4d]">
                        <BsThreeDots />
                    </div>
                </div>
            </div>
            {createModal == 1 && (
                <div className="absolute top-0 left-0 w-[100%] h-[100vh] text-[white] flex justify-center items-center z-50" style={{ background: "rgba(255,255,255,.3)" }} onClick={handleCloseModal}>
                    <div className="w-[500px] py-5 bg-[#222225] rounded-lg z-50" onClick={handleModal}>
                        <h1 className="text-[20px] font-bold px-4">Create Playlist</h1>
                        <div className="flex gap-x-3 px-4 mt-6 border-b border-[#ffffff4d] pb-5 w-[100%]">
                            <div className="w-[120px] h-[120px] bg-[#2f2f32] rounded-lg cursor-pointer flex items-center justify-center text-[#7c7c7c]">
                                <BsCameraFill className="text-[32px]" />
                            </div>
                            <div className="w-[345px]">
                                <input type="text" className="w-[100%] h-[40px] bg-[#171719] text-[#d7d7d7] rounded-md pl-3" name="" id="" placeholder="Playlists Name" />
                                <div className="flex items-center mt-4">
                                    <input type="radio" name="radio" />
                                    <p className="ml-3">Public</p>
                                </div>
                                <div className="flex items-center mt-2">
                                    <input type="radio" name="radio" />
                                    <p className="ml-3">Private</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end items-center mt-4 px-4 gap-x-3">
                            <button className="flex items-center justify-center border text-[#f98f1d] h-[32px] w-[88px] rounded-lg" >
                                Cancel
                            </button>
                            <button className="flex items-center justify-center bg-[#f98f1d] h-[32px] w-[88px] rounded-lg">
                                Create
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default MyPlaylist
