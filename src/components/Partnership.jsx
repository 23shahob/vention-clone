import React from "react";
import Marquee from "./Marquee";

const Partnership = () => {
  return (
    <div>
      <div className="px-7 pb-[41px] pt-[158px]">
        <h1 className="mb-3 text-[41px] font-medium text-white">
          Partnerships
        </h1>
        <p className="text-[18px] font-light text-white">
          Our network includes the world’s top tech leaders, ensuring that our
          developers always have access to cutting-edge technologies and
          products.
        </p>
      </div>
      <div className="border-b border-b-gray-300">
        <marquee direction="left">
          <Marquee />
        </marquee>
      </div>
      <div className="border-b border-gray-300 pb-[41px] pt-[158px]">
        <p className="text-center text-[41px] font-medium text-white">
          Our work
        </p>
      </div>
    </div>
  );
};

export default Partnership;
