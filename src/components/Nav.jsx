import { useRef, useState } from "react";

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
import data from "./data";

const Nav = () => {
  const [active, setActive] = useState(true);
  const [modal, setModal] = useState(false);
  const [showCs, setShowCs] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  const [showMisc, setMisc] = useState(false);

  const miscRef= useRef(null)









  return (
    <>
      <div className="flex-column bg-black text-white border-gray-400 border-b-2 md:mx-auto w-[80vw]">
        <ul className="flex py-2 relative h-[4rem]">
          <button
            className="absolute text-gray-400 left-2 justify-self-start px-3"
            onClick={() => setModal(true)}
          >
            <HiUserCircle size={"30px"}></HiUserCircle>
          </button>
          <li className="absolute top-2 left-[45%] text-blue-500">
            <AiOutlineTwitter size={30}></AiOutlineTwitter>
          </li>
        </ul>
        <ul className="flex justify-around font-semibold h-18 text-gray-500">
          <button
            className={`${
              active
                ? " text-white border-b-4 border-blue-500 relative"
                : " border-transparent"
            } pb-1 h-full border-b-4`}
            onClick={() => setActive(true)}
          >
            For you
          </button>
          <button
            className={`${
              !active
                ? " text-white   border-blue-500 relative"
                : "border-transparent"
            } pb-1 h-full border-b-4 `}
            onClick={() => setActive(false)}
          >
            Following
          </button>
        </ul>
      </div>
      <div
        className={`h-[100vh] w-2/3 bg-black text-white fixed flex-col py-2 shadow-[0_0px_5px_0px_rgba(217,217,217,0.2)] top-0 ${
          modal ? "" : "right-[-300rem]"
        } md:hidden`}
      >
        <section className=" flex-col justify-between w-[95%] items-center px-4  text-lg font-semibold">
          <div className="flex justify-between py-3">
            <div>Account info</div>
            <button className="md:hidden" onClick={() => setModal(false)}>
              <IoClose size={30}></IoClose>
            </button>
          </div>
          <div className="flex-col items-start">
            <ul className="flex justify-between pt-3  ">
              <button className="text-gray-400" onClick={() => setModal(true)}>
                <HiUserCircle size={45}></HiUserCircle>
              </button>
              <li className="border-[1px] h-[32px] border-blue-400 rounded-full">
                <HiOutlinePlus size={30}></HiOutlinePlus>
              </li>
            </ul>
            <ul className="pb-3">
              <div className="text-white">{data[0].name}</div>
              <div className="text-gray-400 text-[1rem] font-light my-[-7px]">
                {data[0].username}
              </div>
            </ul>
            <ul className="flex justify-start">
              <div className="text-gray-400 text-[0.9rem] font-light pr-3">
                <span className="text-white font-bold">
                  {data[0].following}
                </span>{" "}
                Following
              </div>
              <div className="text-gray-400 text-[0.9rem] font-light">
                <span className="text-white font-bold">
                  {data[0].followers}
                </span>{" "}
                Followers
              </div>
            </ul>
          </div>
        </section>
        <section>
          <ul className="flex-col border-b-[1px] border-gray-600 pb-3 items-start w-[90%] m-auto text-xl font-bold">
            <button className="md:bg-red">
              <span>
                <AiOutlineUser></AiOutlineUser>{" "}
              </span>{" "}
              Profile
            </button>
            <button>
              <span>
                <AiFillTwitterSquare></AiFillTwitterSquare>
              </span>{" "}
              Twitter Blue
            </button>
            <button>
              {" "}
              <span>
                {" "}
                <SlSpeech></SlSpeech>{" "}
              </span>{" "}
              Topics
            </button>
            <button>
              <span>
                <BsBookmark></BsBookmark>{" "}
              </span>{" "}
              Bookmarks
            </button>
            <button>
              <span>
                <BsCardChecklist></BsCardChecklist>
              </span>{" "}
              Lists
            </button>
            <button>
              <span>
                {" "}
                <RiUserHeartLine></RiUserHeartLine>{" "}
              </span>
              Twitter Circle
            </button>
            <button>
              <span>
                <MdVerified></MdVerified>
              </span>
              Verified Orgs
            </button>
          </ul>
        </section>
        <section>
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
              <CgLoadbarSound size={30}></CgLoadbarSound> Analytics
            </p>
          </div>
          <div className="w-[90%] m-auto font-bold text-lg">
            <button
              className="flex items-center w-full py-3 justify-between  mb-[-0.8rem]"
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
      </div>
                  
      <div
        className={`h-[100vh] w-[10vw] bg-black text-white fixed flex-col py-2 shadow-[0_0px_5px_0px_rgba(217,217,217,0.2)] top-0 "
        }sd:hidden md:w-[10vw]`}
      >
        <section className="w-[10vw] ">
          <ul className="flex-col border-b-[1px] border-gray-600 w-[100%] px-[2vw] text-xl font-bold ">
            <button className="grid content-center active:text-gray-600 transition hover:text-gray-400">
              <span>
                <AiOutlineUser size={45}></AiOutlineUser>
              </span>
            </button>
            <button>
              <span>
                <AiFillTwitterSquare size={45}></AiFillTwitterSquare>
              </span>
            </button>
            <button>
              
              <span>
                
                <SlSpeech size={45}></SlSpeech>
              </span>
            </button>
            <button>
              <span>
                <BsBookmark size={45}></BsBookmark>
              </span>
            </button>
            <button>
              <span>
                <BsCardChecklist size={45}></BsCardChecklist>
              </span>
            </button>
            <button>
              <span>
                
                <RiUserHeartLine size={45}></RiUserHeartLine>
              </span>
            </button>
            <button>
              <span>
                <MdVerified size={45}></MdVerified>
              </span>
            </button>
            <button ref= {miscRef} onClick={()=>{setMisc(!showMisc)}}>
              <span>
                <BsThreeDots size={45}></BsThreeDots>
              </span>
            </button>
          </ul>
        </section>
        

        </div>
        
        {showMisc&&miscRef.current&&
         <section  className={` w-[40vw]  left-[${(miscRef.current.offsetLeft+ miscRef.current.offsetWidth) + 10}px] top-[${miscRef.current.offsetTop}px]`}>
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
              <CgLoadbarSound size={45}></CgLoadbarSound> Analytics
            </p>
          </div>
          <div className="w-[90%] m-auto font-bold text-lg">
            <button
              className="flex items-center w-full py-3 justify-between  mb-[-0.8rem]"
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
        </section>}
        
        <section className=" flex-col justify-between w-[95%] items-center px-4  text-lg font-semibold absolute bottom-[2rem]">
          <button className="text-gray-400" onClick={() => setModal(true)}>
            <HiUserCircle size={45}></HiUserCircle>
          </button>
        </section>
    </>
  );
};
export default Nav;
