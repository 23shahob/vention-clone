import React, { useState } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Img01 from "../../public/img1.webp";
import Img02 from "../../public/img2.webp";
import Img03 from "../../public/img3.webp";
import Img04 from "../../public/img4.webp";

const Carousel = () => {
  const [slide, setSlide] = useState(1);

  return (
    <div className="relative w-full border-b border-b-gray-300 pb-14 pt-8 dark:bg-[#29292B]">
      {slide === 1 && (
        <div className="dark:bg-[#29292B]">
          <div className="flex">
            <div className="flex h-[290px] w-[50%]">
              <div className="w-[30px]"></div>
              <div className="flex items-center bg-[#FF6A47] px-[30px]">
                <h1 className="text-[65px] leading-none">
                  Engineering peace of mind
                </h1>
              </div>
            </div>
            <div className="relative w-[50%] p-[30px]">
              <div className="absolute bottom-[30px] right-[30px] flex gap-4">
                <span
                  onClick={() => {
                    setSlide(1);
                  }}
                  className="number w-36 cursor-pointer border-t border-t-[#FF6A47] text-[#FF6A47]"
                >
                  01
                </span>
                <span
                  onClick={() => {
                    setSlide(2);
                  }}
                  className="number w-8 cursor-pointer border-t border-t-gray-300 text-gray-300"
                >
                  02
                </span>
                <span
                  onClick={() => {
                    setSlide(3);
                  }}
                  className="number w-8 cursor-pointer border-t border-t-gray-300 text-gray-300"
                >
                  03
                </span>
                <span
                  onClick={() => {
                    setSlide(4);
                  }}
                  className="number w-8 cursor-pointer border-t border-t-gray-300 text-gray-300"
                >
                  04
                </span>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="relative flex w-[50%]">
              {/* <div className="w-[50%]"></div> */}
              <div className="absolute bottom-0 right-[30px] flex w-[50%] flex-col gap-y-[30px] px-[30px]">
                <span className="text-[17px] dark:text-white">
                  Vention developers partner with innovative companies from
                  startups to Fortune 500s, lending the AI engineering expertise
                  to propel them to new heights and the edge to outpace the
                  competition.
                </span>
                <div className="flex h-[60px] cursor-pointer items-center justify-between bg-[#FF6A47] px-7 py-4 font-bold transition duration-300 hover:bg-[#52002D] hover:text-white">
                  <span className="text-[20px]">Get an estimate</span>
                  <ArrowOutwardIcon />
                </div>
              </div>
            </div>
            <div className="w-[50%]">
              <img src={Img01} alt="" />
            </div>
          </div>
        </div>
      )}
      {slide === 2 && (
        <div>
          <div className="flex">
            <div className="flex h-[290px] w-[50%]">
              <div className="w-[30px]"></div>
              <div className="flex items-center bg-[#FF6FFF] px-[30px]">
                <h1 className="text-[65px] leading-none">
                  International Invention Day
                </h1>
              </div>
            </div>
            <div className="relative w-[50%] p-[30px]">
              <div className="absolute bottom-[30px] right-[30px] flex gap-4">
                <span
                  onClick={() => {
                    setSlide(1);
                  }}
                  className="number w-8 cursor-pointer border-t border-t-gray-300 text-gray-300"
                >
                  01
                </span>
                <span
                  onClick={() => {
                    setSlide(2);
                  }}
                  className="number w-36 cursor-pointer border-t border-t-[#39175B] text-[#39175B]"
                >
                  02
                </span>
                <span
                  onClick={() => {
                    setSlide(3);
                  }}
                  className="number w-8 cursor-pointer border-t border-t-gray-300 text-gray-300"
                >
                  03
                </span>
                <span
                  onClick={() => {
                    setSlide(4);
                  }}
                  className="number w-8 cursor-pointer border-t border-t-gray-300 text-gray-300"
                >
                  04
                </span>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="relative flex w-[50%]">
              {/* <div className="w-[50%]"></div> */}
              <div className="absolute bottom-0 right-[30px] flex w-[50%] flex-col gap-y-[30px] px-[30px]">
                <span className="text-[17px] dark:text-white">
                  On May 16, Vention kicks off International Invention Day,
                  celebrating human creativity and game-changing inventions.
                  Until June 30, you’ll also have a chance to join the
                  In:Vention Incubator and win 12 weeks of our top-tier services
                  worth $150K USD in in-house software development.
                </span>
                <div className="flex h-[60px] cursor-pointer items-center justify-between bg-[#FF6FFF] px-7 py-4 font-bold transition duration-300 hover:bg-[#39175B] hover:text-white">
                  <span className="text-[20px]">Enter the contest</span>
                  <ArrowOutwardIcon />
                </div>
              </div>
            </div>
            <div className="w-[50%]">
              <img src={Img02} alt="" />
            </div>
          </div>
        </div>
      )}
      {slide === 3 && (
        <div>
          <div className="flex">
            <div className="flex h-[290px] w-[50%]">
              <div className="w-[30px]"></div>
              <div className="flex items-center bg-[#FF6A47] px-[30px]">
                <h1 className="text-[65px] leading-none">AI innovation</h1>
              </div>
            </div>
            <div className="relative w-[50%] p-[30px]">
              <div className="absolute bottom-[30px] right-[30px] flex gap-4">
                <span
                  onClick={() => {
                    setSlide(1);
                  }}
                  className="number w-8 cursor-pointer border-t border-t-gray-300 text-gray-300"
                >
                  01
                </span>
                <span
                  onClick={() => {
                    setSlide(2);
                  }}
                  className="number w-8 cursor-pointer border-t border-t-gray-300 text-gray-300"
                >
                  02
                </span>
                <span
                  onClick={() => {
                    setSlide(3);
                  }}
                  className="number w-36 cursor-pointer border-t border-t-[#FF6A47] text-[#FF6A47]"
                >
                  03
                </span>
                <span
                  onClick={() => {
                    setSlide(4);
                  }}
                  className="number w-8 cursor-pointer border-t border-t-gray-300 text-gray-300"
                >
                  04
                </span>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="relative flex w-[50%]">
              {/* <div className="w-[50%]"></div> */}
              <div className="absolute bottom-0 right-[30px] flex w-[50%] flex-col gap-y-[30px] px-[30px]">
                <span className="text-[17px] dark:text-white">
                  As pioneers in AI engineering, we view it as more than a shiny
                  tool: it's a pillar of the new business normal. Those
                  companies that embrace and leverage AI will set the standard
                  and lead in their category. In our new State of AI report, we
                  look at funding, investment, and valuation trends across the
                  AI market.
                </span>
                <div className="flex h-[60px] cursor-pointer items-center justify-between bg-[#FF6A47] px-7 py-4 font-bold transition duration-300 hover:bg-[#52002D] hover:text-white">
                  <span className="text-[20px]">Read the report</span>
                  <ArrowOutwardIcon />
                </div>
              </div>
            </div>
            <div className="w-[50%]">
              <img src={Img03} alt="" />
            </div>
          </div>
        </div>
      )}
      {slide === 4 && (
        <div>
          <div className="flex">
            <div className="flex h-[290px] w-[50%]">
              <div className="w-[30px]"></div>
              <div className="flex items-center bg-[#3155FF] px-[30px] text-white">
                <h1 className="text-[65px] leading-none">
                  Expert software development
                </h1>
              </div>
            </div>
            <div className="relative w-[50%] p-[30px]">
              <div className="absolute bottom-[30px] right-[30px] flex gap-4">
                <span
                  onClick={() => {
                    setSlide(1);
                  }}
                  className="number w-8 cursor-pointer border-t border-t-gray-300 text-gray-300"
                >
                  01
                </span>
                <span
                  onClick={() => {
                    setSlide(2);
                  }}
                  className="number w-8 cursor-pointer border-t border-t-gray-300 text-gray-300"
                >
                  02
                </span>
                <span
                  onClick={() => {
                    setSlide(3);
                  }}
                  className="number w-8 cursor-pointer border-t border-t-gray-300 text-gray-300"
                >
                  03
                </span>
                <span
                  onClick={() => {
                    setSlide(4);
                  }}
                  className="number w-36 cursor-pointer border-t border-t-[#3155FF] text-[#3155FF]"
                >
                  04
                </span>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="relative flex w-[50%]">
              {/* <div className="w-[50%]"></div> */}
              <div className="absolute bottom-0 right-[30px] flex w-[50%] flex-col gap-y-[30px] px-[30px]">
                <span className="text-[17px] dark:text-white">
                  Get it done right — the first time. Our proven software
                  expertise and engagement flexibility mean you don’t have to
                  worry about timelines, processes, or outcomes. Proficient in
                  web, mobile, cloud, and advanced tech like AI and VR, we
                  empower you to innovate and grow your business at the scale
                  and speed of future trends.
                </span>
                <div className="flex h-[60px] cursor-pointer items-center justify-between bg-[#3155FF] px-7 py-4 font-bold text-white transition duration-300 hover:bg-[#101C57] hover:text-white">
                  <span className="text-[20px]">Read the report</span>
                  <ArrowOutwardIcon />
                </div>
              </div>
            </div>
            <div className="w-[50%]">
              <img src={Img04} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
