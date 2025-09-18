import React from 'react';

const ParteightCard = ({image,title,subtitle}) => {
    return (
        <div className=' w-full h-full grid grid-cols-[1fr_3fr] '>
            <div className=' w-full h-full flex items-center justify-center invisible lg:visible '>
                <img src={image} alt="Logo" className='w-[3rem] h-[3rem] ' />
            </div>
            <div className=' w-full h-full grid grid-rows-[1fr_1fr]'>

                <div className=' w-full h-full flex items-end justify-start  '>
                    <p className='text-4xl bold text-black '>{title}</p>
                </div>

                 <div className=' w-full h-full flex items-start justify-start '>
                    <p className='text-xl text-black '>{subtitle}</p>
                </div>
            </div>



        </div>

    )
};

export default ParteightCard;