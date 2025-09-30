"use client";
import SlideSixCard from "./slideSixCard";
import icon from "/public/slide6/Icon.png";

const SlideSixComponent = () => {
    return (
<div className="w-full h-auto flex flex-wrap items-start justify-center gap-8 bg-white py-8">
      <SlideSixCard
        image="slide6/Icon.png"
        title="Your Trusted IT Partner"
        text="We are a reliable consulting and technology partner, dedicated to excellence and a client-focused, personalized approach."
      />
      <SlideSixCard
        image="slide6/Icon1.png"
        title="Expertise Meets Innovation"
        text="By combining deep industry knowledge with the latest technologies, we deliver scalable and innovative solutions tailored to diverse business sectors."
      />
      <SlideSixCard
        image="slide6/Icon2.png"
        title="Driving Efficiency & Growth"
        text="Our strategies are designed to streamline operations, enhance efficiency, and accelerate business growth always aligned with your goals."
      />
    </div>
    )
};

export default SlideSixComponent;