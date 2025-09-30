"use client";
const SlideSixCard = ({image,title,text}) => {
    return (
    <div className="w-full sm:w-[20rem] md:w-[25rem] lg:w-[30rem] min-h-[10rem] mb-8 grid grid-rows-[auto_1fr] p-4">
      <div className="w-full text-center">
        <p className="text-2xl md:text-3xl font-bold text-[#43A046]">{title}</p>
      </div>
      <div className="w-full text-center">
        <p className="text-base md:text-lg text-black">{text}</p>
      </div>
    </div>
    )
};

export default SlideSixCard;