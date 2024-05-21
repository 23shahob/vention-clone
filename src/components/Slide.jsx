import React, { useState } from "react";
import Person1 from "../../public/person1.webp";
import Person2 from "../../public/person2.jpeg";
import Person3 from "../../public/person3.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Slide = () => {
  const [change, setChange] = useState(1);
  return (
    <div className="border-b border-b-gray-300">
      <div className="mb-[118px] bg-[#FF6FFF]">
        <div>
          {change === 1 && (
            <div className="relative px-[26px] h-[625px] pt-[100px]">
              <div className="flex justify-between">
                <div>
                  <img
                    className="mb-5 h-[180px] w-[180px]"
                    src={Person1}
                    alt="Person Img"
                  />
                  <p className="mb-2 text-[21px] font-medium">
                    Benjamin Maisano
                  </p>
                  <p className="text-[15px] font-light">CTO at Mount Sinai</p>
                </div>
                <div className="w-[65%] px-[26px]">
                  <p className="mb-12 text-[41px] font-medium leading-[130%]">
                    Vention has provided very talented engineers across web Ul,
                    mobile, backend APIs, and system designs, to data
                    integrations and beyond.
                  </p>
                  <p className="text-[15px] font-light">
                    Their staff integrated quickly and were dedicated to the
                    internal teams throughout the relationship, acting as long
                    term partners in our strategic digital efforts."
                  </p>
                </div>
              </div>
              <div className="absolute bottom-8 flex gap-3">
                <div className="flex h-[39px] w-[39px] items-center justify-center rounded-full border border-[#434345]">
                  <ArrowBackIcon className="text-[#434345]" />
                </div>
                <div
                  onClick={() => {
                    setChange(2);
                  }}
                  className="flex h-[39px] w-[39px] cursor-pointer items-center justify-center rounded-full border border-[#29292B] bg-[#29292B] hover:border-[#282C4E] hover:bg-[#282C4E]"
                >
                  <ArrowBackIcon className="rotate-180 text-white" />
                </div>
              </div>
            </div>
          )}
          {change === 2 && (
            <div className="relative px-[26px] h-[625px] pt-[100px]">
              <div className="flex justify-between">
                <div>
                  <img
                    className="mb-5 h-[180px] w-[180px]"
                    src={Person2}
                    alt="Person Img"
                  />
                  <p className="mb-2 text-[21px] font-medium">Guy Blachman</p>
                  <p className="text-[15px] font-light">
                    Executive Chairman of Carson Living
                  </p>
                </div>
                <div className="w-[65%] px-[26px]">
                  <p className="mb-12 text-[41px] font-medium leading-[130%]">
                    The service they provide is outstanding; they're excellent
                    engineers who know all the tools and deliver consistent
                    quality.
                  </p>
                  <p className="text-[15px] font-light">
                    When we wanted to add a QA person, they had a great resume
                    for us the next day. They're good employees, they show up
                    for work on time, and they go the extra mile if needed. We
                    treat them as an integral part of our organization."
                  </p>
                </div>
              </div>
              <div className="absolute bottom-8 flex gap-3">
                <div
                  onClick={() => {
                    setChange(1);
                  }}
                  className="flex h-[39px] w-[39px] cursor-pointer items-center justify-center rounded-full border border-[#29292B] bg-[#29292B] hover:border-[#282C4E] hover:bg-[#282C4E]"
                >
                  <ArrowBackIcon className="text-white" />
                </div>
                <div
                  onClick={() => {
                    setChange(3);
                  }}
                  className="flex h-[39px] w-[39px] cursor-pointer items-center justify-center rounded-full border border-[#29292B] bg-[#29292B] hover:border-[#282C4E] hover:bg-[#282C4E]"
                >
                  <ArrowBackIcon className="rotate-180 text-white" />
                </div>
              </div>
            </div>
          )}
          {change === 3 && (
            <div className="relative px-[26px] h-[625px] pt-[100px]">
              <div className="flex justify-between">
                <div>
                  <img
                    className="mb-5 h-[180px] w-[180px]"
                    src={Person3}
                    alt="Person Img"
                  />
                  <p className="mb-2 text-[21px] font-medium">Sean Grundy</p>
                  <p className="text-[15px] font-light">CEO at Bevi</p>
                </div>
                <div className="w-[65%] px-[26px]">
                  <p className="mb-12 text-[41px] font-medium leading-[130%]">
                    As an loT company, we've been impressed at how effectively
                    Vention has been able to help us from afar.
                  </p>
                  <p className="text-[15px] font-light">
                    They are clear and comprehensive when it comes to project
                    planning, budgeting, collecting user feedback, and revising
                    their work."
                  </p>
                </div>
              </div>
              <div className="absolute bottom-8 flex gap-3">
                <div
                  onClick={() => {
                    setChange(2);
                  }}
                  className="flex h-[39px] w-[39px] cursor-pointer items-center justify-center rounded-full border border-[#29292B] bg-[#29292B] hover:border-[#282C4E] hover:bg-[#282C4E]"
                >
                  <ArrowBackIcon className="text-white" />
                </div>
                <div className="flex h-[39px] w-[39px] items-center justify-center rounded-full border border-[#434345]">
                  <ArrowBackIcon className="rotate-180 text-[#434345]" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="absolute left-0 mt-[-118px] h-[118px] w-[118px] bg-[#FF6FFF]"></div>
    </div>
  );
};

export default Slide;
