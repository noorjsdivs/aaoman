import React from "react";
import { Link } from "react-scroll";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { GiTireIronCross } from "react-icons/gi";
import { useState } from "react";

const Header = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1001,
      link: "home",
    },
    {
      id: 1002,
      link: "about",
    },
    {
      id: 1003,
      link: "services",
    },
    {
      id: 1004,
      link: "programs",
    },
    {
      id: 1005,
      link: "contact",
    },
  ];
  return (
    <div className="bg-header_bg z-50  w-full top-0 sticky text-black px-4">
      <div className="max-w-7xl h-20 mx-auto flex justify-between items-center">
        <div className="h-auto w-auto group flex justify-center items-center bg-red-200">
          <h1
            className="h-auto w-auto font-title_font text-2xl bg-header_bg px-2 py-1 group-hover:-translate-y-1
          group-hover:translate-x-1 duration-300 cursor-pointer group-hover:bg-white"
          >
            AA QHSE Department
          </h1>
        </div>

        <div className="hidden md:inline-flex justify-center gap-2 items font-body_font text-lg">
          {links.map(({ id, link }) => (
            <div key={id}>
              <ul className="flex group bg-red-200">
                <Link to={link} smooth={true} duration={500}>
                  <li className="bg-header_bg capitalize text-lg px-4 py-1 group-hover:bg-white group-hover:text-gray-900 group-hover:-translate-y-1 group-hover:translate-x-1 duration-300 cursor-pointer">
                    {link}
                  </li>
                </Link>
              </ul>
            </div>
          ))}
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer md:hidden pr-4 z-10"
        >
          {nav ? (
            <GiTireIronCross size={30} className="animate-pulse " />
          ) : (
            <AiOutlineMenuUnfold size={35} />
          )}
        </div>
        {nav && (
          <div className="flex flex-col justify-center items-center absolute top-20 right-0 w-auto bg-transparent mx-auto h-auto">
            {links.map(({ id, link }) => (
              <div key={id} className="w-full bg-red-200 flex justify-end">
                <ul className="flex group bg-red-200">
                  <Link to={link} smooth={true} duration={500}>
                    <li className="bg-header_bg capitalize text-lg px-6 py-2 w-40 group-hover:bg-white group-hover:text-gray-900 group-hover:-translate-y-1 group-hover:translate-x-1 duration-300 cursor-pointer border-b-gray-300 border">
                      {link}
                    </li>
                  </Link>
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
