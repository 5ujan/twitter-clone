import React from 'react'
import data from './data';

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


const ModalPhone=({props})=>{
    const {modal, setModal,  showSetting, setShowSetting}= props
    
    return (
      <div
        className={`h-[100vh] w-2/3 bg-black text-white fixed flex-col py-2 shadow-[0_0px_5px_0px_rgba(217,217,217,0.2)] top-0 ${
          modal ? "left-[0]" : "left-[-300rem] "
        } modal-transition md:hidden lg:left-[0] lg:w-1/5 lg:block` }
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
                <HiUserCircle size={35}></HiUserCircle>
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
              className="flex items-center w-full py-3 justify-between  mb-[-0.8rem]"
              onClick={() => setShowSetting(!showSetting)}
            >
              <p>Settings</p>{" "}
              <span>
                {showSetting ? (
                  <BsChevronUp></BsChevronUp>
                ) : (
                  <BsChevronDown></BsChevronDown>
                )}
              </span>
            </button>
            <ul className={`overflow-hidden ${showSetting ? "max-h-auto" : "max-h-[0]"}`}>
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
    );
}

export default ModalPhone