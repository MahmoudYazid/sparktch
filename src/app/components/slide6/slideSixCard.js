const SlideSixCard = ({image,title,text}) => {
    return (
        <div className="  w-[30rem] h-[30rem]    grid  grid-rows-[.5fr_.1fr_1fr]  ">
            <div className='w-full text-center text-white  flex item-center justify-center'>      
                <img src={image} alt="part1img" className="w-[5rem] h-[5rem]" />
            </div>
            <div className='w-full text-center text-white '><p className='text-3xl font-bold text-black'>{title}</p></div>
            <div className='w-full text-center text-white '><p className='text-2xl text-black'>{text}</p></div>

        </div>
    )
};

export default SlideSixCard;