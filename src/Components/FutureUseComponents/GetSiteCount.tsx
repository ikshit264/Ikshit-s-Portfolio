import React from 'react'

const GetSiteCount = () => {
    return (
        <div className='flex flex-col justify-start m-2 items-start'>
            <div className='flex items-center rounded-md justify-center bg-gradient-to-r from-[#B4C8FB] via-[#A6BAFB] to-[#B3C7FB] w-full gap-1 py-2'>
                <button className='bg-[#393838] text-center flex gap-1 text-white p-1 px-2 rounded-md '>
                    Clicks
                </button>
                <div className='bg-[#393838] text-center flex gap-1 text-white p-1 px-2 rounded-md '>
                    0
                </div>
            </div>
        </div>
    )
}

export default GetSiteCount
