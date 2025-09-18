import React from 'react';
import ParteightCard from './parteightCard';
const ParteightComponent = () => {
  return (
    <div className="w-full h-auto bg-[#F5F7FA] justify-center grid lg:grid-cols-2 grid-cols-1 px-6 lg:px-12 py-12 overflow-x-hidden gap-4">

      <div className=" flex items-center justify-center p-3">
        <div className="flex flex-col items-start justify-center space-y-4 ">
          <p className="text-6xl">Helping a local</p>
          <p className="text-6xl text-[#4CAF4F]">business reinvent itself</p>
          <p className='text-2xl '>We reached here with our hard work and dedication</p>
        </div>

      </div>





      <div className="w-full h-full grid grid-cols-2  justify-center ">
        <div className=' w-full h-100 grid grid-rows-2 gap-2'>
          
         <ParteightCard image="slide8\icon4.png" title="2,245,341" subtitle="Members" ></ParteightCard>
          <ParteightCard image="slide8\icon1.png" title="828,867" subtitle="Event Bookings" ></ParteightCard>



        </div>


        <div className='w-full h-100 grid grid-rows-2'>

          <ParteightCard image="slide8\icon2.png" title="46,328" subtitle="Clubs" ></ParteightCard>

          <ParteightCard image="slide8\icon3.png" title="1,926,436" subtitle="Payments" ></ParteightCard>



        </div>


      </div>
    </div>
  )
};

export default ParteightComponent;