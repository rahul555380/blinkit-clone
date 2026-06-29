import React from 'react'

export default function Header() {
  return (

    <header className='sticky top-0 left-0 bg-white z-20'>

      <div className=' hidden lg:block'>
        <div className='w-full min-h-22.5 bg-white flex justify-between border-b border border-[rgba(2,6,12,0.1)] m-auto'>
          <a href="#"> <div className='w-44.5 h-22  text-4xl border-[rgba(2,6,12,0.1)] font-bold flex justify-center items-center text-[#F8CB46] border-r'>blink <span className='text-[green]' >it</span>
          </div></a>
          <div className='w-57.5 h-22.5  flex flex-wrap justify-center items-center py-5 '>
            <h2 className='font-bold text-[18px]'>Delivery in 10 minutes</h2>
            <p className='whitespace-nowrap text-[12px] '>A-54, Manyawas, Mohru Nagar,... <i className="fa-solid fa-caret-left cursor-pointer -rotate-90 text-[14px] mt-1 origin-center"></i></p>
          </div>
          <div className='w-110.5 flex justify-center items-center'>
            <div className='border-[rgba(0,0,0,0.04)] border  w-110.5 bg-[#F8F8F8] pl-2.5 h-11.75  rounded-md flex justify-center items-center'>
              <i className="fa-solid fa-magnifying-glass text-1xl mt-1 cursor-pointer"></i>
              <input className=' w-full h-full  outline-none text-1xl mx-2' type="text" placeholder='search item' />
            </div>

          </div>
          <div className='flex w-55.75 justify-baseline items-center mr-3.75' >
            <a href="#"> <div className='w-30 text-[20px]'>Login</div></a>
            <a href="#"><div className=' w-28 rounded-lg text-[12px] bg-black opacity-[0.2] h-12 flex items-center justify-center font-bold  text-white'><i class="fa-solid fa-cart-arrow-down text-2xl mx-1"></i>My Cart</div></a>
          </div>
        </div>
      </div>


      {/* Mobile Hedaer */}


      <div className='max-w-full h-33.75 px-4 shadow lg:hidden  flex flex-wrap justify-center items-center'>

        <div className='w-full h-min flex justify-between items-center pt-2 gap-3'>

          <div className='flex-1 min-w-0'>
            <h2 className='font-bold text-[18px]'>
              Delivery in 10 minutes
            </h2>

            <p className='text-[12px] truncate'>
              A-54, Manyawas, Mohru Nagar,
              Mansarovar, Jaipur, Rajasthan
              302020, India
              <i className="fa-solid fa-caret-left cursor-pointer -rotate-90 text-[14px] ml-1"></i>
            </p>
          </div>

          <div>
            <i className="fa-regular fa-user text-2xl"></i>
          </div>
        </div>

        <div className='w-full h-[6] flex justify-center items-center mt-4 mb-5'>
          <div className='w-full border border-[rgba(0,0,0,0.04)] bg-[#F8F8F8] pl-2.5 h-11 rounded-md flex items-center'>

            <i className="fa-solid fa-magnifying-glass text-lg cursor-pointer"></i>

            <input
              className='w-full h-full outline-none text-sm mx-2 bg-transparent'
              type="text"
              placeholder='Search item'
            />
          </div>
        </div>

      </div>






    </header>

  )
}
