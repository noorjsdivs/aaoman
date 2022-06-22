import React from "react";
import ProgramImgOne from "../assets/images/program/3.webp";
import ProgramImgTwo from "../assets/images/program/2.webp";
import ProgramImgThree from "../assets/images/program/1.webp";
import ProgramImgFour from "../assets/images/program/4.webp";
import ProgramImgFive from "../assets/images/program/5.webp";

const Programs = () => {
  return (
    <div name="programs" className="w-full h-auto pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex-col">
          <div className="flex w-full h-full gap-6">
            <img
              src={ProgramImgOne}
              className="w-1/2 h-96 object-center"
              alt=""
            />
            <img
              src={ProgramImgTwo}
              className="w-1/2 h-96 object-center"
              alt=""
            />
          </div>
          <div className="flex gap-6 mt-6">
            <div className="border-setBorder h-96 w-2/4 border-secondry_color flex-col justify-center items-center">
              <h1 className="text-4xl font-semibold font-title_font px-14 mt-4">
                Our Latest Programs
              </h1>
              <p className="text-lg px-14 mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, molestias natus! Voluptate necessitatibus, optio,
                maiores tempore tenetur error, a dolor amet veritatis corporis
                soluta cupiditate. Dolore beatae incidunt provident laudantium
                facilis ea temporibus, quos illo vel amet vitae. Dignissimos
                repellat sed harum qui veniam tenetur sunt eveniet in quae
                similique?
              </p>
              <button className=" bg-btn_bg font-title_font ml-14 mt-3 text-white text-lg px-6 py-2 hover:bg-gray-900 duration-200 cursor-pointer">
                read more
              </button>
            </div>
            <div className="w-1/4 h-96 flex-col">
              <img src={ProgramImgFour} className="w-full h-1/2 pb-2" alt="" />{" "}
              <img src={ProgramImgThree} className="w-full h-1/2 pt-2" alt="" />{" "}
            </div>
            <div className="w-1/4 h-96 bg-gray-100 flex justify-center items-center">
              <img src={ProgramImgFive} className="w-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
