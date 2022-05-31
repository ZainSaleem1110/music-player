import React from 'react'
import PointsImg from '../assets/points.png'
import PointsCard from '../Components/PointsCard'
import { BsFillPlayFill, BsFillCloudArrowDownFill, BsFillLightningFill } from 'react-icons/bs'
import { BiMessage } from 'react-icons/bi'
import { MdUpload, MdFileDownload, MdImage, MdOutlinePlaylistAdd } from 'react-icons/md'
import { AiFillLike, AiFillDislike, AiFillStar, AiFillWarning } from 'react-icons/ai'
import { RiPlayListFill } from 'react-icons/ri'
import { ImLoop } from 'react-icons/im'
import { IoMdAppstore } from 'react-icons/io'

const PointsList = [
    { Icon: <BsFillPlayFill/>, points: "12", detail: "Points on listening to a song." },
    { Icon: <BiMessage/>, points: "10", detail: "Points by posting a comment." },
    { Icon: <MdUpload/>, points: "30", detail: "Points by uploading a song." },
    { Icon: <BiMessage/>, points: "40", detail: "Points by replying to a comment." },
    { Icon: <AiFillLike/>, points: "45", detail: "Points by liking a track." },
    { Icon: <AiFillDislike/>, points: "50", detail: "Points on disliking a track." },
    { Icon: <AiFillLike/>, points: "55", detail: "Points on liking a comment." },
    { Icon: <RiPlayListFill/>, points: "87", detail: "Points on creating new playlist." },
    { Icon: <ImLoop/>, points: "60", detail: "Points on re-posting a track." },
    { Icon: <MdFileDownload/>, points: "65", detail: "Points on downloading a track." },
    { Icon: <AiFillLike/>, points: "70", detail: "Points on liking a blog's comment." },
    { Icon: <AiFillDislike/>, points: "55", detail: "Points on disliking a comment." },
    { Icon: <AiFillDislike/>, points: "70", detail: "Points on disliking a blog's comment." },
    { Icon: <BsFillCloudArrowDownFill/>, points: "80", detail: "Points by importing a song." },
    { Icon: <MdImage/>, points: "5", detail: "Points by updating your profile picture." },
    { Icon: <IoMdAppstore/>, points: "81", detail: "Points on purchasing a track." },
    { Icon: <BsFillLightningFill/>, points: "82", detail: "Points by purchasing a PRO package." },
    { Icon: <AiFillStar/>, points: "83", detail: "Points by reviewing a track." },
    { Icon: <AiFillWarning/>, points: "84", detail: "Points on reporting a track." },
    { Icon: <AiFillWarning/>, points: "85", detail: "Points on reporting a comment." },
    { Icon: <MdOutlinePlaylistAdd/>, points: "86", detail: "Points on adding track to a playlist." },
    { Icon: <MdImage/>, points: "10", detail: "Points on updating your profile cover." },
]

function Points() {
    return (
        <div className="text-[white]">
            <div className="flex sm:flex-row flex-col items-center mt-2">
                <img src={PointsImg} alt="" />
                <div className="ml-8">
                    <h1 className="sm:text-[32px] text-[24px]">
                        Points System
                        <span className="text-[#F98F1D] text-[14px] tracking-widest ml-3">(1 Point = 0.001 USD)</span>
                    </h1>
                    <div className="mt-4 flex md:flex-row flex-col items-center gap-x-4">
                        <div className="w-[260px] h-[115px] bg-[#3a3116] text-[#FFC107] rounded-lg flex items-center justify-center">
                            <h1 className="text-[75px] flex items-center">
                                0.00
                                <span className="text-[19px] font-bold tracking-widest ml-3">points</span>
                            </h1>
                        </div>
                        <div className="w-[260px] h-[115px] bg-[#1f2e21] text-[#4CAF50] rounded-lg flex items-center justify-center md:mt-0 mt-4">
                            <h1 className="text-[75px] flex items-center">
                                $0.00
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#3d5060] h-[72px] w-[100%] mt-12 rounded-lg flex flex-col justify-center px-4">
                <p>You can earn points and transfer them to your wallet by doing the activities below.</p>
                <p>Login or Register to start earning points!</p>
            </div>
            <PointsCard Data={PointsList} />
        </div>
    )
}

export default Points
