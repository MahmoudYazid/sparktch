import Image from "next/image";
import NavbarComponent from "./components/navbar/navbarComponent";
import ParttwoComponent from "./components/part2/ParttwoComponent";
import Part7Component from "./components/part7/part7Component";
import PartneinComponent from "./components/part9/part9Component";
import PartthreeComponent from "./components/part3/PartthreeComponent";
import PartfourComponent from "./components/part4/partfourComponent";
import PartfiveComponent from "./components/part5/PartfiveComponent";
import SlideSixComponent from "./components/slide6/SlideSixComponent";
import ParteightComponent from "./components/part8/ParteightComponent";

export default function Home() {
  return (
    <main className="min-h-full w-screen grid-rows-[auto_auto_auto_auto_auto_auto_auto]  grid ">
      <NavbarComponent></NavbarComponent>
      <ParttwoComponent></ParttwoComponent>
      <PartthreeComponent></PartthreeComponent>
      
      <PartfourComponent></PartfourComponent>
      <PartfiveComponent></PartfiveComponent>
      <SlideSixComponent></SlideSixComponent>

      <Part7Component></Part7Component>
      
      <ParteightComponent></ParteightComponent>
      <PartneinComponent></PartneinComponent>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      





    </main>
  
  );
}
