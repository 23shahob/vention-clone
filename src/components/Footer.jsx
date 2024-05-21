import React from "react";
import EastIcon from "@mui/icons-material/East";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import Logo from "../../public/logo.svg";
import Iso from "../../public/iso.svg";
import Bbb from "../../public/bbb.png";

const Footer = () => {
  return (
    <div className="flex h-screen w-full bg-[#29292B]">
      <div className="w-[128px] border-r border-[#434345]"></div>
      <div className="w-full">
        <div className="flex h-[410px] w-full">
          <div className="w-[61.65%] border-b border-r border-[#434345] px-7 py-10">
            <p className="mb-5 text-[21px] text-white">
              Subscribe to our newsletter for industry <br /> insights and
              company news!
            </p>
            <form className="flex h-8 w-[415px] items-center border-b border-gray-500">
              <input
                type="text"
                placeholder="Email adress*"
                className="h-full w-full bg-transparent font-medium"
              />
              <EastIcon className="text-white" />
            </form>
            <div className="mb-[110px] flex items-center gap-5 py-[18px]">
              <input className="h-4 w-4" type="checkbox" />
              <p className="text-[12px] font-medium text-neutral-400">
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
                and give my permission to process my <br /> personal data for
                the purposes specified in the Privacy Policy.
              </p>
            </div>
            <div className="flex h-[68px] items-center gap-3">
              <div className="flex h-[37px] w-[66px] items-center gap-1 rounded-full border border-gray-600 p-[3px]">
                <NightlightIcon className="-rotate-45 text-white" />
                <div className="flex h-[29px] w-[29px] items-center justify-center rounded-full bg-[#FF6A47]">
                  <LightModeIcon />
                </div>
              </div>
              <p className="text-[15px] font-medium text-white">Light mode</p>
            </div>
          </div>
          <div className="flex w-[38.35%] justify-between border-b border-[#434345] px-7 py-10">
            <div>
              <ul className="mb-10 flex flex-col gap-y-2">
                <p className="mb-5 font-medium text-neutral-600">About</p>
                <li>
                  <a className="text-white hover:text-[#FF6A47]" href="#">
                    Company
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-[#FF6A47]" href="#">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-[#FF6A47]" href="#">
                    Partnerships
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-[#FF6A47]" href="#">
                    Newsroom
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-[#FF6A47]" href="#">
                    Media Kit
                  </a>{" "}
                </li>
                <li>
                  <a className="text-white hover:text-[#FF6A47]" href="#">
                    Careers
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-[#FF6A47]" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <iframe
                width="100%"
                src="https://widget.clutch.co/widgets/get/1?ref_domain=ventionteams.com&amp;uid=80203&amp;rel_nofollow=true&amp;ref_path=/"
                height="40px"
                //   style="border: none; overflow: hidden; display: block; height: 39px;"
              ></iframe>
            </div>
            <div>
              <ul className="mb-[150px] flex flex-col gap-y-2">
                <p className="mb-5 font-medium text-neutral-600">About</p>
                <li>
                  <a className="text-white hover:text-[#FF6A47]" href="#">
                    Dedicated development teams
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-[#FF6A47]" href="#">
                    Project-based delivery
                  </a>
                </li>
              </ul>
              <div className="flex gap-1">
                <img src={Iso} alt="Img" />
                {/* <img src={Bbb} alt="Img" /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[293px]">
          <div className="flex h-[293px] w-[61.65%] items-end border-r border-[#434345] px-7">
            <img className="h-[78px] w-[329px]" src={Logo} alt="Logo" />
          </div>
          <div className="w-[38.35%] px-7 py-10">
            <div className="mb-12 flex justify-between">
              <ul className="flex flex-col gap-y-2">
                <li>
                  <a className="text-white hover:text-[#FF6A47]" href="#">
                    Linkedin
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-[#FF6A47]" href="#">
                    Instagram
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-[#FF6A47]" href="#">
                    X (formerly Twitter)
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-[#FF6A47]" href="#">
                    Youtube
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col gap-y-2">
                <li>
                  <a className="text-white hover:text-[#FF6A47]" href="#">
                    US: +1 (718) 374-5043
                  </a>
                </li>
                <li className="text-white">
                  575 Lexington Avenue, 14th <br />
                  Floor
                </li>
                <li className="text-white">New York, NY-10022</li>
              </ul>
            </div>
            <span class="text-white">
              © 2002 - 2024. Vention All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
