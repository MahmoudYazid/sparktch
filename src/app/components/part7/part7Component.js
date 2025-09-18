import React from 'react';

const Part7Component = () => {
    return (
     <div className=" bg-white w-full h-auto  justify-center grid lg:grid-cols-2 grid-cols-1 px-6 lg:px-12 py-12 overflow-x-hidden gap-4">
         <div className=" flex items-center justify-center">
        <img src="part5Image.png" alt="part1img" className="w-[30rem] h-[30rem]" />
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <p className="text-black text-3xl md:text-5xl font-bold leading-tight text-center lg:text-left break-words whitespace-normal">
          The unseen of spending three years at Pixelgrade
        </p>
        <div className="w-full">
          <p className="text-[#717171] text-[1.2rem] text-center lg:text-left break-words whitespace-normal">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
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

export default Part7Component;