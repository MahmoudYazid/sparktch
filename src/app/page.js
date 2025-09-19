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
import ParttenComponent from "./components/part10/ParttenComponent";
import PartelevenComponent from "./components/part11/PartelevenComponent";
import Part13Component from "./components/part13/Part13Component";
import Part12Component from "./components/part12/Part12Component";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <main className="min-h-full w-full grid-rows-[auto_auto_auto_auto_auto_auto_auto_auto_auto_auto_auto_auto]  grid  ">
      <NavbarComponent></NavbarComponent>
      <ParttwoComponent></ParttwoComponent>
      <PartthreeComponent></PartthreeComponent>
      
      <PartfourComponent></PartfourComponent>
      <PartfiveComponent></PartfiveComponent>
      <SlideSixComponent></SlideSixComponent>

      <Part7Component></Part7Component>
      
      <ParteightComponent></ParteightComponent>
      <PartneinComponent></PartneinComponent>
      <ParttenComponent></ParttenComponent>
      
      <PartelevenComponent></PartelevenComponent>
      <Part12Component ></Part12Component>
      <Part13Component></Part13Component>
      <Footer></Footer>





    </main>
  
  );
}
