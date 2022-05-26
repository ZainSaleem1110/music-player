import React,{useState} from 'react'
import { BsFillPlayFill } from 'react-icons/bs'

function PointsCard({Data}) {
    const [dataList]=useState(Data)

    return (
        <div className="mt-5 flex flex-wrap gap-6">
            {dataList && dataList.map((list,index)=>{
                return <div className="w-[250px] h-[200px] rounded-lg bg-[#222225] flex flex-col justify-center items-center">
                <div className="w-[50px] h-[50px] bg-[#4e391e] text-[#f98f1d] rounded-full flex justify-center items-center text-[20px] relative">
                    {list.Icon}
                    <div className="absolute bottom-[-8px] right-[-8px] rounded-full w-[28px] h-[28px] bg-[#f98f1d] flex justify-center items-center text-white text-[13px]">
                        {list.points}
                    </div>
                </div>
                <p className="mt-4 text-center text-[14px]">{list.detail}</p>
            </div>
            })}
        </div>
    )
}

export default PointsCard
