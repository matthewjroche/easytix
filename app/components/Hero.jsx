import React from "react";
import Search from "../search/page";

export const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
        //   "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
                  "url(https://luxurylondon.co.uk/wp-content/uploads/2022/04/boardmasters-uk-festivals-c-shutterstock-Jordan-Crosby.jpg)",

      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
          Unlock a world of excitement and entertainment with our curated selection of events. From electrifying concerts to captivating art exhibitions, embark on unforgettable experiences that will leave you inspired. Start exploring now and let the adventure begin!
          </p>
          <a href="/search">
          <button className="btn btn-primary">Get Started</button>
          {/* <Search></Search> */}
          </a>
        </div>
      </div>
    </div>
  );
};
