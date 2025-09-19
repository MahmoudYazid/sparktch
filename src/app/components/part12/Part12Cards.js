const Part12Cards = ({image,title,text}) => {
    return (
<div className="relative w-[20rem] h-[20rem]">
  <img src={image} alt="example" className="w-full h-auto" />

  <div className="absolute bottom-[1rem] left-5 bg-[#F5F7FA] px-3 py-1 rounded w-70 h-[10rem] flex flex-col justify-center items-center">
    <p className="text-lg font-semibold mb-2 text-center text-black">{title}</p>
    <a href="#" className="text-green-600 font-semibold hover:underline">
      Read more →
    </a>
  </div>
</div>
    )
};

export default Part12Cards;