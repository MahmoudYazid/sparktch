import React from 'react';
import PartfourComponent from '../part4/partfourComponent';

const ParttenComponent = () => {
    return (
     <div className="w-full h-auto bg-[#F5F7FA] justify-center grid lg:grid-cols-2 grid-cols-1 px-6 lg:px-12 py-12 overflow-x-hidden gap-4">
         <div className=" flex items-center justify-center">
        <img src="slide10\image.png" alt="part1img" className="w-[30rem] h-[30rem]" />
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <p className="text-black text-3xl md:text-5xl font-bold leading-tight text-center lg:text-left break-words whitespace-normal">
          How to design your site footer like we did
        </p>
        <div className="w-full">
          <p className="text-[#717171] text-[1.2rem] text-center lg:text-left break-words whitespace-normal">
Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. 
Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit.
 Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, 
 quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. 
 Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, 
eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.       </p>
        </div>
        <div className="w-full  flex items-center justify-center lg:justify-start">
          <div className="w-full h-auto  flex flex-row item-center justify-center gap-[3rem] pt-8 flex-wrap ">
      
      <img src="slide4\Logo.png" alt="part1img" className="w-[3.5rem] h-[3.5rem]" />
      <img src="slide4\Logo1.png" alt="part1img" className="w-[3.5rem] h-[3.5rem]" />
      <img src="slide4\Logo2.png" alt="part1img" className="w-[3.5rem] h-[3.5rem]" />
      <img src="slide4\Logo3.png" alt="part1img" className="w-[3.5rem] h-[3.5rem]" />
      <img src="slide4\Logo4.png" alt="part1img" className="w-[3.5rem] h-[3.5rem]" />
      <img src="slide4\Logo5.png" alt="part1img" className="w-[3.5rem] h-[3.5rem]" />
      <img src="slide4\Logo6.png" alt="part1img" className="w-[3.5rem] h-[3.5rem]" />
      <div className="w-fit h-[3.5rem] flex justify-center items-center cursor-pointer"><p className="text-[#4CAF4F] text-md font-bold">Meet all customers </p></div>
      
      </div>
        </div>
      </div>

      {/* Only show image on large screens */}
     
    </div>
    )
};

export default ParttenComponent;