"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenuFold } from "react-icons/ai";

const Header = () => {
      let Links = [
            { name: "Home", link: "/" },
            { name: "Media", link: "/media" },
            { name: "Message", link: "/message" },
            { name: "About ", link: "/about " },
            { name: "Login", link: "/login" },
         ];
        let [open, setOpen] = useState(false);
      return (
            <main className="w-full h-full flex flex-col justify-center items-center">
                   <div className="bg-[#1b74e4] shadow-md w-full h-full flex justify-center items-center">
                        <div className="md:flex items-center justify-between py-4 px-2 mx-auto md:px-10 lg:px-20 container">
                              <Link href="/">
                                    <Image src="/logo.png" width={140} height={100} alt="logo-image" className="cursor-pointer"/>
                              </Link>

                              <div
                                    onClick={() => setOpen(!open)}
                                    className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
                              >
                                    <span className="text-white">{open ? <AiOutlineClose /> : <AiOutlineMenuFold />}</span>
                              </div>

                              <ul
                                    className={`absolute z-40 md:flex md:items-center md:pb-0 md:static bg-white md:bg-[#1b74e4] md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                                          open ? "top-[70px]" : "top-[-490px]"
                                    }`}
                              >
                                    {Links.map((link) => (
                                          <li
                                                key={link.name}
                                                className="md:ml-8 text-sm md:text-xs md:my-0 my-7"
                                          >
                                                <Link
                                                      href={link.link}
                                                      className="text-gray-800 md:text-white hover:text-gray-400 duration-500"
                                                >
                                                      {link.name}
                                                </Link>
                                          </li>
                                    ))}
                              </ul>
                        </div>
                  </div>
            </main>
      );
};

export default Header;
