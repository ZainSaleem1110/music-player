import React from 'react'

function Contact() {
    return (
        <div className="w-[100%] flex justify-center text-white">
            <div className="w-[420px] p-7 mt-8 flex flex-col items-center rounded-lg bg-[#222225]">
                <h1 className="text-[26px] font-bold">Contact Us</h1>
                <p className="text-[#d2d2d2] mt-1">Let us help you.</p>
                <div className="w-[100%] mt-14">
                    <input type="text" name="" id="" className="h-[40px] text-white pl-4 rounded-md bg-[#171719] w-[100%]" placeholder="Full Name" />
                    <input type="email" name="" id="" className="h-[40px] text-white pl-4 rounded-md bg-[#171719] w-[100%] mt-4" placeholder="Email address" />
                    <textarea name="" id="" cols="30" rows="10" className="h-[84px] text-white pl-4 pt-2 rounded-md bg-[#171719] w-[100%] mt-4" placeholder="Write here your message"></textarea>
                    <button className="mt-4 flex justify-center items-center text-white rounded-lg bg-[#F98F1D] w-[100%] h-[40px] font-bold">Send</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
