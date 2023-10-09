import React from 'react'

const BottomNav=()=>{
    return (
      <>
        <section className="w-[10vw] sm:hidden lg:hidden ">
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
          </ul>
        </section>
      </>
    );
}