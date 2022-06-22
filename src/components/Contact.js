import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-auto">
      <div className="max-w-7xl h-auto mx-auto flex justify-center px-20 py-20 items-center">
        <div className="w-1/2 px-10">
          <ul className="mb-4">
            <li className="text-xl font-bold font-title_font tracking-wider">
              AA Group Of Companies
            </li>
            <li>Rwui MBD Muscat</li>
            <li>(Near LAMA Polyclinic Hospital)</li>
            <li>Muscat, Sultanate of Oman</li>
          </ul>
          <ul>
            <li>
              <span className="font-semibold">Telephone: </span>+968 24769800
            </li>
            <li>
              <span className="font-semibold">Fax: </span>+968 24769830
            </li>
            <li>
              <span className="font-semibold">Email: </span>
              administratior@aaoman.com.om
            </li>
            <li>
              <span className="font-semibold">Website: </span>www.aaoman.com.om
            </li>
          </ul>
        </div>
        <div className="w-1/2 px-10">
          <div className="border-setBorder border-secondry_color  w-96 h-auto py-6">
            <h2 className="text-3xl px-10 font-title_font font-bold ">
              Follow Us!
            </h2>
            <p className="text-lg px-10">
              Please fill out the form below with any questions you may have and
              someone will respond to you shortly. Thank You.
            </p>
            <button className=" bg-btn_bg font-title_font ml-10 mt-3 text-white text-lg px-6 py-2 hover:bg-gray-900 duration-200 cursor-pointer">
              follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
