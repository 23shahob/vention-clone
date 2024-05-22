import React from "react";

const Links = () => {
  return (
    <div className="flex border-b border-b-gray-300 py-[41px]">
      <div className="w-[50%] px-[26px]">
        <span className="text-[#52002D] dark:text-[#FF977E]">Expertise</span>
      </div>
      <div className="flex w-[50%] justify-between px-7">
        <div className="flex w-[300px] flex-col gap-y-2">
          <a className="font-medium underline text-white hover:text-[#52002D]" href="#">
            Software development
          </a>
          <a className="font-medium underline text-white hover:text-[#52002D]" href="#">
            Web development
          </a>
          <a className="font-medium underline text-white hover:text-[#52002D]" href="#">
            Mobile development
          </a>
          <a className="font-medium underline text-white hover:text-[#52002D]" href="#">
            Startup services
          </a>
          <a className="font-medium underline text-white hover:text-[#52002D]" href="#">
            Cloud services
          </a>
        </div>
        <div className="flex w-[300px] flex-col gap-y-2">
          <a className="font-medium underline text-white hover:text-[#52002D]" href="#">
            Blockchain
          </a>
          <a className="font-medium underline text-white hover:text-[#52002D]" href="#">
            AR/VR
          </a>
          <a className="font-medium underline text-white hover:text-[#52002D]" href="#">
            Salesforce
          </a>
          <a className="font-medium underline text-white hover:text-[#52002D]" href="#">
            Artificial intelligence
          </a>
          <a className="font-medium underline text-white hover:text-[#52002D]" href="#">
            Internet of things
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;
