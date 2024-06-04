import Image from 'next/image'
import React from 'react'



export enum statusType {
    Online,
    Offline,
    Busy,
}
export type profileType = {
    content: string,
    src: string,
    status: statusType
}

const Card = ({ content, src, status }: profileType) => {
    let bgcolor: string = ""
    switch (status) {
        case statusType.Offline:
            bgcolor = "bg-red-400"

            break;
        case statusType.Online:
            bgcolor = "bg-green-400"

            break;
        case statusType.Busy:
            bgcolor = "bg-gray-100"

            break;


    }
    return (
        <div className="flex  flex-col justify-center items-center w-[250px] rounded-lg py-8 gap-4 border-2 mt-4 border-black">
            <div className="relative">
                <Image src={src} width={200} height={200} alt="image" className="w-[200px]  h-[200px] rounded-full  border-2 border-black" />
                <span className={` absolute w-[30px] h-[30px] rounded-full bottom-4 right-4 border-3 border-white ${bgcolor}`}></span>
            </div>
            <h3>{content}</h3>
        </div>
    )
}

export default Card