import React from 'react';

const PartneinComponent = () => {
    return (
     <div className="w-full h-auto bg-white justify-center grid lg:grid-cols-2 grid-cols-1 px-6 lg:px-12 py-12 overflow-x-hidden gap-4">
         <div className=" flex items-center justify-center">
        <img src="part7Image.png" alt="part1img" className="w-[30rem] h-[30rem]" />
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <p className="text-3xl md:text-5xl font-bold leading-tight text-center lg:text-left break-words whitespace-normal">
          How to design your site footer like we did
        </p>
        <div className="w-full">
          <p className="text-[#717171] text-[1.2rem] text-center lg:text-left break-words whitespace-normal">
Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu,
 at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, 
 at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. 
 Integer in nisi eget nulla commodo faucibus efficitur quis massa. 
Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.          </p>
        </div>
        <div className="w-full  flex items-center justify-center lg:justify-start">
          <button className="bg-[#4CAF4F] text-white rounded-md px-8 py-4 hover:bg-[#45a049] font-bold">
            Learn More
          </button>
        </div>
      </div>

      {/* Only show image on large screens */}
     
    </div>
    )
};

export default PartneinComponent;