import React from 'react';

const NavbarComponent = () => {
    return (
<nav className='max-h-[2rm] w-full bg-white md:grid  md:px-4 md:grid-cols-[1fr_4fr] flex item-center justify-center flex-col pb-4 md:pb-1 '>
    <div className='bg-white w-full h-full flex items-center justify-center '>
        <img src="logo.png" alt="Logo" className='w-[15rem] h-[4rem]' />
    </div>
    <div className='bg-white w-full h-full flex items-center justify-center flex-wrap md:justify-end gap-4 md:pr-[5rem] '>
        <div>
            <p className='text-xl bold cursor-pointer text-black' >Home</p>
        </div>
        <div><p className='text-xl bold cursor-pointer text-black'>Services</p></div>
        <div><p className='text-xl bold cursor-pointer text-black'>About us</p></div>
        <div className='h-[3rem] w-[10rem] flex items-center justify-center md:ml-10 cursor-pointer '>
            <div className='h-full w-full  bg-[#4CAF4F] text-center flex items-center justify-center text-white rounded-md cursor-pointer hover:bg-[#45a049]'> 
                <p className='text-l bold'>Get Assistance</p>
            </div>

        </div>




    </div>




</nav>
)};

export default NavbarComponent;