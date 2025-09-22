const SlideSixCard = ({image,title,text}) => {
    return (
        <div className="  w-[30rem] h-[10rem]  mb-[2rem]   grid  grid-rows-[.1fr_1fr]  ">
            
            <div className='w-full text-center text-white '><p className='text-3xl font-bold text-[#43A046]'>{title}</p></div>
            <div className='w-full text-center text-white '><p className='text-2xl text-black'>{text}</p></div>

        </div>
    )
};

export default SlideSixCard;