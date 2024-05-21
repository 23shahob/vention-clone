import React from "react";
import One from "../../public/1.svg";
import Two from "../../public/2.svg";
import Three from "../../public/3.svg";
import Four from "../../public/4.svg";
import Five from "../../public/5.svg";
import Six from "../../public/6.svg";
import Seven from "../../public/7.svg";

const Section = () => {
  return (
    <div className="mt-[82px]">
      <div className="border-b border-gray-300 px-[28px] pb-[41px] pt-[158px]">
        <p className="mb-3 text-[41px] font-medium">
          Recognized as a leader by those in the know
        </p>
        <p className="text-[18px]">
          Year after year, Vention has been counted among best-in-class
          companies by the industry’s most respected institutions.
        </p>
      </div>
      <div className="flex h-[130px] justify-around border-b border-gray-300">
        <div className="h-[130px] w-[185px] p-[33px]">
          <img src={One} alt="Logo" />
        </div>
        <div className="h-[130px] w-[185px] p-[33px]">
          <img src={Two} alt="Logo" />
        </div>
        <div className="h-[130px] w-[185px] p-[33px]">
          <img src={Three} alt="Logo" />
        </div>
        <div className="h-[130px] w-[185px] p-[33px]">
          <img src={Four} alt="Logo" />
        </div>
        <div className="h-[130px] w-[185px] p-[33px]">
          <img src={Five} alt="Logo" />
        </div>
        <div className="h-[130px] w-[185px] p-[33px]">
          <img src={Six} alt="Logo" />
        </div>
        <div className="h-[130px] w-[185px] p-[33px]">
          <img src={Seven} alt="Logo" />
        </div>
      </div>
      <div className="border-b border-r border-gray-300 w-[70%] px-7 pb-10 pt-[158px]">
        <p className="text-[41px] font-medium">Contact us</p>
      </div>
    </div>
  );
};

export default Section;
