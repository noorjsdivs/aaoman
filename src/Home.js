import React, { useEffect, useRef } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BannerImg from "./assets/images/bannerImg.jpg";
import About from "./components/About";
import Services from "./components/Services";
import Programs from "./components/Programs";
import Leaders from "./components/Leaders";
import Contact from "./components/Contact";
import Typed from "typed.js";

const Home = () => {
  const typeTarget = useRef(null);
  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: [
        "10 years LTI Free.",
        "Recognized by Petroleum Development of Oman.",
        "Best Services in Sultanate of Oman.",
      ],
      typeSpeed: 120,
      smartBackspace: true,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <Header />

      <div>
        {/* ==================================================
                   Home banner start here 
        =================================================== */}
        <div className="w-full group h-screen relative" name="home">
          <img
            src={BannerImg}
            alt="BannerImg"
            className="w-full h-full object-cover contrast-125 grayscale group-hover:grayscale-0 duration-150"
          />

          <div className="mx-auto max-w-7xl h-auto top-1/3 absolute">
            <h2 className="absolute text-gray-800 -top-60 mx-32 font-bold text-4xl">
              Updates:{" "}
              <span
                className="font-bold text-3xl text-gray-900"
                ref={typeTarget}
              ></span>
            </h2>
            <h1 className="text-white font-title_font tracking-wider text-6xl font-bold leading-tight w-2/3 mx-32">
              AA Group of companies QHSE Department
            </h1>
            <span className="bg-secondry_color inline-block w-72 h-4 absolute left-1/2 mt-4"></span>
          </div>
        </div>
        {/* ==================================================
                   Home banner end here 
        =================================================== */}
      </div>
      <About />
      <Services />
      <Programs />
      <Leaders />
      <Contact />

      <Footer />
    </div>
  );
};

export default Home;
