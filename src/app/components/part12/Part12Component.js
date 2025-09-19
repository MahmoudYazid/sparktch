import Part12Cards from "./Part12Cards";

const Part12Component = () => {
    return (
<div className="w-full h-auto md:flex md:flex-row grid grid-col-1 item-center justify-center text-center flex-wrap ">
  <Part12Cards 
    image="part12/image1.png" 
    title="Revamping the Membership Model with Triathlon Australia" 
    text="Our membership management software provides full automation of membership renewals and payments" 
  />
  <Part12Cards 
    image="part12/image2.png" 
    title="What are your safeguarding responsibilities and how can you manage them?" 
    text="Our membership management software provides full automation of membership renewals and payments" 
  />
  <Part12Cards 
    image="part12/image3.png" 
    title="Creating Streamlined Safeguarding Processes with OneRen" 
    text="Our membership management software provides full automation of membership renewals and payments" 
  />
</div>

    )
};

export default Part12Component;