import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-full bg-primary_color text-white">
      <div className="max-w-7xl mx-auto h-full flex justify-between items-center gap-8 px-2 py-20">
        <div className=" border-setBorder px-4 py-24 border-secondry_color">
          <h1 className="text-4xl w-56 font-semibold font-title_font text-center">
            About Our Company
          </h1>
        </div>
        <div className="relative w-full h-full ">
          <p className="text-lg text-gray-300 font-semibold -mt-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus rem
            impedit quia aut tempore soluta rerum error, dolores officiis quo,
            nesciunt illo molestias cum sapiente. Nemo officiis culpa
            necessitatibus ullam?
          </p>
          <button className="bg-white text-black px-6 py-2 absolute -bottom-14  text-lg hover:bg-gray-300 duration-200 cursor-pointer">
            read more
          </button>
        </div>
        <div className=" w-full h-full">
          <p className="text-lg text-gray-300 -mt-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus rem
            impedit quia aut tempore soluta rerum error, dolores officiis quo,
            nesciunt illo molestias cum sapiente. Nemo officiis culpa
            necessitatibus ullam?
          </p>
        </div>
        <div className=" w-full h-auto">
          <p className="text-lg text-gray-300 -mt-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus rem
            impedit quia aut tempore soluta rerum error, dolores officiis quo,
            nesciunt illo molestias cum sapiente. Nemo officiis culpa
            necessitatibus ullam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
