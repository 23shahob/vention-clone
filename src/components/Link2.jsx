import React from "react";

const Link2 = () => {
  return (
    <div className="flex border-b border-b-gray-300 pb-[65px] pt-[41px]">
      <div className="w-[50%] px-[26px]">
        <span className="text-[#52002D]">Industries</span>
      </div>
      <div className="flex w-[50%] justify-between px-7">
        <div className="flex w-[300px] flex-col gap-y-2">
          <a className="font-medium underline hover:text-[#52002D]" href="#">
            Fintech
          </a>
          <a className="font-medium underline hover:text-[#52002D]" href="#">
            Healthtech
          </a>
          <a className="font-medium underline hover:text-[#52002D]" href="#">
            Edtech
          </a>
        </div>
        <div className="flex w-[300px] flex-col gap-y-2">
          <a className="font-medium underline hover:text-[#52002D]" href="#">
            Ecommerce
          </a>
          <a className="font-medium underline hover:text-[#52002D]" href="#">
            Real estate
          </a>
          <a className="font-medium underline hover:text-[#52002D]" href="#">
            Marketing/Adtech
          </a>
        </div>
      </div>
    </div>
  );
};

export default Link2;
