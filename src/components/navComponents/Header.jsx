import React from 'react'


import {
  AiOutlineTwitter,

} from "react-icons/ai";

import { HiOutlinePlus, HiUserCircle } from "react-icons/hi";

const Header=({props})=>{
    const {active, setActive, setModal, modal}= props
    return (
   
      <div className="flex-column bg-black text-white border-gray-400 border-b-2  lg:w-[80vw] lg:mx-[20vw] md:mx-[10vw] md:w-[90vw]">
        <ul className="flex py-2 relative h-[4rem] md:h-[8rem]">
          <button
            className="absolute text-gray-400 left-2 justify-self-start px-3 md:hidden"
            onClick={() => setModal(true)}
          >
            <HiUserCircle size={"30px"}></HiUserCircle>
          </button>
          <li className="absolute top-2 left-[45%] text-blue-500">
            <AiOutlineTwitter size={35}></AiOutlineTwitter>
          </li>
        </ul>
        <ul className="flex  font-semibold h-18 text-gray-500">
          <button
            className={`w-1/2 ${
              active
                ? " text-white border-b-4 border-blue-500 relative my-transition"
                : " border-transparent"
            } pb-1 h-full border-b-4 text-xl`}
            onClick={() => setActive(true)}
          >
            For you
          </button>
          <button
            className={`w-1/2 ${
              !active
                ? " text-white   border-blue-500 relative my-transition"
                : "border-transparent"
            } pb-1 h-full border-b-4 text-xl`}
            onClick={() => setActive(false)}
          >
            Following
          </button>
        </ul>
      </div>
    )
}

export default Header