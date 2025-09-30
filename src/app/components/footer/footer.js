"use client";
import Col1footer from "./Col1footer";
import Col2footer from "./Col2footer";
import Col3footer from "./Col3footer";
import Col4footer from "./Col4footer";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 flex flex-col item-center justify-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1  lg:grid-cols-4 gap-12  ">
        <Col1footer />
        <Col2footer />
        <Col3footer />
        <Col4footer />
      </div>
    </footer>
  );
};

export default Footer;
