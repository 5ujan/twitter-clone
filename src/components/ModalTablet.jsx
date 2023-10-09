import React from "react";
import data from "./data";

import {
  AiOutlineTwitter,
  AiOutlineUser,
  AiFillTwitterSquare,
  AiOutlineLogout,
  AiOutlineQuestion,
} from "react-icons/ai";
import { SlSpeech } from "react-icons/sl";
import { RiUserHeartLine } from "react-icons/ri";
import { MdVerified } from "react-icons/md";
import { CgLoadbarSound } from "react-icons/cg";
import {
  BsBookmark,
  BsCardChecklist,
  BsChevronDown,
  BsChevronUp,
  BsThreeDots,
} from "react-icons/bs";
import { IoClose, IoSettingsSharp } from "react-icons/io5";
import { HiOutlinePlus, HiUserCircle } from "react-icons/hi";

const ModalTablet = ({props}) => {
    const {
      setMisc,
      showMisc,
      miscRef,
      showCs,
      setShowCs,
      showSetting,
      setShowSetting,
    } = props;
  return (
    <>
      {" "}
      <div
        className={`h-[100vh] w-[10vw] bg-black text-white fixed flex-col py-2 shadow-[0_0px_5px_0px_rgba(217,217,217,0.2)] top-0 hidden md:w-[10vw] md:block lg:hidden`}
      >
        <section className="w-[10vw] ">
          <ul className="flex-col border-b-[1px] border-gray-600 w-[100%] px-[2vw] text-xl font-bold ">
            <button className="grid content-center active:text-gray-600 transition hover:text-gray-400">
              <span>
                <AiOutlineUser size={35}></AiOutlineUser>
              </span>
            </button>
            <button>
              <span>
                <AiFillTwitterSquare size={35}></AiFillTwitterSquare>
              </span>
            </button>
            <button>
              <span>
                <SlSpeech size={35}></SlSpeech>
              </span>
            </button>
            <button>
              <span>
                <BsBookmark size={35}></BsBookmark>
              </span>
            </button>
            <button>
              <span>
                <BsCardChecklist size={35}></BsCardChecklist>
              </span>
            </button>
            <button>
              <span>
                <RiUserHeartLine size={35}></RiUserHeartLine>
              </span>
            </button>
            <button>
              <span>
                <MdVerified size={35}></MdVerified>
              </span>
            </button>
            <button
              ref={miscRef}
              onClick={() => {
                setMisc(!showMisc);
              }}
            >
              <span>
                <BsThreeDots size={35}></BsThreeDots>
              </span>
            </button>
          </ul>
        </section>
      </div>
     
      {showMisc && miscRef.current && (
        <section
          className={` w-[40vw]  left-[${
            miscRef.current.offsetLeft + miscRef.current.offsetWidth + 10
          }px] top-[${miscRef.current.offsetTop}px] `}
        >
          <div className="w-[90%] m-auto font-bold text-lg">
            <button
              className="flex items-center w-full py-3 justify-between mb-[-0.8rem]"
              onClick={() => setShowCs(!showCs)}
            >
              <p>Creator studios</p>{" "}
              <span>
                {showCs ? (
                  <BsChevronUp></BsChevronUp>
                ) : (
                  <BsChevronDown></BsChevronDown>
                )}
              </span>
            </button>
            <p className={`flex  ${showCs ? "" : "hidden"}`}>
              {" "}
              <CgLoadbarSound size={35}></CgLoadbarSound> Analytics
            </p>
          </div>
          <div className="w-[90%] m-auto font-bold text-lg">
            <button
              className="flex items-center w-full py-3 justify-between my-transition mb-[-0.8rem]"
              onClick={() => setShowSetting(!showSetting)}
            >
              <p>Settings and support</p>{" "}
              <span>
                {showSetting ? (
                  <BsChevronUp></BsChevronUp>
                ) : (
                  <BsChevronDown></BsChevronDown>
                )}
              </span>
            </button>
            <ul className={showSetting ? "" : "hidden"}>
              <li className="flex items-center w-[37%] justify-between">
                {" "}
                <IoSettingsSharp></IoSettingsSharp> Settings
              </li>
              <li className="flex items-center w-[25%] justify-between">
                {" "}
                <AiOutlineQuestion></AiOutlineQuestion>Help
              </li>

              <li className="flex items-center w-[36%] justify-between ">
                {" "}
                <AiOutlineLogout></AiOutlineLogout>Log Out
              </li>
            </ul>
          </div>
        </section>
      )}
      <section className=" flex-col justify-between w-[95%] items-center px-4  text-lg font-semibold absolute bottom-[2rem] hidden md:block lg:hidden ">
        <button className="text-gray-400">
          <HiUserCircle size={35}></HiUserCircle>
        </button>
      </section>
    </>
  );
};

export default ModalTablet;
