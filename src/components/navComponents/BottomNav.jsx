import React from 'react'
import { BsBookmark } from 'react-icons/bs';
import { AiOutlineSearch, AiOutlineHome } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";



const BottomNav=()=>{
    return (
      <>
        <section className=" text-white flex w-[100vw] text-3xl justify-around absolute bottom-0 bg-black h-20 lg:hidden md:hidden">
          <button>
            <AiOutlineHome/>
          </button>
          <button>
            <AiOutlineSearch></AiOutlineSearch>
          </button>
          <button>
            <IoIosNotificationsOutline></IoIosNotificationsOutline>
          </button>
          <button>
            <BsBookmark></BsBookmark>
          </button>
        </section>
      </>
    );
}

export default BottomNav