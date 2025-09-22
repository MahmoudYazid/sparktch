import React from 'react';

const ParttwoComponent = () => {
    return (
    <div className="w-full h-auto bg-white justify-center grid lg:grid-cols-2 grid-cols-1 px-6 lg:px-12 py-12 overflow-x-hidden gap-4">
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <p className="text-black text-3xl md:text-5xl font-bold leading-tight text-center lg:text-left break-words whitespace-normal">
          Wanna Transform Your Business with Smarter 
          <span className="text-[#43A046]"> IT Solutions?</span>
        </p>
        <div className="w-full">
          <p className="text-[#717171] text-[1.2rem] text-center lg:text-left break-words whitespace-normal">
           Take the first step towards unlocking your business potential with our expert IT consulting and technology solutions. Schedule a free evaluation to explore how we can drive your digital transformation and elevate your operations.
          </p>
        </div>
        <div className="w-full  flex items-center justify-center lg:justify-start">
          <button className="bg-[#4CAF4F] text-white rounded-md px-8 py-4 hover:bg-[#45a049] font-bold">
            GET FREE CONSULTANCY
          </button>
        </div>
      </div>

      {/* Only show image on large screens */}
      <div className=" flex items-center justify-center ">
        <img src="part1Image.png" alt="part1img" className="w-[30rem] h-[30rem]" />
      </div>
    </div>
    )
};

export default ParttwoComponent;