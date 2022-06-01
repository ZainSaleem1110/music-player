import React, { useState } from "react";
import { BsFillShareFill } from 'react-icons/bs'
import { FaFacebookSquare, FaTwitterSquare, FaGooglePlusSquare } from 'react-icons/fa'
import Song01 from '../assets/songs1.jpeg'

export default function Modal() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button
                className="w-[100px] h-[40px] rounded-md bg-[#ffffff] text-[black] flex items-center justify-center"
                type="button"
                onClick={() => setShowModal(true)}
            >
                <BsFillShareFill />
                <span className="ml-2 font-bold">Share</span>
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" style={{ background: 'rgba(0,0,0,40%)' }}
                    >
                        <div className="relative my-6 mx-auto">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col outline-none focus:outline-none bg-[#222225] w-[500px]">
                                <div className="flex items-start justify-between px-5 pt-5 rounded-t">
                                    <h1 className="font-semibold text-[20px]">
                                        Share this song
                                    </h1>
                                </div>
                                <div className="w-[100%] flex justify-center">
                                <div className="text-[15px] flex justify-center items-center border-b-2 border-[#323232] pb-3 font-bold w-[40%] mt-7">
                                    <button to='/aboutus' className="flex relative text-[#ef8f1d] justify-center items-center w-[100px] text-[14px] ">
                                    <div className="absolute bottom-[-14px] left-0 h-[2px] w-[100px] bg-[#ef8f1d]"></div>
                                        SHARE
                                    </button>
                                    <button to='/terms' className="flex justify-center items-center w-[100px] text-[14px] ">
                                        EMBED
                                    </button>
                                </div>
                                </div>
                                <div className="flex gap-x-5 p-5">
                                    <img src={Song01} className="w-[136px] h-[136px]" alt="" />
                                    <div className="text-[#cfcfcf] w-full">
                                        <h1 className="text-[17px]">M.G'$ My Nigga</h1>
                                        <h1>Newyauk</h1>
                                        <div className="flex gap-x-2 mt-3">
                                            <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fnewyauk.com%252Ftrack%252Fq5wLVWpXI5kb3xT&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB" className="text-[#4267b2]"><FaFacebookSquare className="h-[28px] w-[28px]" /></a>
                                            <a href="https://twitter.com/intent/tweet?text=M.G%27$%20%20%20%20%20My%20Nigga&url=https%3A%2F%2Fnewyauk.com%2Ftrack%2Fq5wLVWpXI5kb3xT" className="text-[#1da1f2]"><FaTwitterSquare className="h-[28px] w-[28px]" /></a>
                                            <a href="https://plus.google.com/share?url=https%3A%2F%2Fnewyauk.com%2Ftrack%2Fq5wLVWpXI5kb3xT" className="text-[#dc4938]"><FaGooglePlusSquare className="h-[28px] w-[28px]" /></a>
                                        </div>
                                        <input type="text" name="" id="" value="https://newyauk.com/track/q5wLVWpXI5kb3xT" className="h-[34px] rounded-md bg-[#171719] w-[100%] px-2 mt-3" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-end px-6 py-3 border-t border-solid  border-[#ffffff4d] rounded-b">
                                    <button
                                        className="background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150  text-[#f98f1d] border rounded-md border-[#ffffff4d]"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}
