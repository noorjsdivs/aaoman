import React from "react";
import LeaderImgOne from "../assets/images/leaders/1.webp";
import LeaderImgTwo from "../assets/images/leaders/2.webp";
import ProgramBottomImg from "../assets/images/qhse.jpg";

const Leaders = () => {
  return (
    <div name="leaders" className="w-full h-auto bg-primary_color">
      <div className="max-w-7xl h-auto mx-auto relative">
        <span className="text-white text-2xl left-20 top-8 font-title_font font-semibold underline underline-offset-4 tracking-wide absolute text-center ">
          Mesages from Management
        </span>
        <div className="w-full h-auto flex py-28">
          <div className="flex h-full w-1/2">
            <div className="flex-col justify-center items-center text-white">
              <img
                src={LeaderImgOne}
                className="w-40 h-40 rounded-full mx-auto px mb-6 object-cover"
                alt=""
              />
              <p className="text-center px-16 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                voluptatum distinctio veniam consectetur deserunt fuga deleniti
                placeat error excepturi dolores quos ullam suscipit, nam natus,
                provident eaque dicta. Pariatur, delectus.
              </p>
              <h3 className="text-xl font-semibold font-title_font text-center mt-4">
                Bertie Norton
              </h3>
              <span className="w-40 h-4 bg-secondry_color flex ml-60 mt-4"></span>
            </div>
          </div>
          <div className="flex h-full w-1/2">
            <div className="flex-col justify-center items-center text-white">
              <img
                src={LeaderImgTwo}
                className="w-40 h-40 rounded-full mx-auto px mb-6 object-cover"
                alt=""
              />
              <p className="text-center px-16 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                voluptatum distinctio veniam consectetur deserunt fuga deleniti
                placeat error excepturi dolores quos ullam suscipit, nam natus,
                provident eaque dicta. Pariatur, delectus.
              </p>
              <h3 className="text-xl font-semibold font-title_font text-center mt-4">
                Elon Mask
              </h3>
              <span className="w-40 h-4 bg-secondry_color flex ml-60 mt-4"></span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src={ProgramBottomImg}
          className="w-full h-72 object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Leaders;
