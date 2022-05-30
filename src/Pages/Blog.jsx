import React from 'react'
import { BsFillCreditCard2FrontFill } from 'react-icons/bs'
import { FaRegMoneyBillAlt } from 'react-icons/fa'

const ButtonList=["All","Comedy","Cars and Vehicles","Economics and Trade","Education","Entertainment","Movies & Animation","Gaming","History and Facts","Live Style","Natural","News and Politics","People and Nations","Pets and Animals","Places and Regions","Science and Technology","Sport","Travel and Events","Other"]

function Blog() {
    return (
        <div className="text-white">
            <div className="w-[100%] border-b border-[#323232] pb-7 text-[24px] flex items-center gap-x-4 justify-center">
                <BsFillCreditCard2FrontFill />
                Blogs
            </div>
            <div className="flex gap-x-8 items-start mt-7">
                <div className="w-[75%] h-[277px] bg-[#222225] rounded-lg flex flex-col items-center text-white justify-center ">
                    <BsFillCreditCard2FrontFill className="text-[28px]" />
                    <p className="text-[20px] mt-3">No more articles to show</p>
                </div>
                <div className="w-[25%] ">
                    <div className="bg-[#222225] rounded-lg p-3">
                        <div className="flex items-center">
                            <div className="w-[30px] h-[30px] bg-[#F98F1D] rounded-full flex justify-center items-center"><FaRegMoneyBillAlt /></div>
                            <p className="ml-2 font-bold">Categories</p>
                        </div>
                        <div className="flex flex-wrap mt-4 gap-3">
                            {ButtonList && ButtonList.map((list,index)=>{
                                return  <button className="text-[#f98f1d] bg-[#f9901f40] px-3 h-[33px] rounded-md flex justify-center items-center">{list}</button>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
