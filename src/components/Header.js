import React from "react";

const Header = () => {
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
      link: "operations",
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
    <div className="bg-primary_color  w-full top-0 sticky text-body_color px-4">
      <div className="max-w-7xl h-20 mx-auto flex justify-between items-center">
        <div>
          <h1 className="font-title_font text-2xl">AA QHSE Department</h1>
        </div>
        <div className="flex justify-center gap-7 items font-body_font text-lg">
          {links.map(({ id, link }) => (
            <div key={id}>
              <ul className="flex">
                <li>{link}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
