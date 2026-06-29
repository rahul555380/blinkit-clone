import React from 'react'

export default function ResponsiveCart({ img, title, price , gram }) {



  return (
    <>
      <div className='w-50 h-75 shadow inset-shadow-2xs mx-auto my-5 rounded-lg border-[red]'>
        {/* img-content */}

        <div className='w-44.75 h-34  overflow-hidden flex justify-center items-center m-auto '>
          <img width={"80%"} height={"80%"} src={img} alt="" />
        </div>
        {/* Min content */}

        <div className='ml-4 mr-4' >

          <div className=' h-3.75 text-[10px]  rounded-2xl mt-2'> <span className='bg-[#f8f8f8]       font-medium'>12 MINS</span>
          </div>

          {/* main- content */}
          <div>
            <p className=' w-[90%]  h-7 text-[13px] font-medium text-[#1f1f1fd2] mb-4 mt-1 '>{title}</p>
            <p className='text-[#666666] text-[15px]'>{gram}</p>
            <div className='flex items-center justify-between mt-6'>
              <p className='font-bold text-[14px]'>₹{price}</p>
              <button className='text-[rgb(49,121,22)] border py-1 px-4 rounded-md cursor-pointer'>ADD</button>
            </div>

          </div>

        </div>
      </div>

    </>
  )
}
