import React from 'react'
import LoginImg from '../assets/login.svg'
import { Link } from 'react-router-dom'

function Signup() {
    return (
        <div className="w-[55%] h-[520px] rounded-lg flex">
            <div className="w-[40%] h-[100%] bg-[#f98f1d] rounded-l-lg flex flex-col justify-between py-10 pl-7">
                <div>
                    <h1 className="text-[32px] font-bold">Signup</h1>
                    <p className="mt-2 w-[70%]">Get access to your music, playlists and account</p>
                </div>
                <img src={LoginImg} className="w-[100%]" alt="" />
            </div>
            <div className="w-[60%] h-[100%] bg-white rounded-r-lg px-8 py-10">
                <input type="text" className="h-[40px] border w-[100%] rounded-md bg-[#f3f3f3] focus:outline-none pl-5 font-medium text-[#767e86]" placeholder="Full Name" />
                <input type="text" className="h-[40px] border w-[100%] rounded-md bg-[#f3f3f3] focus:outline-none pl-5 mt-4 font-medium text-[#767e86]" placeholder="Username" />
                <input type="email" className="h-[40px] border w-[100%] rounded-md bg-[#f3f3f3] focus:outline-none pl-5 mt-4 font-medium text-[#767e86]" placeholder="Email address" />
                <input type="password" className="h-[40px] border w-[100%] rounded-md bg-[#f3f3f3] focus:outline-none pl-5 mt-4 font-medium text-[#767e86]" placeholder="Password" />
                <input type="password" className="h-[40px] border w-[100%] rounded-md bg-[#f3f3f3] focus:outline-none pl-5 mt-4 font-medium text-[#767e86]" placeholder="Confirm Password" />
                <button className="h-[40px] w-[100%] bg-[#f98f1d] flex items-center justify-center font-medium rounded-md mt-4">
                    Login
                </button>
                <p className="text-[#767e86] font-medium mt-8 text-center">Already have an account? <span><Link to="/login" className="text-[#f98f1d] font-bold">Login</Link></span></p>
                <p className="text-[#767e86] text-[14px] mt-14 text-center">By signing up, you agree to our <Link to="/terms" className="text-[#f98f1d] font-bold">Terms</Link> and <Link to="/privacy" className="text-[#f98f1d] font-bold">Privacy Policy</Link></p>
            </div>
        </div>
    )
}

export default Signup
