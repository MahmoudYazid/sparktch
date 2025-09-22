import { FaClock, FaLayerGroup } from "react-icons/fa";
import { BiSolidCircle } from 'react-icons/bi';
const Part12Cards = ({ image, title }) => {
  return (
    <div className="relative w-full h-full bg-black grid grid-row-9 border border-black-700 rounded-lg overflow-hidden">

      <div className="bg-red-200 w-full h-full"></div>
      <div className="bg-blue-200 w-full h-full"></div>
      <div className="bg-green-200 w-full h-full"></div>


      <div className="flex flex-col  text-gray-400   justify-end items-start  gap-3 pl-[1.1rem] ">
        <div className="flex flex-row items-start justify-start text-[.7rem]  rounded-[2rem] p-1">
          <p className="font-bold  text-blue-400">SAP Solutions</p>
        </div>
      </div>





      <div className="flex flex-col  text-gray-400   justify-center items-center  gap-3  ">
        <div className="flex flex-row items-center justify-center text-sm ">
          <p className="  text-blue-400 text-bold text-[1.5rem] ">
            SAP S/4HANA Implementation & Migration
          </p>
        </div>
      </div>



      <div className="flex flex-col  text-gray-400   justify-start items-start  gap-3 pl-[1.1rem] ">
        <div className="flex flex-row items-start justify-start text-sm text-left">
          <p className="  text-gray-400 ">
            Complete SAP S/4HANA implementation and migration services with industry-specific ...
          </p>
        </div>
      </div>







      <div className="flex flex-col  text-gray-400   justify-start items-start  gap-3 pl-[1.1rem] ">
        <div className="flex flex-row items-start justify-start text-[1rem]">
          <p className="font-bold  text-blue-400">Key Features:</p>
        </div>


        <div className="flex flex-row items-center justify-center text-[.8rem]  gap-1">
          <BiSolidCircle className="text-lg w-[.5rem] h-[.5rem] text-blue-400" />
          <p className="font-bold text-gray-400 ">Rapid Deployment</p>
        </div>

        <div className="flex flex-row items-center justify-center text-[.8rem] gap-1">
          <BiSolidCircle className="text-lg w-[.5rem] h-[.5rem] text-blue-400" />
          <p className="font-bold text-gray-400 ">Rapid Deployment</p>
        </div>
        <div className="flex flex-row items-center justify-center text-[.8rem] gap-1">
          <BiSolidCircle className="text-lg w-[.5rem] h-[.5rem] text-blue-400" />
          <p className="font-bold text-gray-400 ">Rapid Deployment</p>
        </div>
        <div className="flex flex-row items-start justify-start text-[.8rem]">
          <p className="font-bold text-gray-400 "> <span className="text-blue-400"> +1 </span> more features</p>
        </div>

      </div>


      <div className="flex flex-row  text-gray-400 bg-black   place-content-between pr-[1rem] pl-[1rem]">
        <div className="flex items-center gap-2">
          <FaClock className="text-lg text-blue-400" />
          <span>Flexible</span>
        </div>

        <div className="flex items-center gap-2">
          <FaLayerGroup className="text-lg text-blue-400" />
          <span>Full Service</span>
        </div>
      </div>


      <div className="bg-black w-full h-full flex items-center justify-center">
        <button className="text  hover:
  bg-[#4CAF4F] text-white rounded-md px-8 py-4  font-bold bg-gray-700">
          Learn More
        </button>

      </div>

    </div>
  )
};

export default Part12Cards;