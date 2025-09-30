"use client";

import { FaClock, FaLayerGroup } from "react-icons/fa";
import { BiSolidCircle } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux'
import { openWindow } from "@/app/redux/subPageSignal";

const Part12Cards = ({ image, title }) => {
    const dispatch = useDispatch()

  return (
    <div className="relative w-full h-full bg-black grid grid-row-9 border border-black-700 rounded-lg overflow-hidden">

      <div className=" w-full h-full text-gray-400"></div>
      <div className="flex items-center justify-end w-full max-w-xs text-gray-400 p-3 rounded-xl">


        <span className="bg-[#0b2b23] text-[#0f713b] text-xs px-3 py-1 rounded-full font-medium">
          Standard
        </span>
      </div>


      <div className="flex flex-col  text-gray-400   justify-end items-start  gap-3 pl-[1.1rem] ">
        <div className="flex flex-row items-start justify-start text-[.7rem]  rounded-[2rem] p-1">
          <div className="bg-gradient-to-br from-[#4F8EF7] to-[#8B5CF6] w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold">
            RPO
          </div>
        </div>
      </div>


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


      <div className="bg-black w-full h-[3rem] flex items-center justify-center">
        <div className="text  hover:
  bg-[#4CAF4F] text-white rounded-md px-8 py-4  font-bold bg-gray-700 cursor-pointer" onClick={() => dispatch(openWindow())}>
          Learn More
        </div>

      </div>

    </div>
  )
};

export default Part12Cards;