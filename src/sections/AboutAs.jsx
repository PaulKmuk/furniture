import React from "react";
import imagePath from "../assets/furnitureImg.jpg";
import BgComponent from "../components/BgComponent";
import { aboutAs } from "../data/data";

const AboutAs = () => {
  return (
    <div className="px-8 py-[80px] text-gray-800 md:flex md:gap-20 max-w-[1400px] mx-auto">
      <div className="flex-1">
        <h2 className="fontHero font-bold text-2xl md:text-6xl">
          {aboutAs.title}
        </h2>
        <p className="py-6 md:text-2xl">{aboutAs.description}</p>
        <div className="grid grid-cols-2 gap-6 pt-10">
          {aboutAs.points.map((el) => (
            <div key={el.description}>
              <div className="relative flex">
                <div className="w-10 h-10 md:w-14 md:h-14 absolute bg-yellow-500 rounded-full left-7 top-3"></div>
                <p className="text-4xl md:text-5xl text-gray-700 text-center pl-5 pb-5 z-10">
                  {<el.icon />}
                </p>
              </div>
              <p className="md:text-xl">{el.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-10 relative flex justify-center items-center flex-1 md:p-10 lg:p-20">
        <div className="absolute top-0 left-0 pt-4">
          <BgComponent colorImportant={true} />
        </div>
        <img className="rounded-2xl z-0 max-h-[700px]" src={imagePath} />
      </div>
    </div>
  );
};

export default AboutAs;
