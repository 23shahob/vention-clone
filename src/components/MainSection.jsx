import React from "react";
import Marquee from "./Marquee";
import Links from "./Links";
import Link2 from "./Link2";
import Slide from "./Slide";
import Partnership from "./Partnership";
import ControlledAccordions from "./Accordion";
import Section from "./Section";

const MainSection = () => {
  return (
    <div className="flex">
      <div className="w-[455px] border-r border-r-gray-300"></div>
      <div>
        <div className="border-b border-b-gray-300 px-[26px] pt-[145px] font-medium">
          <h2 className="mb-5 text-[30px] dark:text-white">
            With 20+ years of providing software development services for
            technological enterprises, successful startups, and AI-empowered
            companies worldwide, our developers demonstrate exceptional
            efficiency and expertise.
          </h2>
          <p className="text-end text-[17px] font-normal dark:text-white">
            On average, Vention clients benefit $600,000+ from annual savings as
            a result <br /> of our collaboration.
          </p>
          <div className="h-[60px]"></div>
        </div>
        <div className="flex border-b border-b-gray-300">
          <div className="w-[50%]">
            <div className="h-[190px] px-[26px] py-[38px]">
              <p className="text-[20px] font-medium text-[#52002D] dark:text-[#FF977E]">
                Key stats
              </p>
            </div>
            <div className="flex h-[190px]">
              <div className="w-[50%] px-[26px] py-[38px] leading-none">
                <h1 className="mb-[26px] text-start text-[75px] text-[#52002D] dark:text-[#FF977E]">
                  36
                </h1>
                <p className="text-[17px] text-white">
                  month average engagement
                </p>
              </div>
              <div className="w-[50%] px-[26px] py-[38px] leading-none">
                <h1 className="mb-[26px] text-start text-[75px] text-[#52002D] dark:text-[#FF977E]">
                  20+
                </h1>
                <p className="text-[17px] text-white">client IPOs supported</p>
              </div>
            </div>
          </div>
          <div className="w-[50%]">
            <div className="flex h-[190px]">
              <div className="w-[50%] px-[26px] py-[38px] leading-none">
                <h1 className="mb-[26px] text-start text-[75px] text-[#52002D] dark:text-[#FF977E]">
                  500+
                </h1>
                <p className="text-[17px] text-white">award-winning clients</p>
              </div>
              <div className="w-[50%] px-[26px] py-[38px] leading-none">
                <h1 className="mb-[26px] text-start text-[75px] text-[#52002D] dark:text-[#FF977E]">
                  $15B+
                </h1>
                <p className="text-[17px] text-white">in client acquisitions</p>
              </div>
            </div>
            <div className="flex h-[190px]">
              <div className="w-[50%] px-[26px] py-[38px] leading-none">
                <h1 className="mb-[26px] text-start text-[75px] text-[#52002D] dark:text-[#FF977E]">
                  20+
                </h1>
                <p className="text-[17px] text-white">years of experience</p>
              </div>
              <div className="w-[50%] px-[26px] py-[38px] leading-none">
                <h1 className="mb-[26px] text-start text-[75px] text-[#52002D] dark:text-[#FF977E]">
                  3K+
                </h1>
                <p className="text-[17px] text-white">world-class engineers</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-b-gray-300 px-[26px] pb-[38px] pt-[147px]">
          <h3 className="mb-5 text-[38px] font-medium leading-none text-white">
            Trusted by the best
          </h3>
          <p className="text-[17px] font-light text-white">
            Companies ranging from early-stage startups to Fortune 500
            enterprises partner with us to develop game-changing growth
            solutions.
          </p>
        </div>
        <div className="border-b border-b-gray-300">
          <marquee direction="left">
            <Marquee />
          </marquee>
        </div>
        <div className="flex border-b border-b-gray-300">
          <div className="w-[50%]"></div>
          <div className="w-[50%] px-[26px] pb-[38px] pt-[147px]">
            <p className="mb-5 text-[20px] text-[#52002D] dark:text-[#FF977E]">
              We speak your language
            </p>
            <p className="mb-5 text-[38px] font-medium leading-[130%] text-white">
              Wondering how well we know your industry? Curious which tech
              stacks we support?
            </p>
            <p className="text-[17px] font-light text-white">
              Spanning 30+ verticals and 25+ technologies, our team has designed
              and implemented innovative solutions to suit even the most unique
              needs.
            </p>
          </div>
        </div>
        <Links />
        <Link2 />
        <Slide />
        <Partnership />
        <ControlledAccordions />
        <div className="absolute left-0 flex h-[82px] w-full items-center bg-[#5AFB7A] hover:bg-[#004051] hover:text-white">
          <p className="px-[146px] text-[21px]  font-medium">View all</p>
        </div>
        <Section />
      </div>
    </div>
  );
};

export default MainSection;
