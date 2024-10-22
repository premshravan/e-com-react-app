import React from "react";
import { FaFacebook, FaInstagram, FaRegCopyright, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
     <div className="w-full">
    <div className="flex flex-wrap md:flex-row flex-col md:justify-center justify-start items-start h-full w-full bg-lime-900 selection:p-3 py-5 px-5  rounded gap-5 ">
      <div className="flex-1 col">
        <h1 className="font-bold md:text-2xl text-xl">Furniture</h1>
        <p className="text-md text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ex
          rem,quam fugiat impedit quibusdam, adipisci obcaecati asperiores quo
          illo aliquid dolor est libero odio deserunt laboriosam debitis
          distinctio .
        </p>
      </div>
      <div className="flex-1 col">
        <h1 className="font-bold py-2 text-2xl">Quick Links</h1>
        <ul className="flex flex-col gap-3 cursor-pointer w-fit">
          <li className="hover:bg-lime-400 rounded-sm px-1">Home</li>
          <li className="hover:bg-lime-400 rounded-sm  px-1">About</li>
          <li className="hover:bg-lime-400 rounded-sm  px-1">Contact</li>
          <li className="hover:bg-lime-400 rounded-sm  px-1">Shop</li>
        </ul>
      </div>
      <div className="flex-1 col">
        <h1 className="font-bold py-2 text-2xl">Terms & Conditions</h1>
        <ul className="flex flex-col gap-3 cursor-pointer w-fit">
          <li className="hover:bg-lime-400 rounded-sm px-1">Privacy</li>
          <li className="hover:bg-lime-400 rounded-sm  px-1">Terms</li>
          <li className="hover:bg-lime-400 rounded-sm  px-1">Policies</li>
          <li className="hover:bg-lime-400 rounded-sm  px-1">Conditions</li>
        </ul>
      </div>
      <div className="flex-1 col">
        <h1 className="font-bold py-2 text-2xl">Social Links</h1>
        <ul className="flex gap-3 cursor-pointer w-fit">
          <li className="hover:bg-black text-2xl  rounded-full p-1">
           <button> <FaFacebook /></button>
          </li>
          <li className="hover:bg-black text-2xl  rounded-full p-1">
           <button> <FaInstagram /></button>
          </li>
          <li className="hover:bg-black text-2xl  rounded-full p-1">
            <button><FaTwitter /></button>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
        <div className="flex sm:flex-row sm:pb-3 pb-20 flex-col w-11/12 justify-between mx-auto py-3 border-t p-5 mt-2 items-center border-white">
            <h4 className="flex items-center gap-1"><FaRegCopyright/> All rights reserved</h4>
            <img src="./visa.png" alt="card" className="w-full max-w-[200px]"/>
        </div>
        </div>
    </>
  );
};

export default Footer;
