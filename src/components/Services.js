import React from "react";
import QhseImgOne from "../assets/images/qhse_1.jpg";
import QhseImgTwo from "../assets/images/qhse_5.jpg";
import QhseImgThree from "../assets/images/qhse_3.jpeg";
const Services = () => {
  return (
    <div name="services" className="w-full h-full bg-body_color">
      <div className="max-w-7xl mx-auto h-auto flex-col px-2 py-20">
        <div className="w-full h-full flex justify-between items-center gap-8 ">
          <div className="relative w-full h-full ">
            <img src={QhseImgOne} className="h-72" alt="" />
          </div>
          <div className=" w-full h-full">
            <img src={QhseImgTwo} className="h-72" alt="" />
          </div>
          <div className=" w-full h-auto">
            <img src={QhseImgThree} className="h-72" alt="" />
          </div>
          <div className=" border-setBorder px-4 py-24 border-secondry_color">
            <h1 className="text-4xl w-56 font-semibold font-title_font text-center">
              About Our Services
            </h1>
          </div>
        </div>
        <div className="flex w-full h-full mt-6">
          <div className="w-3/4">
            <p className="text-lg px-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
              dolorem distinctio reprehenderit, enim quod excepturi voluptates
              omnis magni soluta dolores voluptate quasi incidunt consectetur,
              architecto, hic harum quam est tempora molestiae voluptatibus odio
              repudiandae veritatis? Unde laboriosam, repellat dolor doloremque
              asperiores et modi doloribus? Ab vel voluptatibus consectetur non
              impedit?
            </p>
          </div>
          <div className="w-1/4 flex justify-center items-center">
            <button className=" bg-btn_bg text-white text-lg px-6 py-2 hover:bg-gray-900 duration-200 cursor-pointer">
              read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
