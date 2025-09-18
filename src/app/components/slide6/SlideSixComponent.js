import SlideSixCard from "./slideSixCard";
import icon from "/public/slide6/Icon.png";

const SlideSixComponent = () => {
    return (
     <div className="  w-full h-auto flex flex-row item-center justify-center pt-8 gap-5 flex-wrap bg-white ">
        <SlideSixCard image="slide6\Icon.png" title={"Membership Organisations"} text={"Our membership management software provides full automation of membership renewals and payments"}></SlideSixCard>
        <SlideSixCard image="slide6\Icon1.png" title={"National Associations"} text={"Our membership management software provides full automation of membership renewals and payments"}></SlideSixCard>
        <SlideSixCard image="slide6\Icon2.png" title={"Clubs And Groups"} text={"Our membership management software provides full automation of membership renewals and payments"}></SlideSixCard>
        
        
      </div>
    )
};

export default SlideSixComponent;