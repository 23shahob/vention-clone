import React from "react";
import One from "../../public/1.svg";
import Two from "../../public/2.svg";
import Three from "../../public/3.svg";
import Four from "../../public/4.svg";
import Five from "../../public/5.svg";
import Six from "../../public/6.svg";
import Seven from "../../public/7.svg";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const Section = () => {
  return (
    <div className="mt-[82px]">
      <div className="border-b border-gray-300 px-[28px] pb-[41px] pt-[158px]">
        <p className="mb-3 text-[41px] font-medium dark:text-white">
          Recognized as a leader by those in the know
        </p>
        <p className="text-[18px] dark:text-white">
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
      <div className="w-[70%] dark:bg-[#29292B]">
        <div className="border-b border-r border-gray-300 px-7 pb-10 pt-[158px]">
          <p className="text-[41px] font-medium dark:text-white">Contact us</p>
        </div>
        <div>
          <div className="flex border-b border-r border-gray-300">
            <div className="h-[60px] w-[50%] border-r border-gray-300">
              <input
                className="h-full w-full px-7 outline-none dark:bg-[#29292B]"
                type="text"
                placeholder="Full name"
              />
            </div>
            <div className="h-[60px] w-[50%]">
              <input
                className="h-full w-full px-7 outline-none dark:bg-[#29292B]"
                type="email"
                placeholder="Work email"
              />
            </div>
          </div>
          <div className="flex border-b border-r border-gray-300">
            <div className="h-[60px] w-[50%] border-r border-gray-300">
              <input
                className="h-full w-full px-7 outline-none dark:bg-[#29292B]"
                type="tel"
                placeholder="Phone (optional)"
              />
            </div>
            <div className="flex h-[60px] w-[50%] items-center justify-between px-7">
              <label
                className="w-full cursor-pointer text-gray-400"
                htmlFor="upload"
              >
                Upload file (max file size is 30MB)
              </label>
              <input
                className="hidden h-full w-full px-7 outline-none dark:bg-[#29292B]"
                type="file"
                id="upload"
              />
              <FileUploadIcon className="cursor-pointer text-gray-400" />
            </div>
          </div>
          <div className="flex h-[160px] border-b border-r border-gray-300">
            <div className="">
              <input
                className="h-full w-full px-7 py-5 leading-none outline-none dark:bg-[#29292B]"
                type="text"
                placeholder="How can we help you?"
              />
            </div>
            <div className="absolute right-0 flex h-[160px] w-[27.7%] cursor-pointer items-center justify-center bg-[#3155FF] hover:bg-[#101C57]">
              <span className="text-[20px] font-medium text-white">Send</span>
            </div>
          </div>
          <div className="flex h-[54px] justify-between border-b border-gray-300">
            <div className="flex items-center gap-5 px-7 py-[18px]">
              <input className="h-4 w-4" type="checkbox" />
              <p className="text-[12px] dark:text-white font-light">
                I agree to the{" "}
                <a
                  data-linktype="page"
                  data-id="932"
                  data-parent-id="353"
                  href="https://ventionteams.com/privacy-policy"
                  target="_self"
                  className="underline"
                >
                  Privacy Policy
                </a>{" "}
                and give my permission to process my personal data for the
                purposes specified in the Privacy Policy.
              </p>
            </div>
            <div className="h-full w-[118px] bg-[#3155FF]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
