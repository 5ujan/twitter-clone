import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { AiOutlineHeart, AiOutlineComment, AiOutlineRetweet } from 'react-icons/ai'
import { BsBookmarkPlus } from 'react-icons/bs'
import {post} from '../data'

const SinglePost = ()=>{

    console.log(post);
    return (
      <section className="w-full p-4 flex flex-col border-gray-600 border-b-[1px]">
        <div className="flex justify-between items-start">
          <div className="w-12 h-12  rounded-full  overflow-hidden">
            <img
              className="w-full h-full object-cover object-center "
              src={"/assets/panda.jpg"}
              alt=""
            />
          </div>
          <div className="flex flex-col flex-1 pl-4">
            <div className="flex">
              <button className="mr-2 font-bold">{post.createdBy}</button>
              <button className="text-gray-400 mr-2">{post.username}</button>
              <h1 className="text-gray-400">{post.createdOn}</h1>
            </div>
            <div>{post.caption}</div>
            <div className="w-full max-w-[40rem] h-auto overflow-hidden rounded-xl border-gray-400 border-[1px] bg-red-500">
              <img className='w-full'
                src="https://bmj2k.files.wordpress.com/2016/12/random.png?w=490&h=348"
                alt=""
              />
            </div>
          </div>
          <button className="text-gray-400">
            <BsThreeDots />
          </button>
        </div>
        <div className='flex text-gray-400 pt-4 w-full max-w-[50rem] text-lg justify-around'>
           <button className='flex '>
            <AiOutlineHeart></AiOutlineHeart>
            <p className='text-sm pl-1'>
                {post.likes}
                </p>
            </button> 
           <button className='flex '>
            
            <AiOutlineComment></AiOutlineComment>
            <p className='text-sm pl-1'>
                {post.comments}
                </p>
            </button> 
           <button className='flex '>
           
            <AiOutlineRetweet></AiOutlineRetweet>
            <p className='text-sm pl-1'>
                {post.retweets}
                </p>
            </button> 
          <button>
            <BsBookmarkPlus></BsBookmarkPlus>
          </button>
        </div>
      </section>
    );
}

export default SinglePost